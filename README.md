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

## 200 Word Summary

We have chosen the EDR written by Heng Cheng, not only because it got the highest score in the group but also because it has the best overall structure and details.

Based on feedback from the professor, we made several appropriate refinements, such as adding more technical details about the cost calculation process, particularly in relation to current promotions and discounts, as well as improvements on the mechanisms of API data fetching.

Our prototype resulted in an abstract application featuring a basic user interface for grocery shopping and delivery services. It allows students to form groups for shared shopping. Additionally, whenever a group member adds an item to the cart, it updates in real-time for all other members, pushing notifications and displaying the total cost of the cart, including any applicable promotions.

The application also includes privacy and security measures, such as encrypted data storage, access control, and a clear data retention policy. Moreover, some of the external features was also mentioned, which explains why our feature choice is most suitable. By improving the EDR and building the prototype, we created a practical, easy-to-use, and flexible solution designed for student shared grocery

