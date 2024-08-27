const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { Event } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const eventsAll = await Event.findAll();
    res.status(200).json(eventsAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/",verifyAccessToken, async (req, res) => {
  const { date, title, description, pic } = req.body;
  res.locals.user = user;

  try {
    if (
      user.roleId === 1 ||
      user.roleId === 2 ||
      user.roleId === 3 ||
      user.roleId === 6
    ) {
      const eventCreate = await Event.create({ date, title, description, pic });
      res.status(200).json(eventCreate.dataValues);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = res.locals.user;

    const deleteStatus = await Event.destroy({ where: { userId: user.id } });

    deleteStatus ? res.sendStatus(200) : res.sendStatus(404);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.route("/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const { date, title, description, pic } = req.body;
    const eventCreate = await Event.update(
      { date, title, description, pic },
      { where: { id } }
    );

    res.status(201).json(eventCreate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
