import React, {Component} from 'react';
import './search.css';
import axios from 'axios';
import DarkList from '../list-dark-side/dark-list.js';

class Search extends Component {
    state = {
        text: '',
        name: '',
        type: '',
        description: '',
        darkSideList: []
    }


    handleInputChange = (value) => {
        this.setState({
          text: value
        })
    }


    addPersonDark = () => {
        axios.post('http://localhost:8000/characters', {searchedCharacter: this.state.text})
        .then(response => {
        let newPerson = response.data;
        const newObj = {
            name: newPerson.name,
            homePlanet: newPerson.homeworld,
            species: newPerson.species,
            birthYear: newPerson.birth_year
        }
        this.setState({ darkSideList: [...this.state.darkSideList, newObj]})
        console.log(newObj)
        })
        .catch(error => {
            alert(error.response.data.errorMessage)
        })

        this.setState({ text: ''})

    }

    render(){
        let darkList = this.state.darkSideList.map((person, i) => {
            return <DarkList key={i} name={person.name} homeWorld={person.homePlanet} species={person.species} birthYear={person.birthYear} />
        })
        return(
            <div className="full-body-container">
              <div className="list">

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
                    <button onClick={this.addPersonDark}>Add to Light Side</button>
                    <button onClick={this.addPersonDark}>Add to Dark Side</button>
                 </div>           
              </div>
              <div className="list">
                {darkList}
              </div>
            </div>
        )
    }
}

export default Search;