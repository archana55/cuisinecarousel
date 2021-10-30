import { useState } from 'react';
import classes from './AddRecipeForm.module.css';
import Modal from './Modal';
const AddRecipeForm = props => {
  const cuisines = ['American', 'Indian', 'Italian', 'Mexican'];
  const recipes = ['Breakfast', 'Appetizer', 'Lunch', 'Dinner', 'Dessert'];

  const [enteredName, setenteredName] = useState("");
  const [enteredNameValid, setenteredNameValid] = useState(true);

  const [enteredDescription, setenteredDescription] = useState("");
  const [enteredDescriptionValid, setenteredDescriptionValid] = useState(true);

  const [enteredRecipeURL, setenteredRecipeURL] = useState("");
  const [enteredRecipeURLValid, setenteredRecipeURLValid] = useState(true);

  const [enteredImageURL, setenteredImageURL] = useState("");
  const [enteredImageURLValid, setenteredImageURLValid] = useState(true);

  const NameChangedHandler = (e) => {
    setenteredName(e.target.value);
    setenteredNameValid(true);
  }

  const DescriptionChangedHandler = (e) => {
    setenteredDescription(e.target.value);
    setenteredDescriptionValid(true);
    console.log(enteredDescription);
  } 

  const RecipeURLChangedHandler = (e) => {
    setenteredRecipeURL(e.target.value);
    setenteredRecipeURLValid(true);
  }

  const ImageURLChangedHandler = (e) => {
    setenteredImageURL(e.target.value);
    setenteredImageURLValid(true);
  }

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    var re=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

     if((enteredName.trim() === '') ||
      (enteredDescription.trim() === '') ||
       (!re.test(enteredRecipeURL)) ||
       (!re.test(enteredImageURL))) {

        if (enteredName.trim() === '') {
          setenteredNameValid(false);
        }
        if(enteredDescription.trim() === '') {
          setenteredDescriptionValid(false)
        }
        if(!re.test(enteredRecipeURL)) {
          setenteredRecipeURLValid(false);
        }
        if(!re.test(enteredImageURL)) {
          setenteredImageURLValid(false);
        }
      return;
    } 
    props.onClose();
 }

  return <Modal onClose={props.onClose}>
  <header className={classes.header}><h1>Add Recipe</h1></header>
  <form className={`${classes.form} ${classes.input}`} onSubmit={FormSubmitHandler}>
    <div>
      <label htmlFor="Name">Name</label>
      <input id="Name" onChange={NameChangedHandler}/>
    </div>
      {!enteredNameValid && 
      <div>
       <text className="text-danger text-right" >Name cannot be blank.</text>
       </div>}
      <div>
      <label htmlFor="Description">Description</label>
      <input id="Description" onChange={DescriptionChangedHandler}/>
      </div>
      {!enteredDescriptionValid && 
      <div>
       <text className="text-danger text-right" >Description cannot be blank.</text>
       </div>}
      <div>
      <label htmlFor="RecipeURL">Recipe URL</label>
      <input id="RecipeURL" onChange={RecipeURLChangedHandler}/>
      </div>
      {!enteredRecipeURLValid && 
      <div>
       <text className="text-danger text-right" >Not a valid URL.</text>
       </div>}
      <div>
      <label htmlFor="ImageURL">Image URL</label>
      <input id="ImageURL" onChange={ImageURLChangedHandler}/>
      </div>
      {!enteredImageURLValid && 
      <div>
       <text className="text-danger text-right" >Not a valid URL.</text>
       </div>}
      <div>
      <label htmlFor="Cuisine">Cuisine</label>  
      <select id="Cuisine">
      {cuisines.map(cuisine => (
          <option key={cuisine} value={cuisine}>
          {cuisine}
          </option>
      ))}
      </select>
      </div>
      <div>
      <label htmlFor="Recipe">Recipe</label>  
      <select id="Recipe">
      {recipes.map(recipe => (
          <option key={recipe} value={recipe}>
          {recipe}
          </option>
      ))}
      </select>
      </div>
      <div>
      <button>Clear Form</button>
      <button onClick={FormSubmitHandler}>Add Recipe</button>
      </div>
  </form>
  </Modal>
}

export default AddRecipeForm;