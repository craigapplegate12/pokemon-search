import React, {Component} from 'react';
import './create.css';

class Create extends Component {

       state = {
            name: '',
            homeWorld: '',
            species: [],
            birthYear: ''
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



    render(){
        console.log(this.state.name);
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
                <input className="create-input" value={this.name}  onChange={ (e) => this.updateName(e.target.value)} />
                <input className="create-input" value={this.name} onChange= { (e) => this.updateHomeWorld(e.target.value)} />
                <input className="create-input" value={this.name} onChange= { (e) => this.updateSpecies(e.target.value)} />
                <input className="create-input" value={this.name} onChange= { (e) => this.updateBirthYear(e.target.value)} />
              </div>
            </div>
            <div className="add-buttons">
                <button>Add to Light Side</button>
                <button>Add to Dark Side</button>
            </div>
            </div>
            )
        }
    }

    export default Create;
