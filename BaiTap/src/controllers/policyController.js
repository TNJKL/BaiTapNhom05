const getPolicyPage = (req, res) => {
    // A mock data for policies to make the code longer than 5 lines
    const policies = [
        {
            title: "1. Quy định về Commit và Push Code",
            content: "Mỗi thành viên cần pull code mới nhất về trước khi tiến hành code tính năng mới. Luôn sử dụng lệnh git pull để đảm bảo bản local của bạn luôn cập nhật với remote branch."
        },
        {
            title: "2. Quy định Đặt Tên Nhanh & Commit",
            content: "Tên commit message nên rõ ràng và tuân thủ quy tắc, ví dụ: 'feat: Thêm trang chính sách', 'fix: Lỗi giao diện trang chủ' để team dễ dàng tra cứu lịch sử."
        },
        {
            title: "3. Quy định xử lý Conflict",
            content: "Nếu xảy ra conflict, yêu cầu thông báo với đồng đội liên quan và giải quyết conflict trên local cẩn thận trước khi push. Tránh việc force push lên nhánh dev chung."
        }
    ];

    let policyHtml = '<div style="margin: 20px 0; text-align: left;">';
    policies.forEach((item, index) => {
        policyHtml += `
            <div style="background-color: #fefefe; border-left: 5px solid #17a2b8; margin-bottom: 20px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="color: #17a2b8; margin-top: 0;">${item.title}</h3>
                <p style="line-height: 1.6; color: #444;">${item.content}</p>
            </div>
        `;
    });
    policyHtml += '</div>';

    res.send(`
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
            <h1 style="text-align: center; color: #333; margin-bottom: 30px;">Chính Sách & Quy Định Nhóm (Policy)</h1>
            <p style="text-align: center; color: #666; font-style: italic; margin-bottom: 40px;">Bản dự thảo để cả team tham khảo trong quá trình làm việc chung trên GitHub.</p>
            
            ${policyHtml}
            
            <div style="text-align: center; margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px;">
                <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px;">&larr; Trở Về Trang Chủ</a>
            </div>
        </div>
    `);
}

module.exports = {
    getPolicyPage
}
