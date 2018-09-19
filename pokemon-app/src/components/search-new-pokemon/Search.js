import React, {Component} from 'react';
import './search.css';

class Search extends Component {
    state = {
        text: '',
        name: '',
        type: '',
        description: '',
        results: []
    }


    handleInputChange = (value) => {
        this.setState({
          text: value
        })
    }


    addPokemon = () => {
        this.props.addPokemonFn( this.state.text);
        this.setState({ text: ''})

    }

    render(){
        console.log(this.state.text)
        return(
            <div className="search-container">
                <div className="search-items">
                  <span>Search For Pokemon: </span>
                  <input 
                    className="search-input" 
                    placeholder="find your pokemon"
                    value={this.state.text}   
                    onChange={(e) => this.handleInputChange(e.target.value)}
                  />
                  <button onClick={this.addPokemon}>Add Pokemon</button>
                </div>
                
            </div>
        )
    }
}

export default Search;