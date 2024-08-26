const multer = require('multer');
const storage = require('../config/multerStorage')
const path = require('path')


const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

  
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  };


const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 * 4  }, 
    fileFilter: fileFilter
  });





  module.exports = upload