let express =require('express')
let api_routes = require('./routes/api.js')

//creates web application
let app = express()

//to manage json requests and convert data to Javascript
app.use(express.json())

app.use('/api', api_routes)

//start new server
let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port', server.address().port )
})
