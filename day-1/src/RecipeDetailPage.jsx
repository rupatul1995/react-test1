
import { useNavigate, useParams } from 'react-router-dom';


function RecipeDetailPage ({recipes}) {
const router=useNavigate();
const {id}=useParams();
const recipe=recipes[id];
console.log(recipe);
    

    return (
        <div className='recipedetailsdiv'>
         <img className='imagediv5' src={recipe.image} alt={recipe.title} />
            <div className='detailsdiv'>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            </div>
            

            <div className='detailsdiv'>
            <h1>Ingredients</h1>
            <p>{recipe.ingredients}</p>
            <h1>Preparation Steps</h1>
            <p>{recipe.steps}</p>
            </div>
            
            <div>
                <button className="submitbuttom" onClick={()=>router("/add-recipe")}>AddRecipePage</button>
                <button className="submitbuttom" onClick={()=>router("/recipeslistpage")}>RecipeListPage</button>
            </div>
          
        </div>
    );
};

export default RecipeDetailPage;