const router = require('express').Router()
const tokensRouter = require('./tokens.routes');
const authRouter= require('./auth.routes')
const rolesRouter= require('./roles.routes')
const uploadsRouter= require('./uploads.routes')
const communityRouter= require('./community.routes')
const basedatesRouter= require('./base.routes')

const chatRouter= require('./chat.routes')

const eventsRouter= require('./events.routes')
const pointsRouter= require('./point.routes')



const usersRouter= require('./user.routes')
const accountsRouter= require('./account.routes')

router.use('/accounts', accountsRouter);
router.use('/points', pointsRouter);
router.use('/roles', rolesRouter);
router.use('/users', usersRouter);
router.use('/upload', uploadsRouter)
router.use('/community', communityRouter);
router.use('/basedates', basedatesRouter);
router.use('/chat',chatRouter )
router.use('/events', eventsRouter)

router.use('/auth', authRouter)
router.use('/tokens', tokensRouter);









module.exports = router