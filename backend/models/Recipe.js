const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],  
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
