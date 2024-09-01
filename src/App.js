import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Recipe Sharing Platform</h1>
        </header>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/recipes" className="nav-link">
            View Recipes
          </Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<RecipeForm />} />
            <Route path="/recipes" element={<RecipeList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
