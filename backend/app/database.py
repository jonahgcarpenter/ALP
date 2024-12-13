import mysql.connector
from mysql.connector import Error
from flask import current_app

def get_db_connection():
    try:
        return mysql.connector.connect(
            host=current_app.config['MYSQL_HOST'],
            port=current_app.config['MYSQL_PORT'],
            user=current_app.config['MYSQL_USER'],
            password=current_app.config['MYSQL_PASSWORD'],
            database=current_app.config['MYSQL_DATABASE']
        )
    except Error as e:
        print(f"Database connection failed: {e}")
        raise e
