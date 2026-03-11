const getNewsPage = (req, res) => {
    const newsData = [
        { id: 1, title: 'Khai trương cửa hàng mới', date: '2026-03-15' },
        { id: 2, title: 'Khuyến mãi ngày Valentine', date: '2026-02-14' },
        { id: 3, title: 'Nhập lô hoa hồng Đà Lạt mới', date: '2026-03-10' }
    ];

    let htmlContent = '<h1>Tin Tức Cửa Hàng</h1><p>Chào mừng bạn đến với chuyên mục tin tức.</p><ul>';
    newsData.forEach(news => {
        htmlContent += `<li><strong>${news.title}</strong> - <em>(${news.date})</em></li>`;
    });
    htmlContent += '</ul><p>Thực hành Push code mới thành công!</p>';

    res.send(htmlContent);
}

module.exports = {
    getNewsPage
}
