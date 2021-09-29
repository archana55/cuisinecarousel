import classes from './StyleButtons.module.css'
const StyleButtons = (props) => {
    return <button className={classes.button}>
        {props.label}
    </button>
};

export default StyleButtons;