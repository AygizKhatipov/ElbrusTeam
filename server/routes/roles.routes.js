const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { Role } = require("../db/models");

router.get("/", async (req, res) => {


  try {
    const rolesAll = await Role.findAll();
    res.status(200).json(rolesAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/",verifyAccessToken, async (req, res) => {
  const { role } = req.body;

  try {
    const roleCreate = await Role.create({role } );
   

    res.status(200).json(roleCreate.dataValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:roleId", verifyAccessToken,async (req, res) => {
  try {
    const { roleId } = req.params;
    const user = res.locals.user

    const deleteStatus = await Role.destroy({ where: { roleId, userId: user.roleId } });

    deleteStatus ? res.sendStatus(200) : res.sendStatus(404);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
