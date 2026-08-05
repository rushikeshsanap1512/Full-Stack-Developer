// const fs = require('fs')

// fs.readFile('a.txt', 'utf-8', function(err, data){
//   console.log(data);
// })

// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })

const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('<b>Name: </b>Rushikesh')
})

app.post('/', function(req, res){
  res.send('yes you can make a post')
})

app.get('/asd', (req, res) => {
  res.send('from the asd')
})

app.listen(3000)