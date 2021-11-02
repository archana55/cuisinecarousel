
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
import Cuisine from './components/Cuisine';
import Recipe from './components/Recipe';
import Search from './components/Search';
import { useState } from 'react';

function App() {  
  
  const [query, setquery] = useState(""); 
  //const [test, setTest] = useState("Testing");
  const searchQueryHandler = (e) => {
    setquery(e.target.value);
    console.log(query);
  }

  return (
    <div className="container">       
       <div className="Header"><Header query={query} onChange={searchQueryHandler}/></div>
       <div className="SideNav"><SideNav /></div>
       <Router>
         <Switch>
         <Route exact path="/">
         <div className="CuisineRecipe"><LandingPage /></div>
         </Route>
         <Route path="/Cuisine/:slug">
         <div className="CuisineRecipe"><Cuisine /></div>
         </Route>
         <Route path="/Recipe/:slug">
         <div className="CuisineRecipe"><Recipe /></div>
         </Route>
         <Route path="/Search">
         <div className="CuisineRecipe"><Search test={query}  /></div>
         </Route>
         </Switch>
       </Router>
    </div>
  )
}

export default App;
