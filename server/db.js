import mongoose from 'mongoose'

mongoose.connection.on('open', () => console.log('connection open'))
mongoose.connection.on('error', (err) => {
    throw err
})

mongoose.connect('mongodb://localhost:27017/blog')
