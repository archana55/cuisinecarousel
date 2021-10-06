import classes from './AddRecipeForm.module.css';
import Modal from './Modal';
import StyleButtons from './StyleButtons';
const AddRecipeForm = props => {
  return <Modal onClose={props.onClose}>
  <form className={`${classes.form} ${classes.input}`}>
    <div>
      <label htmlFor="Name">Name</label>
      <input id="Name"/>
      </div>
      <div>
      <label htmlFor="Description">Description</label>
      <input id="Description"/>
      </div>
      <div>
      <label htmlFor="RecipeURL">Recipe URL</label>
      <input id="RecipeURL"/>
      </div>
      <div>
      <label htmlFor="ImageURL">Image URL</label>
      <input id="ImageURL"/>
      </div>
      <div>
      <button>Clear Form</button>
      <button onClick={props.onClose}>Add Recipe</button>
      </div>
  </form>
  </Modal>
}

export default AddRecipeForm;