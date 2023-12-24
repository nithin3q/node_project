const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5700;

app.use(cors());

const filter = (req, file, cb) => {
  const allowedtypes = ["image/jpg", "image/jpeg", "image/png"];
  if (allowedtypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"));
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: filter,
  limits: {
    fileSize: 1 * 1024 * 1024, // 1 MB limit
  },
}).single("avatar");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          res.status(400).json({
            error: "File size is too large",
          });
        } else {
          res.status(400).json({
            error: "Error while uploading",
          });
        }
      } else {
        res.status(400).json({
          error: "Invalid file type. Allowed types: jpg, jpeg, png",
        });
      }
    } else {
      res.json({
        message: "Upload successful",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started at http://127.0.0.1:${port}`);
});
