const express = require('express')
const app = express()


//MIDDLEWARE
app.use('/posts', () => {

})



//ROUTES

app.get('/', (req,res,next)=>{
    res.send('we are home!')
})



//PORT WE ARE LISTENING IN NODEMON
app.listen(3000)