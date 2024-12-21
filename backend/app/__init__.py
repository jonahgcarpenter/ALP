from flask import Flask, send_from_directory
from .config import get_config
from .database import init_mysql
from flask_bcrypt import Bcrypt
import redis
import os

# Initialize extensions
bcrypt = Bcrypt()
redis_client = None

def create_app():
    app = Flask(
        __name__,
        static_folder=os.path.abspath(os.path.join(os.path.dirname(__file__), '../frontend/dist')),
        static_url_path='/'
    )

    # Load the appropriate configuration
    app.config.from_object(get_config())

    # Initialize database and Redis
    init_mysql(app)
    if app.config.get("REDIS_HOST"):
        global redis_client
        redis_client = redis.StrictRedis(
            host=app.config['REDIS_HOST'],
            port=app.config['REDIS_PORT'],
            db=app.config['REDIS_DB'],
            password=app.config['REDIS_PASSWORD'],
            decode_responses=True
        )

    # Initialize bcrypt
    bcrypt.init_app(app)

    # Import and register blueprints
    from .routes import bp as api_bp
    app.register_blueprint(api_bp)

    # Serve frontend static files
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_frontend(path):
        target_path = os.path.join(app.static_folder, path)
        if path != "" and os.path.exists(target_path):
            return send_from_directory(app.static_folder, path)
        elif os.path.exists(os.path.join(app.static_folder, 'index.html')):
            return send_from_directory(app.static_folder, 'index.html')
        else:
            return "Frontend files not found. Please build the frontend.", 404

    # Disable caching in development
    if app.config["DEBUG"]:
        @app.after_request
        def add_header(response):
            response.headers["Cache-Control"] = "no-store"
            return response

    return app
