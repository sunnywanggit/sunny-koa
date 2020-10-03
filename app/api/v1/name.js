const Router = require('koa-router')
const router = new Router()

router.get('/v1/name',(ctx,next)=>{
    ctx.body = 'wangzhen hahah'
})

module.exports = router


