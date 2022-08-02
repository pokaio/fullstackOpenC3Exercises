//Exercise 3.1-3.8

//3.5

const { json } = require('express')
const express = require('express')
const app = express()

app.use(express.json()) //Activates the json-parser

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send("<h1>Hello world</h1>")
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const filter = persons.find(el => el.id === id)

    if (filter) {
        response.json(filter)
    } else (
        response.status(404).end()
    )
    
})

app.get('/info', (request, response) => {
    const entries = persons.length
    const receivedRequest = new Date()
    response.send(
        `<p>Phonebook has info for ${entries} people.<p> 
        ${receivedRequest}`
    )
})


app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(el => el.id !== id)

    response.status(204).end()

})


const generateId = () => {
    //Check if Id already exists
    const newId = Math.floor(Math.random()*10000)
}


app.post('/api/persons', (request, response) => {

})

const PORT = 3001
app.listen(PORT)