const mongoose = require('mongoose')

if (process.argv.length < 3) { //Part of node.js. Number of arguments, i.e. the cmd-line 'node mongoose.js password' has 3 arguments 
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.7ml3hjr.mongodb.net/noteApp?retryWrites=true&w=majority`

//Retrieving data from MongoDB
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
    .connect(url)
    .then((result) => {
        Note.find({ important: true}).then(result => {
            result.forEach(note => {
                console.log(note)
            })
            mongoose.connection.close()
        })


    })
    .catch((err) => console.log(err))


//Storing data to MongoDB
/* const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
    .connect(url)
    .then((result) => {
        console.log('connected')

        const note = new Note({
            content: 'Learning React is difficult :P',
            date: new Date(),
            important: true,
        })

        return note.save()

    })
    .then(() => {
        console.log('note saved!')
        return mongoose.connection.close()
    })
    .catch((err) => console.log(err)) */