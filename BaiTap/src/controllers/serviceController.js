const getServicePage = (req, res) => {
    res.send(`
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h1>Trang Dịch Vụ (Dành cho đồng đội khác)</h1>
            <p>File controller này được tạo riêng biệt để tránh conflict khi nhiều người cùng làm việc.</p>
            <p>Đồng đội của bạn có thể code thêm tính năng ở đây.</p>
            <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px;">Quay lại trang chủ</a>
        </div>
    `);
}

module.exports = {
    getServicePage
}
