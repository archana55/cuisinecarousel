import { Fragment, useState } from 'react';
import classes from './Header.module.css';
import StyleButtons from './StyleButtons';
import AddRecipeForm from './AddRecipeForm';
import LoginForm from './LoginForm';
import React from 'react';
import UserSignUpForm from './UserSignUpForm';

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

    const logoutHandler = () => {
        setLoggedIn(false);
    }

    const APISearchHandler = () => {

    }
    const [showSignupForm, setShowSignupForm] = useState(false);

    const hideSignupFormHandler = () => {
        setShowSignupForm(false);
    }

    const submitSignupFormHandler = (e) => {
        setShowSignupForm(false);
        setLoggedIn(true);
        console.log("Submitted");
    }

    const loginFormSignupHandler = () => {
        setShowLoginForm(false);
        setLoggedIn(false);
        setShowSignupForm(true);
    }

    const signupFormLoginHandler = () => {
        setShowSignupForm(false);
        setLoggedIn(false);
        setShowLoginForm(true);
    }

    return <Fragment> 
    
        <header className={classes.header}>
            <h1><a href="/">Cuisine Carousel {props.query}</a></h1>
            <ul>
            {loggedIn && <li><a href='/Search'><StyleButtons label="API Search" onClick={APISearchHandler} /></a></li>}
            {loggedIn && <li><StyleButtons label="Add Recipe" onClick={showAddFormHandler} /></li>}
            {!loggedIn && <li><StyleButtons label="Login" onClick={showLoginFormHandler}/></li>}
            {loggedIn && <li><StyleButtons label="Logout" onClick={logoutHandler}/></li>}
            </ul>
        </header> 
            {showAddForm && <AddRecipeForm onClose={hideAddFormHandler} />}
            {showLoginForm && <LoginForm onClose={hideLoginFormHandler} 
                                         onSubmit={submitLoginFormHandler}
                                         onSignUp={loginFormSignupHandler}
                                         />}
            {showSignupForm && <UserSignUpForm onClose={hideSignupFormHandler} 
                                       onSubmit={submitSignupFormHandler}
                                         onLogin={signupFormLoginHandler}
                                         />}
    </Fragment>
});

export default Header;