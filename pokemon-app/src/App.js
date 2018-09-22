import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search.js';
import Header from './components/header/Header.js';



class App extends Component {
  state = {
    data: []
  }


  /*componentDidMount(){
    axios.get("https://swapi.co/api/species/?page=4")
    .then( response => {
      console.log(response.data.results);
      this.setState({ data: response.data.results });
    })
    .catch((error) => {
      console.log(error)
    })
  }*/


  render() {
    return (
      
      <div className="full-body">
        <div>
          <Header />
        </div>
        <div className="middle-container">
          <Search />
        </div>

      </div>
    );
  }
}

export default App;
