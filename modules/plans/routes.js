const express = require('express');

const router = express.Router();

// const { Post } = require('../../models');

const {
  getPosts, getPost, createPost, updatePost, deletePost,
} = require('./controllers');

router.get('/', getPosts);

router.get('/:id', getPost);

router.post('/', createPost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);

module.exports = router;
