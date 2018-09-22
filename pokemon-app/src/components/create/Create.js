import React, {Component} from 'react';
import './create.css';

class Create extends Component {

       state = {
            name: '',
            homeWorld: '',
            species: '',
            birthYear: '',
            darkSideList: [],
            lightSideList: []
        }
    

    updateName(value){
        this.setState({ name: value })
    }

    updateHomeWorld(value){
        this.setState({ homeWorld: value })
    }

    updateSpecies(value){
        this.setState({ species: value })
    }

    updateBirthYear(value){
        this.setState({ birthYear: value })
    }

    addNewDark = () => {
        const {addToDark} = this.props;
        let newChar ={
            name: this.state.name,
            homePlanet: this.state.homeWorld,
            species: this.state.species,
            birthYear: this.state.birthYear
        }
        addToDark(newChar);
        this.setState({ 
            name: '',
            homeWorld: '',
            species: '',
            birthYear: ''
        })
    }

    addNewLight = () => {
        const {addToLight} = this.props;
        let newChar ={
            name: this.state.name,
            homePlanet: this.state.homeWorld,
            species: this.state.species,
            birthYear: this.state.birthYear
        }
        addToLight(newChar);
        this.setState({ 
            name: '',
            homeWorld: '',
            species: '',
            birthYear: ''
        })
    }



    render(){
       return(
           <div>
           <div className="create-container">
              <div className="span-text">
                <span className="input-text">Name: </span>
                <span className="input-text">Home-Planet: </span>
                <span className="input-text">Species: </span>
                <span className="input-text">Birth-Year: </span>    
              </div>
              <div className="input-field">
                <input className="create-input" value={this.state.name}  onChange={ (e) => this.updateName(e.target.value)} />
                <input className="create-input" value={this.state.homeWorld} onChange= { (e) => this.updateHomeWorld(e.target.value)} />
                <input className="create-input" value={this.state.species} onChange= { (e) => this.updateSpecies(e.target.value)} />
                <input className="create-input" value={this.state.birthYear} onChange= { (e) => this.updateBirthYear(e.target.value)} />
              </div>
            </div>
            <div className="add-buttons">
                <button className="add-buttons" id="light-button" onClick={this.addNewLight}>Add to Light Side</button>
                <button className="add-buttons" id="dark-button" onClick={this.addNewDark}>Add to Dark Side</button>
            </div>
            </div>
            )
        }
    }

    export default Create;
