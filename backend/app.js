const express = require('express');
const app = new express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "1234",
      title: "First server side title",
      content: "First server side content"
    },
    {
      id: "5678",
      title: "Second server side title",
      content: "Second server side content"
    }
  ];
  res.status(200).json({
    message: "Post fetched successfully!",
    posts: posts
  });
})
module.exports = app;
