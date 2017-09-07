const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  setTimeout(next,1000);
  next();
});

app.get('/notes', function (req, res) {
  res.send([
    {
      id: 1,
      username: 'Kasia',
      note: 'Hello'
    },
    {
      id: 2,
      username: 'Thomas',
      note: 'Updated note'
    },
    {
      id: 3,
      username: 'Freddy',
      note: 'Hello!!'
    }
  ])
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
