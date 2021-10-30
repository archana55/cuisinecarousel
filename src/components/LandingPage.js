import classes from './LandingPage.module.css'
import {RecipesListData} from '../data/RecipesListData'

const LandingPage = props => {
     return (
        <div className={classes.container}>
           <div className={classes.upLeft}><img src={RecipesListData[0].image} /></div>
           <div className={classes.upMiddle}><img src={RecipesListData[1].image} /></div>
           <div className={classes.upRight}><img src={RecipesListData[2].image} /></div>
           <div className={classes.downLeft}><img src={RecipesListData[3].image} /></div>
           <div className={classes.downMiddle}><img src={RecipesListData[4].image} /></div>
           <div className={classes.downRight}><img src={RecipesListData[5].image} /></div>
        </div>
      ) 
}

export default LandingPage;
