import classes from './StyleButtons.module.css'
const StyleButtons = (props) => {
    return <button className={classes.button} onClick={(e) =>{props.onClick(e, "value")}} value={props.label}>
        {props.label}
    </button>
};

export default StyleButtons;