import MenuItemList from "./MenuItemsList";
import CuisineRecipeList from "./CuisineRecipeList";
import classes from './CuisineRecipe.module.css'
const CuisineRecipe = props => {        
    return(
        <div className={classes.CuisineRecipe}>
        <MenuItemList type={props.type} />
        <CuisineRecipeList />
        </div>
    );
};


export default CuisineRecipe;