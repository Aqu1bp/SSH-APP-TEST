from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import Cart
from .supermarketAPI import SupermarketAPI

shared_cart = Cart()

@csrf_exempt
@require_http_methods(["GET"])
def get_cart(request):
    """Get current cart contents"""
    return JsonResponse({
        'cart': shared_cart.cart,
        'total_price': shared_cart.total_price
    })

@csrf_exempt
@require_http_methods(["POST"])
def add_to_cart(request):
    """Add item to cart"""
    try:
        data = json.loads(request.body)
        item_name = data.get('item_name')
        quantity = int(data.get('quantity', 1))
        added_by = data.get('added_by', 'Student 1') 
        
        shared_cart.add_item(item_name, quantity, added_by)
        
        return JsonResponse({
            'cart': shared_cart.cart,
            'total_price': shared_cart.total_price
        })
    except Exception as e:
        return JsonResponse({
                'error'
            })

@csrf_exempt
@require_http_methods(["POST"])
def remove_from_cart(request):
    """Remove item from cart"""
    try:
        data = json.loads(request.body)
        item_id = data.get('item_id')
        student = data.get('student')

        print(f"Removing item: ID={item_id}, Student={student}")
        print(f"Current cart: {shared_cart.cart}")
        
        if shared_cart.remove_item(item_id, student):
            return JsonResponse({
                'cart': shared_cart.cart,
                'total_price': shared_cart.total_price
            })
        else:
            return JsonResponse({
                'error'
            })
            
    except Exception as e:
        print(f"Error {str(e)}")

@csrf_exempt
@require_http_methods(["GET"])
def get_products(request):

    try:
        api = SupermarketAPI()
        return JsonResponse(api.get_products())
    
    except Exception as e:
        return JsonResponse({
            'error'
        })
    
