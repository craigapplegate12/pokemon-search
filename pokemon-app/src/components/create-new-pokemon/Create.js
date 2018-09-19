import React, {Component} from 'react';
import './create.css';

class Create extends Component {

       state = {
            name: '',
            type: '',
            moves: [],
            description: ''
        }
    

    updateName(value){
        this.setState({ name: value })
    }

    updateType(value){
        this.setState({ type: value })
    }

    updateMoves(value){
        this.setState({ moves: value })
    }

    updateDescription(value){
        this.setState({ description: value })
    }



    render(){
        console.log(this.state.name);
       return(
           <div>
           <div className="create-container">
              <div className="span-text">
                <span className="input-text">Name: </span>
                <span className="input-text">Type: </span>
                <span className="input-text">Moves: </span>
                <span className="input-text">Description: </span>    
              </div>
              <div className="input-field">
                <input className="create-input" value={this.name}  onChange={ (e) => this.updateName(e.target.value)} />
                <input className="create-input" value={this.name} onChange= { (e) => this.updateType(e.target.value)} />
                <input className="create-input" value={this.name} onChange= { (e) => this.updateMoves(e.target.value)} />
                <input className="create-input" value={this.name} onChange= { (e) => this.updateDescription(e.target.value)} />
              </div>
              <div>
                  <button>Create New Pokemon</button>
              </div>
            </div>
                
            </div>
            )
        }
    }

    export default Create;
