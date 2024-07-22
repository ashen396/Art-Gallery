import './styles/NavBarStyles.css';
import React from 'react';

const navTitles = ['Home', 'Events' , 'Projects', 'Contact', 'About'];

function navSelect(props){
    
}

export function NavBar(){
    const navbar = 
    <div id="topnav">
        <ul>
            {navTitles.map((val) => <li id={val} onClick={(ev) => navSelect(ev.currentTarget.id)}>{val}</li>)}
        </ul>
    </div>;
    return navbar;
}