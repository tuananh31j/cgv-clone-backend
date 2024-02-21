import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';

// Load cấu hình từ .env
config();

// Cấu hình Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const upload = multer({ dest: 'uploads/' }); // Lưu file tạm thời trước khi tải lên Cloudinary

const app = express();
const port = 3000;

// Ruta để tải file lên Cloudinary
app.post('/upload', upload.single('myFile'), (req, res) => {
    if (req.file) {
        // Tải file lên Cloudinary
        cloudinary.uploader.upload(req.file.path, (error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Lỗi khi tải file lên Cloudinary', error });
            }
            return res.json({ message: 'File được tải lên Cloudinary thành công', result });
        });
    } else {
        res.status(400).json({ message: 'Không có file nào được tải lên!' });
    }
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
