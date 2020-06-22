const express = require('express')
const app = express()
const port = 3000

var routes = require('./routes/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('server is running at ',port)
})