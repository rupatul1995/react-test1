import { Route, Routes } from 'react-router-dom';

import './App.css';
import AddRecipePage from './AddRecipePage';
import { useState } from 'react';
import RecipeListPage from './RecipeListPage';
import RecipeDetailPage from './RecipeDetailPage';



function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {   // change (newrecipes)
      setRecipes([...recipes, recipe]);
  };
 
  return (
    <div className="App">
   <Routes>
   <Route path="/add-recipe" element={<AddRecipePage  addRecipe={addRecipe}/>} />
   <Route path="/recipeslistpage" element={<RecipeListPage  recipes={recipes}/>} />                
   <Route path="/recipdetailpage/:id" element={<RecipeDetailPage  recipes={recipes}/>} /> 
       
   </Routes>
    </div>
  );
}

export default App;
