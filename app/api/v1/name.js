const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/name',(ctx,next)=>{
    //获取 url 里面的参数
    const path = ctx.params
    //获取问号后面的查询参数
    const query = ctx.request.query
    const header = ctx.request.header
    const body = ctx.request.body
    ctx.body = 'wangzhen hahah'

    //我们在这里抛出一个异常，然后再全局进行监听并抛出错误提示信息
    throw new Error('API Exception')
})

module.exports = router


