const express = require('express')
const app = express()


//MIDDLEWARE
app.use('/posts', () => {

})



//ROUTES

app.get('/', (req,res,next)=>{
    res.render('index')
})



//PORT WE ARE LISTENING IN NODEMON
app.listen(process.env.PORT || 5000)