const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Cấu hình View Engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Cấu hình phục vụ file tĩnh (CSS, Images, JS)
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Cấu hình để có thể nhận dữ liệu JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing (Đây là nơi gắn các routes từ src/routes vào ứng dụng)
const webRoutes = require('./src/routes/web');
app.use('/', webRoutes);

// Khởi chạy server
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});
