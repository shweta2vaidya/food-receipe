import React, { useState } from 'react';
import axios from 'axios';
import './RecipeForm.css';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/recipes', {
        title,
        ingredients: ingredients.split(',').map(ing => ing.trim()),
        instructions,
        category,
      });
      setTitle('');
      setIngredients('');
      setInstructions('');
      setCategory('');
      alert('Recipe added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add recipe.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Ingredients (comma separated)</label>
          <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Instructions</label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button type="submit" className="button button-primary">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
