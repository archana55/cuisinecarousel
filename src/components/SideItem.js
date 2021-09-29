import {React, useState}  from "react";
import './SideItem.css'

const SideItem = ({items}) =>{
    const {name, links, open} = items;
    const [isOpen, setOpen] = useState(open);

    const openSideNav = ()=>{
        setOpen(!isOpen);
    };

    return(
        <div onClick={() => openSideNav()} className="SideItemList">
            <p className="SideItemHeader">{name}</p>
            {isOpen && links.map((link,index) =>{
                const {title, to} = link;
                return (
                    <div key={index} className="SideItemMenu">
                    <a href={to}>
                            <p>{title}</p>
                            </a>
                    </div>

                );
            })}
        </div>
    );
}

export default SideItem;