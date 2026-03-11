const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const productController = require('../controllers/productController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');

// Khai báo route cho người A (Home)
router.get('/', homeController.getHomePage);

// Khai báo route cho người B (Product)
router.get('/products', productController.getProductPage);

// Khai báo route để test push code
router.get('/about', aboutController.getAboutPage);

// Khai báo route liên hệ (tính năng mới để thực hành git)
router.get('/contact', contactController.getContactPage);

module.exports = router;
