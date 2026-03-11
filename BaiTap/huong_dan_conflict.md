# Hướng dẫn tạo 2 Conflict cố ý trên Git

Để tạo conflict (xung đột) dễ hiểu nhất mà không làm hỏng code hiện tại, nguyên tắc cơ bản là: **Hai người (hoặc 2 nhánh) cùng sửa vào cùng một dòng của cùng một file, sau đó gộp (merge) lại với nhau.**

Dưới đây là kịch bản chuẩn xác và an toàn nhất để tạo ra 2 conflict tại file `src/routes/web.js`.

### Chuẩn bị
Máy bạn đang ở nhánh `dev` và code đang mới nhất.

### Bước 1: Người B (hoặc đóng giả người B trên Github/thư mục khác) sửa dòng code
Giả sử người B đang ở nhánh `master` (hoặc nhánh của họ) và sửa **dòng số 2** và **dòng số 16** của file `src/routes/web.js`.

1. Người B mở `src/routes/web.js`.
2. Sửa dòng 2 từ: `const router = express.Router();` thành: `const router = express.Router(); // Nguoi B da sua dong nay`
3. Sửa dòng 16 (dòng comment route Home) từ: `// Khai báo route cho người A (Home)` thành: `// Route trang chu (Nguoi B sua)`
4. Người B lưu lại, commit và push lên nhánh `master`.

### Bước 2: Người A (Là bạn, trên nhánh `dev` hiện tại) cũng sửa trùng 2 dòng đó

1. Bạn vẫn đang ở nhánh `dev` trên máy mình.
2. Bạn mở `src/routes/web.js`.
3. Sửa dòng 2 từ: `const router = express.Router();` thành: `const router = express.Router(); /* Bạn (A) thêm comment ở đây */`
4. Sửa dòng 16 từ: `// Khai báo route cho người A (Home)` thành: `// TRANG CHỦ DO A QUẢN LÝ`
5. Bạn lưu file lại.
6. Chạy các lệnh:
   ```bash
   git add .
   git commit -m "Tôi (A) sửa web.js để tạo conflict"
   ```

### Bước 3: Đưa 2 thay đổi đụng độ nhau (Tạo Conflict)

Bây giờ bạn muốn lấy code của Người B (từ nhánh `master`) gộp vào nhánh `dev` của bạn:
```bash
git merge master
# Hoặc nếu lấy trực tiếp từ github: git pull origin master
```

**BÙM! Git sẽ báo lỗi như sau:**
```text
Auto-merging src/routes/web.js
CONFLICT (content): Merge conflict in src/routes/web.js
Automatic merge failed; fix conflicts and then commit the result.
```

### Bước 4: Cách xử lý (Resolve Conflict)

Bây giờ bạn mở file `src/routes/web.js` trong VS Code lên, bạn sẽ thấy 2 chỗ bị lỗi trông giống như thế này:

```javascript
<<<<<<< HEAD
const router = express.Router(); /* Bạn (A) thêm comment ở đây */
=======
const router = express.Router(); // Nguoi B da sua dong nay
>>>>>>> master
```

VS Code sẽ hiện các nút ở trên khối này:
- **Accept Current Change**: Giữ lại code của BẠN (A).
- **Accept Incoming Change**: Giữ lại code của NGƯỜI B.
- **Accept Both Changes**: Giữ cả 2 dòng.
- **Compare Changes**: So sánh.

Bạn chọn cách giải quyết cho cả 2 chỗ bị conflict (ở dòng 2 và dòng 16). Sau khi bấm chọn xong, xóa hết các dấu `<<<<===>>>>` thừa (nếu VS Code chưa tự xóa). Lưu file lại.

### Bước 5: Commit kết quả đã sửa Conflict
```bash
git add src/routes/web.js
git commit -m "Đã giải quyết 2 conflict ở file web.js"
git push origin dev
```

Xong! Thầy giáo sẽ thấy lịch sử bạn có merge và có giải quyết conflict đàng hoàng.
