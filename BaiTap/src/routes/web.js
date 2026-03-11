const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const productController = require('../controllers/productController');
const aboutController = require('../controllers/aboutController');

// Khai báo route cho người A (Home)
router.get('/', homeController.getHomePage);

// Khai báo route cho người B (Product)
router.get('/products', productController.getProductPage);

// Khai báo route để test push code
router.get('/about', aboutController.getAboutPage);

module.exports = router;
