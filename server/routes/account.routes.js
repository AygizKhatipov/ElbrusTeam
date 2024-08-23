const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { Account } = require("../db/models");

router.get("/", verifyAccessToken, async (req, res) => {
  
    try {
      const accountAll = await Account.findAll( );
      res.status(200).json(accountAll);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
router.get("/:id", verifyAccessToken, async (req, res) => {
  const { id } = req.params;

  try {
    const accountOne = await Account.findOne({ where: { id} });
    res.status(200).json(accountOne);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/:id",verifyAccessToken, async (req, res) => {
    const { id } = req.params;
  const {idUser, photo, country, city, phone, about } = req.body;
  
  try {
    const accountCreate = await Account.create({idUser:id, photo, country, city, phone, about } );
   

    res.status(200).json(accountCreate.dataValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.put("/:id", verifyAccessToken, async (req, res) => {
    try {
     const { user}  = res.locals.user 
      const {  idUser, photo, country, city, phone, about }  =
        req.body;
      const { id } = req.params;
  
      const [updateStatus] = await Account.update(
          { idUser, photo, country, city, phone, about } ,
        { where: { id, idUser } }
      );
  
      updateStatus ? res.sendStatus(200) : res.sendStatus(404);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
router.delete("/:id", verifyAccessToken,async (req, res) => {

  try {
    const { id } = req.params;
    const user = res.locals.user

    const deleteStatus = await Account.destroy({ where: { id, idUser: user.id } });

    deleteStatus ? res.sendStatus(200) : res.sendStatus(404);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
