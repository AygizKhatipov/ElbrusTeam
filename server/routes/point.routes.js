const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { Point } = require("../db/models");

router.get("/", async (req, res) => {


  try {
    const pointsAll = await Point.findAll();
    res.status(200).json(pointsAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/",verifyAccessToken, async (req, res) => {

    const user = res.locals.user
  const { point } = req.body;

  try {
    const pointCreate = await Point.create({point, userId:user.id } );
   

    res.status(200).json(pointCreate.dataValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.route("/:id")
.put(async(req, res)=>{
    try {
        const {id} =req.params
        const {point, userId}= req.body
        const baseUpdate = await Point.update({point, userId}, {where:{id}})

        res.status(201).json(baseUpdate)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.delete("/:pointId", verifyAccessToken,async (req, res) => {
  try {
    const { pointId } = req.params;
    const user = res.locals.user

    const deleteStatus = await Point.destroy({ where: { pointId, userId: user.pointId } });

    deleteStatus ? res.sendStatus(200) : res.sendStatus(404);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
