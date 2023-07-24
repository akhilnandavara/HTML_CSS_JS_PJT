const express = require('express');
const path = require('path');
const app = express()
const port = 8080
var axios = require("axios");

app.get('/', (req, res) => {
  console.log(path.join(__dirname,'public'))
  return res.sendFile('public/index.html',{root:__dirname})
})

app.get('/searchword', (req, res) => {
  // res.send('Hello World!')
  console.log(req.query.entry)

var options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
  params: {entry: req.query.entry},
  headers: {
    'X-RapidAPI-Key': '029318a4e3msh426a223056f3d4dp19337bjsn906d19903356',
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
  console.error(error);
});

  // let response={}
  // response.data=
  //   {
  //     entry: 'apple',
  //     request: 'apple',
  //     response: 'apple',
  //     assoc_word: [ 'fruit', 'juice', 'orange' ],
  //     assoc_word_ex: [ 'fruit', 'juice', 'orange', 'grape' ],
  //     version: '7.5.5',
  //     author: 'twinword inc.',
  //     email: 'help@twinword.com',
  //     result_code: '200',
  //     result_msg: 'Success'
  //   }
  // //   // console.log(response.data)
  //   res.json(response.data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} -http://localhost:8080`)
})