const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get("/", (req,res) => {
  res.redirect('/');
});

router.post("/", (req, res, next) => {
  res.send('post stuff');
})

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;