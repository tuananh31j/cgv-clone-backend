import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { config } from 'dotenv';

config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadSingleToCloudinary = (file: Express.Multer.File): Promise<{ url: string; publicId: string }> => {
    return new Promise((resolve, reject) => {
        const filePath = file.path; // Lấy đường dẫn file
        cloudinary.uploader
            .upload(filePath, {
                // Sử dụng đường dẫn file ở đây
                folder: 'single',
            })
            .then((result) => {
                fs.unlinkSync(filePath); // Xóa file tạm sau khi tải lên
                resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default uploadSingleToCloudinary;
