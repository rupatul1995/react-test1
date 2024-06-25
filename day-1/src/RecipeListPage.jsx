import { useNavigate } from 'react-router-dom';
import "./addrecipes.css";

function RecipeListPage({recipes}){
    const router=useNavigate();

    return (
    <div className='recipeslistmaindiv'>
            <h2>Recipe List</h2>
        <div>
        {recipes.map((recipe, index) => (
            <div key={index} >
                <img src={recipe.image} alt={recipe.title}/>
                <div onClick={()=>router(`/recipdetailpage/${index}`)}> 
                </div>
                <div onClick={()=>router(`/recipdetailpage/${index}`)}>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                </div>

            </div>
       
))}
 </div>
 <button onClick={()=>router("/addrecipepage")}>Add New Recipe </button>
     </div>
     );
        
}

export default RecipeListPage;