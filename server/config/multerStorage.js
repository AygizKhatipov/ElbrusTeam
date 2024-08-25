const multer = require('multer');
const path = require('path');
const uploads = path.join(__dirname, '../uploads')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploads)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})


module.exports = storage