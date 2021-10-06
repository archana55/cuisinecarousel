import { Fragment, useState } from 'react';
import classes from './Header.module.css';
import StyleButtons from './StyleButtons';
import AddRecipeForm from './AddRecipeForm';

const Header = props => {
    const [showAddForm, setShowAddForm] = useState(false);

    const showAddFormHandler = () => {
        console.log("Button clicked");
        setShowAddForm(true);
    };

    const hideAddFormHandler = () => {
        setShowAddForm(false);
    };

    return <Fragment>
        <header className={classes.header}>
            <h1>Cuisine Carousel</h1>
            <ul>
            <li><StyleButtons label="Add Recipe" onClick={showAddFormHandler} /></li>
            <li><StyleButtons label="Login" /></li>
            </ul>
        </header>
            {showAddForm && <AddRecipeForm onClose={hideAddFormHandler} />}
    </Fragment>
};

export default Header;