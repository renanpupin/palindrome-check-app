var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Use the URL like: http://localhost:8080/api/palindrome/:str');
});

//http://localhost:8080/api/palindrome/:str
app.get('/api/palindrome/:str', function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  var str = req.params.str.toUpperCase().replace(/\s+/g, '');
  var isPalindrome = (str === str.split('').reverse().join(''));
  if(isPalindrome){
    res.status(200).send("200 - TRUE");
  }else{
    res.status(400).send("400 - FALSE");
  }
});

app.use(function (error, req, res, next) {
  console.error(error.stack);
  res.status(400).send(error.message);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});