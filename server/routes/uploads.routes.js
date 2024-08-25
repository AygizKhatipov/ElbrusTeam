const upload = require('../middleware/multerMiddleware');
const router = require('express').Router();
const { User } = require('../db/models');



router.post('/upload-avatar', upload.single('avatar'), (req, res) => {
    try {
        console.log(req)
        
        res.json({ url: `/uploads/${req.file.filename}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



module.exports = router