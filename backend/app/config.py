from datetime import timedelta
import os
from dotenv import load_dotenv

# Load environment variables from instance/.env
env_path = os.path.join('/app', 'instance', '.env')
if os.path.exists(env_path):
    load_dotenv(env_path)

class Config:
    # Flask config
    SECRET_KEY = os.getenv('SECRET_KEY')
    DEBUG = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    PORT = int(os.getenv('PORT', os.getenv('DEFAULT_PORT')))
    HOST = os.getenv('DEFAULT_HOST')
    
    # Session config
    SESSION_LIFETIME = int(os.getenv('SESSION_LIFETIME'))
    
    @staticmethod
    def get_db_config():
        return {
            'host': os.getenv('MYSQL_HOST', os.getenv('DEFAULT_MYSQL_HOST')),
            'port': int(os.getenv('MYSQL_PORT', os.getenv('DEFAULT_MYSQL_PORT'))),
            'user': os.getenv('MYSQL_USER', os.getenv('DEFAULT_MYSQL_USER')),
            'password': os.getenv('MYSQL_PASSWORD'),
            'database': os.getenv('MYSQL_DATABASE', os.getenv('DEFAULT_MYSQL_DATABASE'))
        }
    
    @staticmethod
    def get_redis_config():
        return {
            'host': os.getenv('REDIS_HOST', os.getenv('DEFAULT_REDIS_HOST')),
            'port': int(os.getenv('REDIS_PORT', os.getenv('DEFAULT_REDIS_PORT'))),
            'db': int(os.getenv('REDIS_DB', os.getenv('DEFAULT_REDIS_DB'))),
            'password': os.getenv('REDIS_PASSWORD'),
            'decode_responses': True
        }
