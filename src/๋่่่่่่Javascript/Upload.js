const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

// ตั้งค่าการจัดเก็บไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // กำหนดโฟลเดอร์สำหรับเก็บไฟล์
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // เปลี่ยนชื่อไฟล์
  },
});

// กำหนดขนาดไฟล์สูงสุด 5MB
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// สร้าง API สำหรับรับไฟล์
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "กรุณาอัปโหลดไฟล์" });
  }

  console.log("ไฟล์ที่อัปโหลด:", req.file);
  res.json({ message: "ไฟล์อัปโหลดสำเร็จ", file: req.file });
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
