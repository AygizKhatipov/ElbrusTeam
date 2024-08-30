const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { User, Account, Point } = require("../db/models");

router.get("/teachers", async (req, res) => {
  try {
    const userAll = await User.findAll({where: {roleId:4},
      include: { model: Account },
    });
    res.status(200).json(userAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/students", async (req, res) => {
  try {
    const userAll = await User.findAll({where: {roleId:7},
      include: { model: Account },
    });
    res.status(200).json(userAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});router.get("/graduates", async (req, res) => {
  try {
    const userAll = await User.findAll({where: {roleId:5},
      include: { model: Account },
    });
    res.status(200).json(userAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});router.get("/couches", async (req, res) => {
  try {
    const userAll = await User.findAll({where: {roleId:6},
      include: { model: Account },
    });
    res.status(200).json(userAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





module.exports = router;
