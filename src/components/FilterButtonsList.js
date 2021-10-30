import { NavItems } from '../data/NavItemsData';
import StyleButtons from './StyleButtons';
import classes from './FilterButtonsList.module.css'
const FilterButtonsList = props => {
    const FilterButtons = NavItems.find(obj  => {
        return obj.name === props.type;
    }).links;

    return(
        <div className={classes.FilterButtonsList}>
            <ul>
            {FilterButtons.map((FilterButton, index) =>{
                return <li> <StyleButtons label={FilterButton.title} onClick={props.onFilterSelected} /></li>;
            })}
            </ul>
        </div>
    );
};


export default FilterButtonsList; 