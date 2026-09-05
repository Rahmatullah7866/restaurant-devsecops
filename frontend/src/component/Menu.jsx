// frontend/src/components/Menu.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the local Django DRF endpoint
    axios.get('http://localhost:8000/api/menu/dishes/')
      .then(response => {
        setDishes(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching menu:", err);
        setError("Failed to load menu. Is the backend running?");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="menu-container"><h2>Loading menu...</h2></div>;
  if (error) return <div className="menu-container"><h2 style={{color: 'red'}}>{error}</h2></div>;

  return (
    <div className="menu-container">
      <h1 className="menu-header">Our Menu</h1>
      <div className="dishes-grid">
        {dishes.map(dish => (
          <div key={dish.id} className="dish-card">
            <div className="dish-header">
              <h3 className="dish-name">{dish.name}</h3>
              <span className="dish-price">${dish.price}</span>
            </div>
            <p className="dish-description">{dish.description}</p>
            <div className="dish-ingredients">
              <strong>Ingredients: </strong> {dish.ingredients}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;