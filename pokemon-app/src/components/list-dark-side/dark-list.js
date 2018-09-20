import React from 'react';
import './list.css';

export default function DarkList( props ){
    return(
        <div>
            <div className="list-container">
                <div className="character-card">Name: {props.name} </div>
                <div className="character-card">URL: {props.url} </div>
            </div>
        </div>
    )
}