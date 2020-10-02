const Router = require('koa-router')
const router = new Router()

router.get('/v1/age',(ctx,next)=>{
    ctx.body = '18'
})

module.exports = router