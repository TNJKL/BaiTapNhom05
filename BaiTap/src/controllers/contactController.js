const getContactPage = (req, res) => {
    // Trả về một chuỗi text cho trang Liên hệ
    res.send('<h1>Trang Liên Hệ</h1><p>Đây là tính năng mới do bạn code để tiến hành thực hành push/pull code với đồng đội!</p><p>Hãy tiến hành git add, commit và push lên nhánh dev hoặc nhánh riêng của bạn nhé.</p>');
}

module.exports = {
    getContactPage
}
