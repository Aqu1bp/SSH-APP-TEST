from django.test import TestCase, Client
from django.urls import reverse

class APITest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_get_products(self):
        response = self.client.get(reverse('get_products'))
        self.assertEqual(response.status_code, 200)
