const upload = require('../middleware/multerMiddleware');
const router = require('express').Router();
const { Account } = require('../db/models');




router.put('/upload-avatar', upload.single('avatar'), async(req, res) => {
    try {
        const fileUrl = `/uploads/${req.file.filename}`;
        const { userId } = req.body;
  
        const userUpdate =await  Account.update({ photo: fileUrl }, { where: { idUser: userId } });
        const user = (await Account.findOne({ where: { idUser: userId } })).get();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



module.exports = router