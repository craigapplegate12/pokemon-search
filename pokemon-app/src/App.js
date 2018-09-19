import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Create from './components/create-new-pokemon/Create.js';
import Search from './components/search-new-pokemon/Search.js';
import Header from './components/header/Header.js';
import List from './components/list/List.js';



class App extends Component {
  state = {
    name: '',
    type: '',
    moves: '',
    description: '',
    pokemonList: ['hi']
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v1/pokedex/1')
    .then( response => {
      console.log(response.data.pokemon);
    })
  }

  addPokemon = (text) => {
    axios.get('https://pokeapi.co/api/v1/pokedex/1')
    .then( response => {
      this.setState({pokemonList: [response.data.pokemon]})
    })
  }

  handleAddTask = newPoke => {
    this.setState({ pokemonList: [...this.state.pokemonList, newPoke]})
  }

  render() {
    console.log(this.state.name);
    console.log(this.state.pokemonList);

    return (
      <div className="full-body">
        <div>
          <Header />
        </div>
           <div className="large-container">
              <div className="left-container">
                <Search addPokemonFn={this.handleAddTask}/>
                <Create />
              </div>
              <div className="right-container">
                 <List />
              </div>
           </div>
      </div>
    );
  }
}

export default App;
