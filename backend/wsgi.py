import logging
from app import create_app
from app.config import Config

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = create_app()

if __name__ == "__main__":
    # In Docker, we always bind to 0.0.0.0
    logger.info(f"Starting application on {Config.HOST}:{Config.PORT}")
    app.run(host=Config.HOST, port=Config.PORT)