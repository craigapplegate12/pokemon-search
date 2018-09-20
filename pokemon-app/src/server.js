const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())

let characters;
axios.get('https://swapi.co/api/people')
.then(response => {
    console.log('finished fetching')
    characters = response.data.results;
})

app.get('/characters', (req, res) => {
    res.send(characters)
})

app.post('/characters', (req, res) => {
    const personFound = characters.find((person, i) => {
      return req.body.searchedCharacter === person.name 
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

