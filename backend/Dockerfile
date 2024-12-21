# Base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose backend port
EXPOSE 8000

# Use dynamic CMD (set by docker-compose)
CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]
