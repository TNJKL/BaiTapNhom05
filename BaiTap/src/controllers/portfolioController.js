const getPortfolioPage = (req, res) => {
    // A mock list of team projects or user's portfolio items
    const projects = [
        { name: "Website Bán Hàng", description: "Dự án cuối kỳ với Node.js và Express", status: "Hoàn thành" },
        { name: "Ứng Dụng Xem Thời Tiết", description: "Sử dụng API thời tiết công khai", status: "Đang phát triển" },
        { name: "Hệ Thống Quản Lý Thư Viện", description: "Bao gồm mượn/trả sách tự động", status: "Lên ý tưởng" }
    ];

    let portfolioHtml = '<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 30px;">';
    
    projects.forEach(project => {
        portfolioHtml += `
            <div style="border: 1px solid #ccc; padding: 20px; border-radius: 8px; width: 300px; box-shadow: 2px 2px 8px rgba(0,0,0,0.1);">
                <h3 style="color: #0056b3; margin-top: 0;">${project.name}</h3>
                <p><em>${project.description}</em></p>
                <div style="margin-top: 15px; padding: 5px 10px; background-color: #f8f9fa; border-radius: 4px; display: inline-block;">
                    <strong>Trạng thái:</strong> ${project.status}
                </div>
            </div>`;
    });
    portfolioHtml += '</div>';

    res.send(`
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 1000px; margin: 50px auto; padding: 20px;">
            <h1 style="text-align: center; color: #333; border-bottom: 2px solid #0056b3; padding-bottom: 10px; display: inline-block; width: 100%;">
                Trang Hồ Sơ Dự Án (Portfolio)
            </h1>
            <p style="text-align: center; font-size: 1.1em; color: #555; margin-bottom: 40px;">
                Tính năng này được thêm vào để làm ví dụ thực hành quản lý source code (Push/Merge) trong nhóm.
            </p>
            
            ${portfolioHtml}
            
            <div style="text-align: center; margin-top: 50px;">
                <a href="/" style="display: inline-block; padding: 12px 25px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;">
                    &larr; Quay lại trang chủ
                </a>
            </div>
        </div>
    `);
}

module.exports = {
    getPortfolioPage
}
