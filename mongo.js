//Exercise 3.12 Command-line database
const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
} else if (process.argv.length === 4) {
    console.log('Missing name or phonenumber')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://fullstack:${password}@cluster0.7ml3hjr.mongodb.net/phonebook?retryWrites=true&w=majority`

const name = process.argv[3]
const phoneNumber = process.argv[4]



mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongodDB')
    })
    .catch(error => {
        console.log('Error connecting to MongoDB', error.message)
    })


//Add number to database
const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: Number,
})

const Person = mongoose.model('Person', personSchema)


Person.find({}).then(result => {
    if (process.argv.length === 5) {
        let maxId = 0

        maxId = Math.max(...result.map(el => el.id)) + 1

        const person = new Person({
            id: maxId,
            name: name,
            number: phoneNumber,
        })

        console.log(person)
        console.log(`Added ${person.name} number ${person.number} to phonebook.`)
        return person.save()

    } else {
        console.log("Phonebook:")
        result.map(el => console.log(el.name, el.number))
    }


})
    .then(() => {
        console.log('Disconnected from MongoDB')
        return mongoose.connection.close()
    })