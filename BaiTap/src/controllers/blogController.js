const getBlogPage = (req, res) => {
    // Giả lập danh sách bài viết blog chia sẻ kinh nghiệm
    const blogs = [
        { id: 1, title: 'Cách giữ hoa tươi lâu trong bình', author: 'Hoa Yêu Thương', views: 1250 },
        { id: 2, title: 'Ý nghĩa các loài hoa trong ngày cưới', author: 'Admin', views: 3420 },
        { id: 3, title: 'Top 5 loại hoa tặng mẹ ý nghĩa nhất', author: 'Minh Tuấn', views: 890 },
        { id: 4, title: 'Hướng dẫn tự cắm hoa nghệ thuật tại nhà', author: 'Hương Trà', views: 2100 }
    ];

    let html = `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #be457c; text-align: center; border-bottom: 2px solid #811044; padding-bottom: 10px;">Blog Chia Sẻ Kinh Nghiệm</h1>
            <p style="text-align: center; color: #555;">Những bài viết hay nhất về thế giới các loài hoa</p>
            
            <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
    `;

    blogs.forEach(blog => {
        html += `
                <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background-color: #f9f9f9; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">
                    <h3 style="margin-top: 0; color: #440522;">${blog.title}</h3>
                    <div style="display: flex; justify-content: space-between; color: #666; font-size: 0.9em;">
                        <span>Tác giả: <strong>${blog.author}</strong></span>
                        <span>Lượt xem: 👁️ ${blog.views}</span>
                    </div>
                </div>
        `;
    });

    html += `
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #c82c74; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Trở về Trang chủ</a>
            </div>
        </div>
    `;

    res.send(html);
}

module.exports = {
    getBlogPage
}
