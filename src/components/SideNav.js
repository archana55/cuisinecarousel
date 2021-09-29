import React from 'react';
import SideItem from './SideItem';
import { NavItems } from '../data/NavItemsData';
import '../App.css'
import './SideNav.css'

const SideNav = (props) =>{
    
    return(
        <div className ="SideNav">
            {NavItems.map((navItem, index) =>{
                return <SideItem key={index} items={navItem} />;
            })}
        </div>
    );
}
/*
//<div style = {sideNavStyle}>
const sideNavStyle ={
    height: "100vh" ,
    width: "350px",
    background: "rgb(55,82,131)",
    background:
        "linear-gradient(135deg, rgba(55,82,131,1) 0%, rgba(20,96,194,1)" ,
    position: "absolute",
    border: "1px solid trasparent",
    left: 0,
    textalign: "left",
};
*/
export default SideNav;