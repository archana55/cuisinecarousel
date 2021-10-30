import { Fragment, useState } from 'react';
import classes from './Header.module.css';
import StyleButtons from './StyleButtons';
import AddRecipeForm from './AddRecipeForm';
import LoginForm from './LoginForm';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = React.memo( props => {
    const [showAddForm, setShowAddForm] = useState(false);
    
    const showAddFormHandler = () => {
        setShowAddForm(true);
    };

    const hideAddFormHandler = () => {
        setShowAddForm(false);
    };

    const [showLoginForm, setShowLoginForm] = useState(false);

    const showLoginFormHandler = (e) => {
        console.log(e.target.value);
        setShowLoginForm(true);
    }

    const hideLoginFormHandler = () => {
        setShowLoginForm(false);
    }

    const submitLoginFormHandler = (e) => {
        setShowLoginForm(false);
        setLoggedIn(true);
        console.log("Submitted");
    }
    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = () => {
        setLoggedIn(true);
    }

    const logoutHandler = () => {
        setLoggedIn(false);
    }

    return <Fragment> 
        <header className={classes.header}>
            <h1>Cuisine Carousel {props.query}</h1>
            <ul>
            <li>
              <div class="input-group mb-3">
                 <input type="text" class="form-control" placeholder="API Search" 
                  aria-label="API Search" aria-describedby="button-addon2"
                   value={props.query} onChange={props.onChange} />
                 <div class="input-group-append">
                    <a href='/Search'>
                    <button class="btn btn-outline-primary" type="button" 
                    id="Search"  onClick={props.onSearch}>Search</button></a>
                 </div>
              </div>
            </li>
            {loggedIn && <li><StyleButtons label="Add Recipe" onClick={showAddFormHandler} /></li>}
            {!loggedIn && <li><StyleButtons label="Login" onClick={showLoginFormHandler}/></li>}
            {loggedIn && <li><StyleButtons label="Logout" onClick={logoutHandler}/></li>}
            </ul>
        </header> 
            {showAddForm && <AddRecipeForm onClose={hideAddFormHandler} />}
            {showLoginForm && <LoginForm onClose={hideLoginFormHandler} onSubmit={submitLoginFormHandler}/>}
    </Fragment>
});

export default Header;