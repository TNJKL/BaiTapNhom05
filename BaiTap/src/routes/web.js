const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const productController = require('../controllers/productController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');
const serviceController = require('../controllers/serviceController');
const newsController = require('../controllers/newsController');
const faqController = require('../controllers/faqController');
const feedbackController = require('../controllers/feedbackController');
const portfolioController = require('../controllers/portfolioController');
const partnerController = require('../controllers/partnerController');

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

// Khai báo route Feedback (Task mới tiếp tục thực hành)
router.get('/feedback', feedbackController.getFeedbackPage);

// Khai báo route Portfolio (Thực hành kéo/đẩy code nhóm)
router.get('/portfolio', portfolioController.getPortfolioPage);

// Khai báo route Partner (Danh sách đối tác)
router.get('/partner', partnerController.getPartnerPage);

module.exports = router;
