#!/bin/bash

# Change directory to backend (if necessary)
cd "$(dirname "$0")/backend"

# Start the FastAPI app with uvicorn on the specified host and port
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
