import { useState } from 'react';
import classes from './AddRecipeForm.module.css';
import Modal from './Modal';
const axios = require('axios');
const AddRecipeForm = props => {
  const cuisines = ['American', 'Indian', 'Italian', 'Mexican'];
  const recipes = ['Breakfast', 'Appetizer', 'Lunch', 'Dinner', 'Dessert'];

  const [enteredName, setenteredName] = useState("");
  const [enteredNameValid, setenteredNameValid] = useState(true);

  //const [enteredDescription, setenteredDescription] = useState("");
  //const [enteredDescriptionValid, setenteredDescriptionValid] = useState(true);

  const [enteredRecipeURL, setenteredRecipeURL] = useState("");
  const [enteredRecipeURLValid, setenteredRecipeURLValid] = useState(true);

  const [enteredImageURL, setenteredImageURL] = useState("");
  const [enteredImageURLValid, setenteredImageURLValid] = useState(true);

  const [enteredCuisine, setenteredCuisine] = useState("American");
  const [enteredRecipe, setenteredRecipe] = useState("Breakfast");

  const NameChangedHandler = (e) => {
    setenteredName(e.target.value);
    setenteredNameValid(true);
  }

  /*const DescriptionChangedHandler = (e) => {
    setenteredDescription(e.target.value);
    setenteredDescriptionValid(true);
  
  } */

  const RecipeURLChangedHandler = (e) => {
    setenteredRecipeURL(e.target.value);
    setenteredRecipeURLValid(true);
  }

  const ImageURLChangedHandler = (e) => {
    setenteredImageURL(e.target.value);
    setenteredImageURLValid(true);
  }

  const CuisineChangedHandler = (e) => {
    setenteredCuisine(e.target.value);
    console.log(enteredCuisine);  
  }

  const RecipeChangedHandler = (e) => {
    setenteredRecipe(e.target.value);
    console.log(enteredRecipe);
  }

  const ClearFormSubmitHnadler = (e) => {
    e.preventDefault();
    setenteredName("");
    //setenteredDescription("");
    setenteredRecipeURL("");
    setenteredImageURL("");

  }

  const FormSubmitHandler = async (e) => {
    e.preventDefault();
    //var re=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
      var re = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
     if((enteredName.trim() === '') ||
      //(enteredDescription.trim() === '') ||
      //(enteredRecipeURL.trim() === '') ||
      //(enteredImageURL.trim() === '')) {
      (!re.test(enteredRecipeURL)) ||
      (!re.test(enteredImageURL))) {

        if (enteredName.trim() === '') {
          setenteredNameValid(false);
        }
        /*if(enteredDescription.trim() === '') {
          setenteredDescriptionValid(false)
        }*/
        if(!re.test(enteredRecipeURL)) {
        //if(enteredRecipeURL.trim() === '') {  
          setenteredRecipeURLValid(false);
        }
        if(!re.test(enteredImageURL)) {
        //if(enteredImageURL.trim() === '') {   
          setenteredImageURLValid(false);
        }
       // console.log("before 1");  
      return;
    } 
    //console.log("before");
    const newRecipe = {
      label: enteredName,
      //description: enteredDescription,
      image: enteredImageURL,
      url: enteredRecipeURL,
      cuisine: enteredCuisine,
      recipe: enteredRecipe
    }
    
    const newRecipe1 = {
      "label": "Rava Dosas",
      "description": "Rava Dosas with Potato Chickpea Masala recipes",
      "image": "https://www.edamam.com/web-img/529/52992b7514a06e7c35fa3022a380f32a",
      "url": "http://www.epicurious.com/recipes/food/views/rava-dosas-with-potato-chickpea-masala-356035", 
      "cuisine": "indian",
      "recipe": "dinner",
    }
    await axios.post(
               'https://cuisinecarousel-a9dd7-default-rtdb.firebaseio.com/recipes.json',JSON.stringify( newRecipe));
    console.log(newRecipe1);
    props.onClose();
 }

  return <Modal onClose={props.onClose}>
  <header className={classes.header}><h1>Add Recipe</h1></header>
  <form className={`${classes.form} ${classes.input}`} onSubmit={FormSubmitHandler}>
    <div>
      <label htmlFor="Name">Name</label>
      <input id="Name" value ={enteredName} onChange={NameChangedHandler}/>
    </div>
      {!enteredNameValid && 
      <div>
       <text className="text-danger text-right" >Name cannot be blank.</text>
       </div>}
      
      <div>
      <label htmlFor="RecipeURL">Recipe URL</label>
      <input id="RecipeURL" value ={enteredRecipeURL} onChange={RecipeURLChangedHandler}/>
      </div>
      {!enteredRecipeURLValid && 
      <div>
       <text className="text-danger text-right" >Not a valid URL.</text>
       </div>}
      <div>
      <label htmlFor="ImageURL">Image URL</label>
      <input id="ImageURL" value={enteredImageURL} onChange={ImageURLChangedHandler}/>
      </div>
      {!enteredImageURLValid && 
      <div>
       <text className="text-danger text-right" >Not a valid Image URL.</text>
       </div>}
      <div>
      <label htmlFor="Cuisine">Cuisine</label>  
      <select id="Cuisine" onChange={CuisineChangedHandler}>
      {cuisines.map(cuisine => (
          <option key={cuisine} value={cuisine} >
          {cuisine}
          </option>
      ))}
      </select>
      </div>
      <div>
      <label htmlFor="Recipe">Recipe</label>  
      <select id="Recipe" onChange={RecipeChangedHandler}>
      {recipes.map(recipe => (
          <option key={recipe} value={recipe} >
          {recipe}
          </option>
      ))}
      </select>
      </div>
      <div>
      <button onClick={ClearFormSubmitHnadler}>Clear Form</button>
      <button onClick={FormSubmitHandler}>Add Recipe</button>
      </div>
  </form>
  </Modal>
}

export default AddRecipeForm;