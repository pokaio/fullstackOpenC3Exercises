//Exercise 3.1-3.21
//Phonebook-backend 


//Exercise 3.20 part 2. Error message if name matches names in db.

const express = require('express')
const app = express()
app.use(express.json()) //Activates the json-parser middelware
require('dotenv').config() //Imports variables from .env file
const Person = require('./models/person') //Imports Mongoose backend code
const cors = require('cors') //Cross orgins 
app.use(cors())
app.use(express.static('build')) //Allows us to display a static webpage from backend
const morgan = require('morgan') //Morgan logger (middelware)
const { restart } = require('nodemon')

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

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))

    /* const id = Number(request.params.id)
    const filter = persons.find(el => el.id === id)

    if (filter) {
        response.json(filter)
    } else (
        response.status(404).end()
    ) */

})

app.get('/info', (request, response) => {
    Person.find({}).then(result => {
        response.send(`<p>Phonebook has info on ${result.length} people.</p>`)
    })
    /* const entries = persons.length
    const receivedRequest = new Date()
    response.send(
        `<p>Phonebook has info for ${entries} people.<p> 
        ${receivedRequest}`
    ) */
})


app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))


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

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))

})

app.post('/api/persons/', (request, response, next) => {
    const body = request.body

    if (body.name === undefined || body.number === undefined) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    //If trying to add a person already in phonebook
    Person
        .find({ name: body.name })
        .then(result => {
            if (result.length > 0) {
                return response.status(400).json({
                    error: `Cannot add ${body.name}, because person is already in db.`
                })
            }
        })

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
        .catch((error) => next(error))


    /* const person = new Person({
        name: body.name,
        number: Number(body.number),
    })
 
 
 
    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
        .catch((error) => {
            console.log(error.message)
        }) */


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



const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') { //I.e. input too short
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})