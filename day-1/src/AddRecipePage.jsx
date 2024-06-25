import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addrecipes.css"

function AddRecipePage  ({ addRecipe }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState("");  
    const router=useNavigate(); 


   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, ingredients, steps, image);
        const newRecipe = { 
            title, 
            description, 
            ingredients, 
            steps, 
            image };

        console.log(newRecipe);
          addRecipe(newRecipe);
        router('/recipeslistpage');
    };

    return (
        <div className="maindivaddrecipes">
            <h2 className="caption1">Add  New Recipe</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                   
                </div>  <br/>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>  <br/>
                <div>
                    <label>Ingredients:</label>
                    <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                </div>  <br/>
                <div>
                    <label>Preparation Steps:</label>
                    <textarea value={steps} onChange={(e) => setSteps(e.target.value)} required />
                </div>  <br/>
                <div>
                <label>Image:</label>
                <input name="image"  type="text" onChange={(e) =>  setImage(e.target.value)} required />
                </div>  <br/>
                <button type="submit" className="submitbuttom">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipePage;