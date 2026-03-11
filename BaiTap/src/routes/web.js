const express = require('express');
const router = express.Router();//Dobg nay duoc sua boi B
const homeController = require('../controllers/homeController');
const productController = require('../controllers/productController');

// Khai báo route cho người A (Home)
router.get('/', homeController.getHomePage);

// Khai báo route cho người B (Product)
router.get('/products', productController.getProductPage);

module.exports = router;
