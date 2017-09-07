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
      note: 'This is first blog post or any other type of note with more words inside to show some content.'
    },
    {
      id: 2,
      username: 'Thomas',
      note: 'Hello! This is another blog post to show even more content inside, look how beautiful I am! Wonderful! We are going to rock'
    },
    {
      id: 3,
      username: 'Freddy',
      note: 'Well, Im out of ideas, so my blog post will be pretty short'
    }
  ])
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
