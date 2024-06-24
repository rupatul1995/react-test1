function AddRecipePage (){
    return(
        <div>
        <h2>Add a New Recipe</h2>
        <form>
            <div>
                <label>Title:</label>
                <input />
            </div>
            <div>
                <label>Description:</label>
                
            </div>
            <div>
                <label>Ingredients:</label>
               
            </div>
        




            <div>
                <label>Image:</label>
                <input type="file" />
            </div>
            <button type="submit">Add Recipe</button>
        </form>
        </div>
    )
}
export default AddRecipePage;