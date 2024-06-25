
import { useNavigate, useParams } from 'react-router-dom';


function RecipeDetailPage ({recipes}) {
const router=useNavigate();
const {id}=useParams();
const recipe=recipes[id];
    

    return (
        <div>
             <img src={recipe.image} alt={recipe.title} />
            <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            </div>
       
            <div>
            <h1>Ingredients</h1>
            <p>{recipe.ingredients}</p>
            <h1>Preparation Steps</h1>
            <p>{recipe.steps}</p>
            </div>
            
            <div>
                <button onClick={()=>router("/addrecipepage")}>AddRecipePage</button>
                <button onClick={()=>router("/recipelist")}>RecipeListPage</button>
            </div>
          
        </div>
    );
};

export default RecipeDetailPage;