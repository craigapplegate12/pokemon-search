import React, {Component} from 'react';
import './search.css';
import axios from 'axios';
import {DarkList} from '../lists/list.js';
import {LightList} from '../lists/list.js';
import Create from '../create/Create.js'

class Search extends Component {
    state = {
        text: '',
        darkSideList: [],
        lightSideList: []
    }


    handleInputChange = (value) => {
        this.setState({
          text: value
        })
    }


    addPersonLight = () => {
        axios.post('http://localhost:8000/characters', {searchedCharacter: this.state.text})
        .then(character => {
            axios.post('http://localhost:8000/planets', {searchedCharacter: this.state.text})
            .then(planet => {
                axios.post('http://localhost:8000/species', {searchedCharacter: this.state.text})
                .then(species => {
                    let newPerson = character.data;
                    const newObj = {
                      name: newPerson.name,
                      homePlanet: planet.data,
                      species: species.data,
                      birthYear: newPerson.birth_year
                    }
                    this.setState({ lightSideList: [...this.state.lightSideList, newObj]})
                    this.setState({ text: ''})
                 })
            })
        })
        .catch(error => {
            alert(error.response.data.errorMessage)
        })

    }


    addPersonDark = () => {
        
        axios.post('http://localhost:8000/characters', {searchedCharacter: this.state.text})
        .then(character => {
            axios.post('http://localhost:8000/planets', {searchedCharacter: this.state.text})
            .then(planet => {
                axios.post('http://localhost:8000/species', {searchedCharacter: this.state.text})
                .then(species => {
                    let newPerson = character.data;
                    const newObj = {
                      name: newPerson.name,
                      homePlanet: planet.data,
                      species: species.data,
                      birthYear: newPerson.birth_year
                    }
                    this.setState({ darkSideList: [...this.state.darkSideList, newObj]})
                    this.setState({ text: ''})
                 })
            })
        })
        .catch(error => {
            alert(error.response.data.errorMessage)
        })

    }

    createNewDark = (newChar) => {
        this.setState({ darkSideList: [...this.state.darkSideList, newChar]})
    }

    createNewLight = (newChar) => {
        this.setState({ lightSideList: [...this.state.lightSideList, newChar]})
    }

    removePerson = (index, side) => {
        if(side === 'dark'){
            let newArray = [...this.state.darkSideList];
            newArray.splice(index, 1)
            this.setState({ darkSideList: newArray})
        }
        else if(side === 'light'){
            let newArray = [...this.state.lightSideList];
            newArray.splice(index, 1)
            this.setState({ lightSideList: newArray})
        }
    }





    render(){
        let darkList = this.state.darkSideList.map((person, i) => {
            return <DarkList key={i} name={person.name} homeWorld={person.homePlanet} species={person.species} birthYear={person.birthYear} index={i} remove={this.removePerson} />
        })
        let lightList = this.state.lightSideList.map((person, i) => {
            return <LightList key={i} name={person.name} homeWorld={person.homePlanet} species={person.species} birthYear={person.birthYear} index={i} remove={this.removePerson}/>
        })
        return(
            <div className="full-body-container">
              <div className="list">
                {lightList}
              </div>
              <div className="search-container">
                 <div className="search-items">
                   <div className="span">Search For Star Wars Character: </div>
                   <input 
                     className="search-input" 
                     placeholder="find your character..."
                     value={this.state.text}   
                     onChange={(e) => this.handleInputChange(e.target.value)}
                   />
                 </div>
                 <div className="add-buttons">
                    <button id="light-button" onClick={this.addPersonLight}>Add to Light Side</button>
                    <button id="dark-button" onClick={this.addPersonDark}>Add to Dark Side</button>
                 </div>  
                 <Create addToDark={this.createNewDark} addToLight={this.createNewLight}/>         
              </div>
              <div className="list">
                {darkList}
              </div>
            </div>
        )
    }
}

export default Search;