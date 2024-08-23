const router = require('express').Router()
const tokensRouter = require('./tokens.routes');
const authRouter= require('./auth.routes')
const rolesRouter= require('./roles.routes')



router.use('/roles', rolesRouter);

router.use('/auth', authRouter)
router.use('/tokens', tokensRouter);









module.exports = router