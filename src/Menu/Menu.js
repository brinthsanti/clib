import React, { useState, useRef } from 'react';
import Truncator from './Truncator';
import './menu.scss';


const MenuItems = ({ data }) => {
    const [showChild, setShowChild] = useState(false);
    const parentRef = useRef();
    const hasChildren = data.children ? true : false;
    const { label, icon: Icon } = data;

    function handleClick(e) {
        e.stopPropagation();
        setShowChild(!showChild);
    }

    return <div className="parent"
        onClick={handleClick}
        ref={parentRef}
    >
        <div className="menuHeader">
            <div><Icon /></div>
            <div><Truncator string={label} /></div>
        </div>
        {
            hasChildren && showChild && <div>
                <div className="childElement">
                    <Menu data={data.children} />
                </div>
            </div>
        }
    </div>
};

const Menu = ({ data }) => {
    return (
        <div className="menuWrapper">
            {
                data.map((menuData) => (
                    <MenuItems key={menuData.label} data={menuData} />
                ))
            }
        </div>
    );
};



export default Menu;