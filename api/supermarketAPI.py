# Hard-coded instead of actual API call to grocery stores
class SupermarketAPI:
    def get_products(self):
        """Simulate getting products from a database"""
        return {
            "products": [
                {
                    "id": 1,
                    "name": "Apple",
                    "price": 5.0,
                    "image": "/api/images/200/200",
                    "inStock": True
                },
                {
                    "id": 2,
                    "name": "Banana",
                    "price": 3.0,
                    "image": "/api/images/200/200",
                    "inStock": True
                },
                {
                    "id": 3,
                    "name": "Chocolate Bar",
                    "price": 10.0,
                    "description": "Contains nuts and dairy",
                    "image": "/api/images/200/200",
                    "inStock": True
                }
            ]
        }


