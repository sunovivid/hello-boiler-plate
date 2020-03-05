const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sunovivid:HkWcL1tASWMuDG5k@hellocluster-frjs4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World NodeJS!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))