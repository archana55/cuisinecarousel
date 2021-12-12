import classes from './LandingPage.module.css'
//import { RecipeUrl } from '../data/RecipeUrl';
//import { useEffect, useState } from 'react';
import {RecipesListData} from '../data/RecipesListData'
//const axios = require('axios');

const LandingPage = props => {
   
   /*const [RecipesListData1, setRecipesListData] = useState([]);
   const [dataLoaded, setDataLoaded] = useState(false);
   useEffect(()=>{
     async function fetchData() {
       let result = await axios.get(RecipeUrl);
       console.log(result);
       const recipeList = [];
       for(const key in result.data) {
          recipeList.push({
             id: key,
             label: result.data[key].label,
             description: result.data[key].description,
             image: result.data[key].image,
             url: result.data[key].url,
             cuisine: result.data[key].cuisine,
             recipe: result.data[key].recipe,
          })
       }
       setRecipesListData(recipeList);
       setDataLoaded(true);
       console.log(recipeList); 
       console.log(RecipesListData1.length);
       //console.log(RecipesListData);
     }
     fetchData();
   },[]); 
   */  
     return (
        <div className={classes.container}>
           {RecipesListData.length > 0} && <div className={classes.upLeft}><img src={RecipesListData[0].image} alt="" /></div>
           {RecipesListData.length > 0} && <div className={classes.upMiddle}><img src={RecipesListData[1].image} alt="" /></div>
           {RecipesListData.length > 0} && <div className={classes.upRight}><img src={RecipesListData[2].image} alt="" /></div>
           {RecipesListData.length > 0} && <div className={classes.downLeft}><img src={RecipesListData[3].image} alt="" /></div>
           {RecipesListData.length > 0} && <div className={classes.downMiddle}><img src={RecipesListData[4].image} alt="" /></div>
           {RecipesListData.length > 0} && <div className={classes.downRight}><img src={RecipesListData[5].image} alt="" /></div>
        </div>
      ) 
}

export default LandingPage;
