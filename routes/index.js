const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/upload', upload.single('file'), (req, res, next) => {
  res.json({ size: req.file.size });
});

module.exports = router;
