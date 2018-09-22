const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())

let characters = [];
let planets = [];
let species = [];
let numPagesPeople = 9;
let numPagesPlanet = 7;
let numPagesSpecies = 4;

//fetch all characters
for(let i=1; i<=numPagesPeople; i++){
    axios.get(`https://swapi.co/api/people/?page=${i}`)
    .then(response => {
        characters.push(...response.data.results)
        console.log('done fetching characters')
    })
}

//fetch all planets
for(let i=1; i<=numPagesPlanet; i++){
    axios.get(`https://swapi.co/api/planets/?page=${i}`)
    .then(response => {
        planets.push(...response.data.results)
        console.log('done fetching planets')
    })
}

//fetch all species
for(let i=1; i<=numPagesSpecies; i++){
    axios.get(`https://swapi.co/api/species/?page=${i}`)
    .then(response => {
        species.push(...response.data.results)
        console.log('done fetching species')
    })
}

// SPECIES GET POST
app.get('/species', (req, res) => {
    res.send(species)
})

app.post('/species', (req, res) => {
    const personFound = characters.find((person, i) => {
        return req.body.searchedCharacter.toLowerCase() === person.name.toLowerCase(); 
      })
      if(personFound === undefined) {
          return res.status(500).send({errorMessage: 'could not find character'})
      }
      else {
          axios.get(personFound.species[0])
          .then(response => {
              res.send(response.data.name)
          })
          .catch(error => {
              console.log(error)
          })
      }
})

//  PLANETS GET POST
app.get('/planets', (req, res) => {
    res.send(planets)
})

app.post('/planets', (req, res) => {
    const personFound = characters.find((person, i) => {
        return req.body.searchedCharacter.toLowerCase() === person.name.toLowerCase(); 
      })
      if(personFound === undefined) {
          return res.status(500).send({errorMessage: 'could not find character'})
      }
      else {
          axios.get(personFound.homeworld)
          .then(response => {
              res.send(response.data.name)
          })
          .catch(error => {
              console.log(error)
          })
      }
})

//  CHARACTERS GET POST PUT DELETE
app.get('/characters', (req, res) => {
    res.send(characters)
})

app.post('/characters', (req, res) => {
    const personFound = characters.find((person, i) => {
        return req.body.searchedCharacter.toLowerCase() === person.name.toLowerCase(); 
    })
    if(personFound === undefined) {
        return res.status(500).send({errorMessage: 'could not find character'})
    }
    else {
        axios.get(personFound.url)
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
})

app.put('/characters', (req, res) => {
    return null;
})

app.delete('/characters', (req, res) => {
    return null;
})

app.listen(8000, function () {
    console.log(`http://localhost:${this.address().port}`)
})

