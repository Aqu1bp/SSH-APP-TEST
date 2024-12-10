## Prerequisites

- Docker
- Python 3.x (for HTTP server)

## Installation and Setup

### 1. Backend Setup (Docker)

Clone the repository and navigate to the project directory where you've cloned it:

```bash
cd project-directory
docker-compose up --build
```

### 2. Frontend Setup

In a new terminal window, start the Python HTTP server:

```bash
cd frontend

# For Windows
python -m http.server 8080

# For macOS/Linux
python3 -m http.server 8080
```

The application will be accessible at:
```
http://localhost:8080/frontend/mainPage.html
```

## Running Tests

Ensure Docker container is running, then execute:
```bash
docker-compose run django pytest -v
```

## Features based on improved EDR

- Add items to cart
- Remove items from cart
- Calculate discounts:
  - Percentage-based discounts
  - Threshold-based discounts
  - Buy-one-get-one deals
- Multi-user support
- Real-time price updates

