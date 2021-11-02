import classes from './LandingPage.module.css'
import {RecipesListData} from '../data/RecipesListData'

const LandingPage = props => {
     return (
        <div className={classes.container}>
           <div className={classes.upLeft}><img src={RecipesListData[0].image} alt="" /></div>
           <div className={classes.upMiddle}><img src={RecipesListData[1].image} alt="" /></div>
           <div className={classes.upRight}><img src={RecipesListData[2].image} alt="" /></div>
           <div className={classes.downLeft}><img src={RecipesListData[3].image} alt="" /></div>
           <div className={classes.downMiddle}><img src={RecipesListData[4].image} alt="" /></div>
           <div className={classes.downRight}><img src={RecipesListData[5].image} alt="" /></div>
        </div>
      ) 
}

export default LandingPage;
