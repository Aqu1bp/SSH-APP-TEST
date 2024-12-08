class Cart:
    def __init__(self):
        self.cart = [] 
        self.total_price = 0.0

    def get_item_price(self, item_name):
        prices = {
            "apple": 5,
            "banana": 3,
            "chocolate bar": 10,
        }
        return prices.get(item_name, 0.0)

    def get_item_discount(self, item_name):
        discounts = {
            "apple": {"type": "percentage", "value": 10},
            "banana": {"type": "threshold", "threshold": 5, "value": 20},
            "chocolate bar": {"type": "bogo", "x": 2, "y": 1},
        }
        return discounts.get(item_name, {})

    def add_item(self, item_name, quantity, added_by):
        price = self.get_item_price(item_name)
        if price > 0:
            existing_item = next(
                (item for item in self.cart if item["name"] == item_name and item["added_by"] == added_by),
                None
            )
            
            if existing_item:
                existing_item["quantity"] += quantity
            else:
                self.cart.append({
                    "name": item_name,
                    "quantity": quantity,
                    "price": price,
                    "added_by": added_by,
                    "id": len(self.cart) + 1
                })
            self.update_total()
        else:
            print(f"Item '{item_name}' not found or price unavailable.")

    def remove_item(self, item_id, student):
        """Remove an item from the cart."""
        # Convert item_id to string for comparison
        item_id = str(item_id)
        
        # Find the item
        for i, item in enumerate(self.cart):
            if str(item.get("id")) == item_id and item["added_by"] == student:
                del self.cart[i]
                self.update_total()
                return True
        
        return False

    def calculate_discount(self, item):
        price = item["price"]
        quantity = item["quantity"]
        discount = self.get_item_discount(item["name"])

        if discount.get("type") == "percentage":
            percentage = discount.get("value", 0)
            price -= price * (percentage / 100)
        elif discount.get("type") == "threshold":
            threshold = discount.get("threshold", 0)
            percentage = discount.get("value", 0)
            if quantity * price >= threshold:
                price -= price * (percentage / 100)
        elif discount.get("type") == "bogo":
            x = discount.get("x", 0)
            y = discount.get("y", 0)
            free_items = (quantity // (x + y)) * y
            total_units = quantity - free_items
            price = total_units * price / quantity

        return price * quantity

    def update_total(self):
        """Recalculate the total price of the cart."""
        self.total_price = 0.0
        for item in self.cart:
            discounted_price = self.calculate_discount(item)
            self.total_price += discounted_price












































            








































