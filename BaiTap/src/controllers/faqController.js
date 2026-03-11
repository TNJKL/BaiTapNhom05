const getFaqPage = (req, res) => {
    // Array of mock FAQs
    const faqs = [
        { question: "Làm thế nào để tránh conflict?", answer: "Hãy chia nhỏ task và mỗi người làm trên một file riêng biệt." },
        { question: "Git pull rebase là gì?", answer: "Là cách để đồng bộ code từ remote nhánh về local và đưa các commit của bạn lên trên cùng." },
        { question: "Push code bị reject?", answer: "Bạn cần pull code mới nhất về trước, xử lý conflict nếu có, sau đó mới push lại." }
    ];

    let faqHtml = '<ul style="list-style-type: none; padding: 0;">';
    faqs.forEach(faq => {
        faqHtml += `<li style="margin-bottom: 20px;">
                        <strong style="color: #007bff; font-size: 18px;">Hỏi: ${faq.question}</strong>
                        <p style="margin-top: 5px; font-size: 16px;"><strong>Đáp:</strong> ${faq.answer}</p>
                    </li>`;
    });
    faqHtml += '</ul>';

    res.send(`
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h1 style="text-align: center; color: #333;">Các Câu Hỏi Thường Gặp (FAQ)</h1>
            <p style="text-align: center; color: #666; margin-bottom: 30px;">Trang này cũng là một ví dụ thêm (trên 5 dòng code) để test push code.</p>
            ${faqHtml}
            <div style="text-align: center; margin-top: 30px;">
                <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #6c757d; color: white; text-decoration: none; border-radius: 5px;">Quay lại trang chủ</a>
            </div>
        </div>
    `);
}

module.exports = {
    getFaqPage
}
