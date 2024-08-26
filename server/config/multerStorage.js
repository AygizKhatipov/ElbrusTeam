const multer = require('multer');
const path = require('path');
const uploads = path.join(__dirname, '../uploads')

console.log(555)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploads)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
console.log(666)

module.exports = storage