Instructions:

Prerequisites

  Ensure you have the following installed:
        Docker, Python 3.x (for the HTTP server)


To run the application, follow these steps:

Step 1: Build and Run the Backend Using Docker

Open a terminal and navigate to the project directory.
Build and start the Docker container for the backend:

    docker-compose up --build
    
Step 2: Use Python for http server

Open a new terminal window.
Navigate to the frontend directory:

```cd frontend```

Start the Python HTTP server:

For windows:

```python -m http.server 8080```

For mac:

```python3 -m http.server 8080```

The frontend will now be accessible at http://localhost:8080/frontend/mainPage.html.
