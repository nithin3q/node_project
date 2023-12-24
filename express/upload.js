const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('avatar'), (req, res) => {
    // Check if file is uploaded successfully
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Do something with the uploaded file if needed
    res.json({ message: 'File uploaded successfully' });
});

app.listen(port, () => {
    console.log(`Server started at http://127.0.0.1:${port}`);
});
