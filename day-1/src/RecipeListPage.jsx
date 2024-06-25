
import { useNavigate } from 'react-router-dom';

function RecipeListPage(recipes){
    const router=useNavigate();

    return (
    <div>
            <h2>Recipe List</h2>
        <div>
        {recipes.map((recipe, index) => (
            <div key={index} >
                <div onClick={()=>router(`/recipdetailpage/${index}`)}> 
                    <img src={recipe.image} alt={recipe.title}/>
                </div>
                <div onClick={()=>router(`/recipdetailpage/${index}`)}>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                </div>

            </div>
       
))}
 </div>
 <button onClick={()=>router("/addrecipepage")}>addd</button>
     </div>
     );
        
}

export default RecipeListPage;