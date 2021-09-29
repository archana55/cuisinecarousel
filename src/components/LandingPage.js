import classes from './LandingPage.module.css'
import {RecipeList} from '../data/RecipesList'

const LandingPage = props => {
     return (
        <div className={classes.container}>
           <div className={classes.upLeft}><img src={RecipeList[0].image} /></div>
           <div className={classes.upMiddle}><img src={RecipeList[3].image} /></div>
           <div className={classes.upRight}><img src={RecipeList[1].image} /></div>
           <div className={classes.downLeft}><img src={RecipeList[2].image} /></div>
           <div className={classes.downMiddle}><img src={RecipeList[0].image} /></div>
           <div className={classes.downRight}><img src={RecipeList[3].image} /></div>
        </div>
      ) 
}

export default LandingPage;
