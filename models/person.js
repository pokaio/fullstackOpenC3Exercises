const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true,
    },
    number: {
        type: String,
        minLength: 8,
        validate: {
            validator: function (v) {                  
                return /\d{2}-\d{7}/.test(v)
            },
            message: props => `${props.value} is not a valid phone number.`
        },
        required: [true, 'User phone number is required']
    },
})

personSchema.set('toJSON', { //Customize how the data is displayed
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString() //Turns the id object to string
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)