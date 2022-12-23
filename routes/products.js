//what path



const express = require('express');
const { getAllProducts, getAllProductsTesting } = require("../controllers/products")


const router = express.Router();


router.route("/").get(getAllProducts);    //sinilar as app.get in app.js  what path"/" from whrere getAllProducts"


router.route("/testing").get(getAllProductsTesting);

module.exports = router;

