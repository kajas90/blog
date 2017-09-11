const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  setTimeout(next,1000);
  next();
});

const posts = [
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
]

let comments = [
  {
    postId: 1,
    parent: 0,
    id: 1,
    author: 'Kate',
    content: 'Good post!'
  },
  {
    postId: 1,
    parent: 1,
    id: 2,
    author: 'Thomas',
    content: '@Kate thank you!'
  },
  {
    postId: 2,
    parent: 0,
    id: 1,
    author: 'Kate',
    content: 'Nice post!'
  },
  {
    postId: 2,
    parent: 1,
    id: 2,
    author: 'Thomas',
    content: '@Kate thank you!'
  }
  ,
  {
    postId: 3,
    parent: 0,
    id: 1,
    author: 'Kate',
    content: 'Well post! #tech #cats #dogs #sometag'
  },
  {
    postId: 3,
    parent: 1,
    id: 2,
    author: 'Thomas',
    content: '@Kate thank you!'
  },
  {
    postId: 3,
    parent: 1,
    id: 3,
    author: 'Kate',
    content: 'Exciting!'
  },
  {
    postId: 3,
    parent: 3,
    id: 4,
    author: 'Thomas',
    content: '@Kate Totally!'
  }
]

app.get('/notes', function (req, res) {
  res.send(posts)
})

app.get('/post', function (req, res) {
  const id = req.param('id')
  res.send(Object.assign({ comments: comments.filter(item => item.postId == id)}, posts.find(item => item.id == id)))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
