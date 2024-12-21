from flask import Blueprint
from .aboutus import bp as aboutus_bp
from .auth import bp as auth_bp
from .breeder import bp as breeder_bp

bp = Blueprint('api', __name__, url_prefix='/api')

# Register individual blueprints for each module
bp.register_blueprint(aboutus_bp, url_prefix='/aboutus')
bp.register_blueprint(auth_bp, url_prefix='/auth')
bp.register_blueprint(breeder_bp, url_prefix='/breeder')
