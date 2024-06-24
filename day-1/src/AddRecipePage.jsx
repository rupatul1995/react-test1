import { useState } from "react";
import { unstable_HistoryRouter } from "react-router-dom";


const AddRecipePage = ({ addRecipe }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState(null);

    const history = unstable_HistoryRouter();

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = { title, description, ingredients, steps, image };
        addRecipe(newRecipe);
        history.push('/recipes');
    };

    return (
        <div>
            <h2>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Ingredients:</label>
                    <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                </div>
                <div>
                    <label>Preparation Steps:</label>
                    <textarea value={steps} onChange={(e) => setSteps(e.target.value)} required />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" onChange={handleImageChange} />
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipePage;