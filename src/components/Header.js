import { Fragment } from 'react';
import classes from './Header.module.css';
import StyleButtons from './StyleButtons';
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Cuisine Carousel</h1>
            <StyleButtons label="Login" />
        </header>
    </Fragment>
};

export default Header;