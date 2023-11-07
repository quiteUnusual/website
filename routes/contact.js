const express = require("express");
const router = express.Router();


const contactController = require('../controllers/contact')


router.post('/verify', contactController.getValidation);

module.exports = router;