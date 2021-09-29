import { NavItems } from '../data/NavItemsData';
import StyleButtons from './StyleButtons';
import classes from './MenuItemsList.module.css'
const MenuItemList = props => {
    const menuItems = NavItems.find(obj  => {
        return obj.name === props.type;
    }).links;
        
    return(
        <div className={classes.MenuItemsList}>
            <ul>
            {menuItems.map((menuItem, index) =>{
                return <li> <StyleButtons label={menuItem.title} /></li>;
            })}
            </ul>
        </div>
    );
};


export default MenuItemList;