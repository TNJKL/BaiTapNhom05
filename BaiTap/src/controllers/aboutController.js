const getAboutPage = (req, res) => {
    // Render a simple HTML string to test the new feature
    res.send(`
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h1>Trang Giới Thiệu (Tính năng test push code)</h1>
            <p>Tính năng này vừa được thêm vào ở controllers để bạn test quá trình push code với đồng đội!</p>
            <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Quay lại trang chủ</a>
        </div>
    `);
}

module.exports = {
    getAboutPage
}
