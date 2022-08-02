//Exercise 3.1-3.8

//3.5

//const { json } = require('express')
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

    response.send(generateId())
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
    let newId = Math.floor(Math.random() * 1000)
    const arr = persons.map(el => el.id)

    while (arr.includes(newId)) {
        newId = Math.floor(Math.random() * 1000)
    }

    return newId
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const names = persons.map(el => el.name)

    if (!body.name || !body.number) {
        response.status(400).json({
            error: 'missing name or number'
        })
    }

    if(names.includes(body.name)) {
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
    response.json(persons)
})

const PORT = 3001
app.listen(PORT)