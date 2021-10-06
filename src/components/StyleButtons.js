import classes from './StyleButtons.module.css'
const StyleButtons = (props) => {
    return <button className={classes.button} onClick={props.onClick}>
        {props.label}
    </button>
};

export default StyleButtons;