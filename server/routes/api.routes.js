const router = require('express').Router()
const tokensRouter = require('./tokens.routes');
const authRouter= require('./auth.routes')
const rolesRouter= require('./roles.routes')
const uploadsRouter= require('./uploads.routes')

const usersRouter= require('./user.routes')
const accountsRouter= require('./account.routes')

router.use('/accounts', accountsRouter);
router.use('/roles', rolesRouter);
router.use('/users', usersRouter);
router.use('/upload', uploadsRouter)

router.use('/auth', authRouter)
router.use('/tokens', tokensRouter);









module.exports = router