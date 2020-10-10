const Router = require('koa-router')
const router = new Router()
const HttpException = require('../../../core/http-exception')

router.post('/v1/:id/name',(ctx,next)=>{
    //获取 url 里面的参数
    const path = ctx.params
    //获取问号后面的查询参数
    const query = ctx.request.query
    const header = ctx.request.header
    const body = ctx.request.body
    if(true){
        const error = new HttpException('错误信息',10000,400)
        throw error
    }

    ctx.body = 'wangzhen hahah'
})

module.exports = router


