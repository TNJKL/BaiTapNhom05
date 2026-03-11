const getProductPage = (req, res) => {
    // Để ví dụ, tôi render lại trang home nhưng có thể tạo file khác sau
    // Hoặc trả về 1 chuỗi json/text
    res.send('Đây là trang sản phẩm dành riêng cho Person B để thực hành!');
}

module.exports = {
    getProductPage
}
