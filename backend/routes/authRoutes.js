const express = require('express');
const {signin }= require('../controller/authController')
const router = express.Router();

//auth routes
router.get('/', signin);

module.exports = router;