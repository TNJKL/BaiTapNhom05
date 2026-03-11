const getCareerPage = (req, res) => {
    // Mock career opportunities list to keep the controller substantial (> 5 lines)
    const jobs = [
        { 
            title: "Lập trình viên Node.js", 
            type: "Toàn thời gian", 
            location: "Hồ Chí Minh", 
            description: "Tham gia phát triển các hệ thống backend chịu tải cao." 
        },
        { 
            title: "Chuyên viên ReactJS", 
            type: "Bán thời gian", 
            location: "Remote", 
            description: "Xây dựng giao diện mượt mà và responsive cho ứng dụng web." 
        },
        { 
            title: "Thực tập sinh QC/Tester", 
            type: "Thực tập", 
            location: "Hà Nội", 
            description: "Hỗ trợ viết test case và kiểm thử phần mềm trước khi release." 
        }
    ];

    let jobHtml = '<div style="display: flex; flex-direction: column; gap: 20px;">';
    jobs.forEach(job => {
        jobHtml += `
            <div style="border: 1px solid #e1e4e8; padding: 20px; border-radius: 6px; background-color: #ffffff; transition: box-shadow 0.3s ease;">
                <h3 style="margin-top: 0; color: #0366d6;">${job.title}</h3>
                <div style="margin-bottom: 10px; font-size: 0.9em; color: #586069;">
                    <span style="display: inline-block; background-color: #f1f8ff; padding: 3px 8px; border-radius: 12px; margin-right: 10px;">🕒 ${job.type}</span>
                    <span style="display: inline-block; background-color: #f1f8ff; padding: 3px 8px; border-radius: 12px;">📍 ${job.location}</span>
                </div>
                <p style="margin-bottom: 0; color: #24292e;">${job.description}</p>
            </div>
        `;
    });
    jobHtml += '</div>';

    res.send(`
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 900px; margin: 40px auto; padding: 20px; background-color: #f6f8fa; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="color: #24292e; font-size: 2.5em; margin-bottom: 10px;">Cơ Hội Nghề Nghiệp</h1>
                <p style="color: #586069; font-size: 1.1em;">Tính năng này (Career) được sinh ra để bạn tiếp tục thực hành Pull/Push code cùng nhóm.</p>
            </div>
            
            ${jobHtml}
            
            <div style="text-align: center; margin-top: 40px;">
                <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #2ea44f; color: white; text-decoration: none; border-radius: 6px; font-weight: 600;">
                    Về Trang Chủ
                </a>
            </div>
        </div>
    `);
}

module.exports = {
    getCareerPage
}
