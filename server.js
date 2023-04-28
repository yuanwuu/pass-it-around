const express  = require('express')
const app = express ()
const PORT = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send(`<h1>99 Bottle of beer on the wall</h1>
    <br />
    <a href='/98'>Take One down, pass it around</a>`)
})

app.get('/:number_of_bottles',(req,res) => {
    if (req.params.number_of_bottles > 0) {
        res.send(`<h1>${req.params.number_of_bottles} Bottle of beer on the wall</h1>
        <br />
        <a href=${req.params.number_of_bottles - 1}>Take One down, pass it around</a>`)
    } else {
        res.redirect('/')
    }
})


app.listen(PORT, () =>{
    console.log(`listening in port: ${PORT}`)
})