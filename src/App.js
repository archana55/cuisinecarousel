import './App.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
function App() {
  return (
    <div className="container">
       <div className="Header"><Header /></div>
       <div className="SideNav"><SideNav /></div>
       <div className="CuisineRecipe"><LandingPage /></div>
    </div>
  )
}

export default App;
