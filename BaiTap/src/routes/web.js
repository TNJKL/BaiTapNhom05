const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const productController = require('../controllers/productController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');
const serviceController = require('../controllers/serviceController');
const newsController = require('../controllers/newsController');
const faqController = require('../controllers/faqController');

// Khai báo route cho người A (Home)
router.get('/', homeController.getHomePage);

// Khai báo route cho người B (Product)
router.get('/products', productController.getProductPage);

// Khai báo route để test push code
router.get('/about', aboutController.getAboutPage);

// Khai báo route liên hệ (tính năng mới để thực hành git)
router.get('/contact', contactController.getContactPage);

// Khai báo route dịch vụ (Task độc lập cho đồng đội)
router.get('/services', serviceController.getServicePage);

// Khai báo route tin tức (Task bạn mới thêm để push)
router.get('/news', newsController.getNewsPage);

// Khai báo route FAQ (Cho bạn thực hành push code)
router.get('/faq', faqController.getFaqPage);

module.exports = router;
