import React, {Component} from 'react';
import './search.css';
import axios from 'axios';

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
        console.log(newObj)
        })
        .catch(error => {
            alert(error.response.data.errorMessage)
        })

        this.setState({ text: ''})

    }

    render(){
        console.log(this.state.darkSideList)
        return(
            <div className="search-container">
                <div className="search-items">
                  <span className="span">Search For Star Wars Character: </span>
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
        )
    }
}

export default Search;