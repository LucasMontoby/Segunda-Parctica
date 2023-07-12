const express = require("express");
const router = express.Router();

const controladores = require("../controllers/mainController");

router.get("/", controladores.home);

router.get("/about", controladores.about);

module.exports = router;