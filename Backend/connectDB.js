const mongoose = require('mongoose')

const connectDB = async () => {

    try {

        let conn = await mongoose.connect('mongodb+srv://burhanvu57:wKAQvzNQNhDJn4dh@portfolio.synp2.mongodb.net/ContactForm?retryWrites=true&w=majority&appName=Portfolio')
        console.log('Succesfull Connection!')
        
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = connectDB()
