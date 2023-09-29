const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Error: File upload only supports jpeg, jpg, and png.'));
    }
  },
});

router.post('/upload', upload.single('image'), (req, res) => {
  if (req.fileValidationError) {
    return res.status(400).send(req.fileValidationError);
  }
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const imageUrl = `${req.protocol}://${req.get('host')}/api/v1/uploads/${
    req.file.filename
  }`;
  res.status(200).send({ imageUrl });
});

module.exports = router;
