# Base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy backend application code
COPY . .

# Copy frontend build from the frontend container
COPY --from=frontend /app/dist /app/frontend_dist

# Start the Gunicorn server
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
