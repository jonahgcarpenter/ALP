import mysql.connector
from flask import current_app, g

db = None

def init_mysql(app):
    """Initialize the MySQL database connection."""
    def connect_db():
        try:
            return mysql.connector.connect(
                host=app.config['MYSQL_HOST'],
                port=app.config['MYSQL_PORT'],
                user=app.config['MYSQL_USER'],
                password=app.config['MYSQL_PASSWORD'],
                database=app.config['MYSQL_DATABASE']
            )
        except mysql.connector.Error as err:
            current_app.logger.error(f"MySQL connection failed: {err}")
            return None

    @app.before_request
    def before_request():
        global db
        db = connect_db()

    @app.teardown_request
    def teardown_request(exception):
        if db:
            db.close()
