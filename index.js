//Exercise 3.1-3.14
//Phonebook-backend 


//Exercise 3.13

const express = require('express')
const app = express()

require('dotenv').config() //Imports variables from .env file
const Person = require('./models/person') //Imports Mongoose backend code

const cors = require('cors') //Cross orgins 
app.use(cors())

app.use(express.static('build')) //Allows us to display a static webpage from backend

const morgan = require('morgan') //Morgan logger (middelware)

app.use(express.json()) //Activates the json-parser middelware

//The token allows us to display custom variables with morgan
morgan.token('body', (request, response) => {
    return JSON.stringify(request.body)
})
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))



app.get('/', (request, response) => {
    response.send("<h1>Hello world!</h1>")
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(el => {
        response.json(el)
    })
})

app.get('/api/persons/:id', (request, response) => {
    /* const id = Number(request.params.id)
    const filter = persons.find(el => el.id === id)

    if (filter) {
        response.json(filter)
    } else (
        response.status(404).end()
    ) */

})

app.get('/info', (request, response) => {
    /* const entries = persons.length
    const receivedRequest = new Date()
    response.send(
        `<p>Phonebook has info for ${entries} people.<p> 
        ${receivedRequest}`
    ) */
})


app.delete('/api/persons/:id', (request, response) => {
    /* const id = Number(request.params.id)
    persons = persons.filter(el => el.id !== id)

    response.status(204).end() */

})


/* const generateId = () => {
    //Check if Id already exists
    let newId = Math.floor(Math.random() * 1000)
    const arr = persons.map(el => el.id)

    while (arr.includes(newId)) {
        newId = Math.floor(Math.random() * 1000)
    }

    return newId
} */



app.post('/api/persons', (request, response) => {
    const body = request.body


    console.log(body.name)

    if (body.name === undefined || body.number === undefined) {
        return response.status(400).json({
            error: 'content missing'
        })
    }


    const person = new Person({
        name: body.name,
        number: Number(body.number),
    })

    

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
        .catch((error) => {
            console.log(error.message)
        })


    /* const body = request.body
    const names = persons.map(el => el.name)

    if (!body.name || !body.number) {
        response.status(400).json({
            error: 'missing name or number'
        })
    }

    if (names.includes(body.name)) {
        response.status(400).json({
            error: 'name must be unique'
        })
    }

    const personsObj = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(personsObj)
    response.json(persons) */
})




const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})