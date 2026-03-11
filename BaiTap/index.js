const express = require('express');
const app = express();
const port = 3000;

// Cấu hình để có thể nhận dữ liệu JSON
app.use(express.json());

// Route cơ bản
app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với ứng dụng ExpressJS! Sẵn sàng để thực hành Github.');
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});
