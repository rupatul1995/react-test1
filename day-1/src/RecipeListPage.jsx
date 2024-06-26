import { useNavigate } from 'react-router-dom';
import "./addrecipes.css";

function RecipeListPage({recipes}){
    const router=useNavigate();

    return (
    <div className='recipeslistmaindiv'>
            <h2>Recipe List</h2>
        <div  className='recipeslistmaindiv2'>
        {recipes.map((recipe, index) => (
            <div key={index} className='imagediv1' >
                <div  onClick={()=>router(`/recipdetailpage/${index}`)}> 
                <img className='imagediv' src={recipe.image} alt={recipe.title}/>
                </div>
                <div className='detailsdiv' onClick={()=>router(`/recipdetailpage/${index}`)}>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                </div>

            </div>
       
))}
 </div>
 <button className="submitbuttom" onClick={()=>router("/add-recipe")}>Add New Recipe </button>
     </div>
     );
        
}

export default RecipeListPage;