import express from "express";
import "dotenv/config";

// 1. Khởi tạo ứng dụng Express
const app = express();

// 2. Cấu hình Middleware
app.use(express.json());

// 3. Tạo API kiểm tra trạng thái server
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "English Learning Hub API is running!"
  });
});

// 4. API danh sách khóa học mẫu
app.get("/api/courses", (req, res) => {
  const courses = [
    {
      id: 1,
      title: "English Foundation",
      level: "A1"
    },
    {
      id: 2,
      title: "Elementary English",
      level: "A2"
    }
  ];

  res.status(200).json({
    success: true,
    data: courses
  });
});

// 5. Khởi động server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});