const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { User, Account, Point } = require("../db/models");

router.get("/", verifyAccessToken, async (req, res) => {
  try {
    const userAll = await User.findAll({
      include: { model: Account, include: { model: Point } },
    });
    res.status(200).json(userAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
