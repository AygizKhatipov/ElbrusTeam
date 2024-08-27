const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const {  DataBase} = require("../db/models");

router.get("/",  async (req, res) => {


  try {
    const databasesAll = await DataBase.findAll();
    res.status(200).json(databasesAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/", async (req, res) => {
  const { title, description, article, pic } = req.body;

  try {
    const roleCreate = await DataBase.create({title, description, article, pic  } );
   

    res.status(200).json(roleCreate.dataValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = res.locals.user

    const deleteStatus = await DataBase.destroy({ where: {  userId: user.id } });

    deleteStatus ? res.sendStatus(200) : res.sendStatus(404);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
router.route("/:id")
.put(async(req, res)=>{
    try {
        const {id} =req.params
        const {title, description, pic}= req.body
        const baseUpdate = await DataBase.update({title, description, article, pic}, {where:{id}})

        res.status(201).json(baseUpdate)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router;
