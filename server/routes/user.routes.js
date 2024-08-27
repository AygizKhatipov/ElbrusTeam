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
})
.put('/', async (req, res) => {
  try {
    const {firstName, lastName, city, country, phone, email, about, isMember, roleId } = req.body.data
    const {accountId} = req.body
    const [account] = await Account.update({city, country, phone, email, about}, {
      where: { idUser: accountId },
    })
    const [user] = await User.update({firstName, lastName, isMember, roleId }, {
      where: { id: accountId },
    });
    
    if(user && account) {
      const updatingUser = (await User.findOne({
        where: { id: accountId },
        include: { model: Account, include: { model: Point } },
      })).get();
      delete updatingUser["password"];
      res.status(200).json(updatingUser);
    }
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
})


module.exports = router;
