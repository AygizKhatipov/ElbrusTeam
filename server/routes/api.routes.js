const router = require('express').Router()
const tokensRouter = require('./tokens.routes');
const authRouter= require('./auth.routes')





router.use('/auth', authRouter)
router.use('/tokens', tokensRouter);









module.exports = router