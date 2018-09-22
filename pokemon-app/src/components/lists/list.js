import React from 'react';
import './list.css';

export function DarkList( props ){
    return(
        <div>
            <div className="list-container" id="dark-container">
                <div className="info-column">
                    <div className="character-card">Name:</div>
                    <div className="character-card">Home-Planet:</div>
                    <div className="character-card">Species:</div>
                    <div className="character-card">Birth-Year:</div>
                </div>
                <div className="info-column">
                    <div className="character-card">{props.name}</div>
                    <div className="character-card">{props.homeWorld}</div>
                    <div className="character-card">{props.species}</div>
                    <div className="character-card">{props.birthYear}</div>
                </div>
                <div>
                    <button className="remove-button" onClick={() => props.remove(props.index, 'dark')} >Remove</button>
                </div>
            </div>
        </div>
    )
}

export function LightList( props ){
    return(
        <div>
            <div className="list-container" id="light-container">
                <div className="info-column">
                    <div className="character-card">Name:</div>
                    <div className="character-card">Home-Planet:</div>
                    <div className="character-card">Species:</div>
                    <div className="character-card">Birth-Year:</div>
                </div>
                <div className="info-column">
                    <div className="character-card">{props.name}</div>
                    <div className="character-card">{props.homeWorld}</div>
                    <div className="character-card">{props.species}</div>
                    <div className="character-card">{props.birthYear}</div>
                </div>
                <div>
                    <button className="remove-button" id="light-remove" onClick={() => props.remove(props.index, 'light')} >Remove</button>
                </div>
            </div>
        </div>
    )
}