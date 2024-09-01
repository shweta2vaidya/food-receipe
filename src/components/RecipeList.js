import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recipes', {
          params: { category },
        });
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, [category]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${id}`);
      setRecipes(recipes.filter(recipe => recipe._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id, updatedRecipe) => {
    try {
      await axios.put(`http://localhost:5000/api/recipes/${id}`, updatedRecipe);
      setRecipes(recipes.map(recipe => (recipe._id === id ? updatedRecipe : recipe)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="list-container">
      <h2>Recipe List</h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <ul className="recipe-list">
        {recipes.map(recipe => (
          <li key={recipe._id} className="recipe-item">
            <div className="recipe-header">
              <h3>{recipe.title}</h3>
              <div>
                <button
                  className="button button-primary"
                  onClick={() => handleUpdate(recipe._id, {
                    ...recipe,
                    title: prompt('New Title:', recipe.title),
                    ingredients: prompt('New Ingredients (comma separated):', recipe.ingredients.join(',')),
                    instructions: prompt('New Instructions:', recipe.instructions),
                    category: prompt('New Category:', recipe.category),
                  })}
                >
                  Edit
                </button>
                <button
                  className="button button-danger"
                  onClick={() => handleDelete(recipe._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <p><strong>Ingredients:</strong> {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Category:</strong> {recipe.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
