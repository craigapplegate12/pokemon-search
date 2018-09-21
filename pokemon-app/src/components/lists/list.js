import React from 'react';
import './list.css';

export default function List( props ){
    return(
        <div>
            <div className="list-container">
                <div className="character-card">Name: {props.name} </div>
                <div className="character-card">Home Planet: {props.homeWorld} </div>
                <div className="character-card">Species: {props.species} </div>
                <div className="character-card">Birth-Year: {props.birthYear} </div>
            </div>
        </div>
    )
}