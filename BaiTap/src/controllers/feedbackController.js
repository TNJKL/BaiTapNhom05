const getFeedbackPage = (req, res) => {
    // Giả lập danh sách đánh giá của khách hàng
    const feedbacks = [
        { id: 1, customer: 'Nguyễn Văn A', rating: 5, comment: 'Hoa rất đẹp, giao hàng đúng giờ!' },
        { id: 2, customer: 'Trần Thị B', rating: 4, comment: 'Chủ shop tư vấn nhiệt tình, giá hợp lý.' },
        { id: 3, customer: 'Lê Văn C', rating: 5, comment: 'Sẽ ủng hộ shop dài dài nha.' }
    ];

    let htmlContent = '<h1>Đánh Giá Của Khách Hàng</h1><p>Dưới đây là những phản hồi từ khách hàng thân thiết:</p><ul>';
    feedbacks.forEach(fb => {
        let stars = '⭐'.repeat(fb.rating);
        htmlContent += `<li style="margin-bottom: 10px;">
            <strong>${fb.customer}</strong> (${stars})<br>
            <i>"${fb.comment}"</i>
        </li>`;
    });
    htmlContent += '</ul><br><a href="/">Trở về trang chủ</a>';

    res.send(htmlContent);
}

module.exports = {
    getFeedbackPage
}
