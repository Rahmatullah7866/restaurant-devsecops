import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from .models import Dish

@pytest.mark.django_db
def test_get_dishes_list():
    # Arrange
    Dish.objects.create(
        name="Margherita Pizza", 
        description="Classic cheese and tomato", 
        price=12.99, 
        ingredients="Dough, Tomato Sauce, Mozzarella, Basil"
    )
    client = APIClient()

    # Act
    response = client.get('/api/menu/dishes/')

    # Assert
    assert response.status_code == 200
    assert len(response.data) == 1
    assert response.data[0]['name'] == "Margherita Pizza"
    assert response.data[0]['price'] == "12.99"