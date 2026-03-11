const getPartnerPage = (req, res) => {
    // Thông tin các đối tác cung cấp hoa
    const partners = [
        { name: 'Đà Lạt Hasfarm', type: 'Hoa cành tươi', since: 2020 },
        { name: 'Sukiha Garden', type: 'Hoa Lan Hồ Điệp', since: 2022 },
        { name: 'Hoa Nhập Khẩu Hà Lan', type: 'Hoa Tulip, Hồng Eucador', since: 2024 }
    ];

    let html = `
        <div style="font-family: Arial; padding: 20px;">
            <h1 style="color: #be457c;">Đối Tác Cung Cấp Hoa</h1>
            <p>Chúng tôi tự hào vô cùng vì được hợp tác với các nhà cung cấp uy tín:</p>
            <table border="1" cellpadding="10" style="border-collapse: collapse; width: 60%; margin-top: 15px;">
                <tr style="background-color: #f2d9ef;">
                    <th>Tên Đối Tác</th><th>Loại Hoa Cung Cấp</th><th>Hợp tác từ năm</th>
                </tr>
    `;

    partners.forEach(p => {
        html += `<tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.type}</td>
            <td style="text-align: center;">${p.since}</td>
        </tr>`;
    });

    html += `
            </table>
            <br>
            <a href="/" style="color: #440522; text-decoration: none;">&larr; Trở về Trang chủ</a>
        </div>
    `;

    res.send(html);
}

module.exports = {
    getPartnerPage
}
