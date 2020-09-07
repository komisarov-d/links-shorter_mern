const mongoose = require('mongoose')
const express = require('express')
const config = require('./config/default.json')
const app = express()
const PORT = config.port

app.use('/api/auth', require('./routes/auth.routes'))

async function start() {
    try {
        await mongoose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log('Server error:', e)
        process.exit(1)
    }
}

start()



