const express = require('express');

const router = express.Router();

// const { User } = require('../../models');

const {
  signupUser, getUsers, getUser, // updatePost, deletePost,
} = require('./controllers');

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', signupUser);

// router.post('/', createUser);

// router.put('/:id', updatePost);

// router.delete('/:id', deletePost);

module.exports = router;
