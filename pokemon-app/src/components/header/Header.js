import React from 'react';
import './header.css';

export default function Header(){
    return (
        <div className="header-container">
            <div className="dark-light-title">LIGHT SIDE</div>
            <div className="title-container">VS.</div>
            <div className="dark-light-title">DARK SIDE</div>
        </div>
    )
}