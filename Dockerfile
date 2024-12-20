FROM python:3.9-slim

WORKDIR /app

# Install bash
RUN apt-get update && apt-get install -y bash && rm -rf /var/lib/apt/lists/*

# Create instance directory
RUN mkdir -p instance

# Create and activate virtual environment
RUN python -m venv .venv

# Copy backend files
COPY backend/requirements.txt .
COPY backend/wsgi.py .
COPY backend/app/ ./app/
COPY backend/instance/.env ./instance/.env

# Copy frontend dist files
COPY frontend/dist/ ./frontend/dist/

# Install dependencies in virtual environment
RUN /bin/bash -c "source .venv/bin/activate && pip install --no-cache-dir -r requirements.txt"

# Get port from environment variable
EXPOSE ${PORT}

# Run the application 
CMD ["/bin/bash", "-c", "source .venv/bin/activate && gunicorn --bind 0.0.0.0:${PORT} \
     --timeout 3600 \
     --workers 3 \
     --log-level debug \
     --error-logfile - \
     --access-logfile - \
     --capture-output \
     wsgi:app"]