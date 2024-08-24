const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { User, Account, Point } = require("../db/models");

router
.get("/", async (req, res) => {
  try {
    const userAll = await User.findAll({
      include: { model: Account, include: { model: Point } },
    });
    res.status(200).json(userAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.route("/:id")
.get(async (req, res) => {
  try {
    const user = (await User.findOne({
      where: { id: req.params.id },
      include: { model: Account, include: { model: Point } },
    })).get();
    delete user["password"];

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
