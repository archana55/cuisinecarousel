import classes from './CuisineRecipeList.module.css'
import {RecipeList} from '../data/RecipesList'
const CuisineRecipeList = props => {

    return(
        <div className={classes.CuisineRecipeList}>
            {RecipeList.map((Recipe, index) =>{
                return <img src={Recipe.image} />;
            })}
        </div>
    );
};

export default CuisineRecipeList;