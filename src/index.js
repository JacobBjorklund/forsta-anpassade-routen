const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/hello', (req, res) => {
    res.status(200).json('Hej på dig!')
})

app.listen(3000)