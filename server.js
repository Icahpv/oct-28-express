const { response } = require('express')
const express = require('express')
const { fstat } = require('fs')
const { request } = require('http')
const app = express()

app.use(express.static('public'))

app.use(function(request, response){
  response.status(404)
  response.redirect('404: File Not Found')
})


app.listen(3000, function(){
  console.log('Listen on port 3000')
})