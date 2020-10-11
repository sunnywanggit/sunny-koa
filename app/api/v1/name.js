const Router = require('koa-router')
const router = new Router()
const {HttpException,ParameterException} = require('../../../core/http-exception')
const {PositiveIntegerValidator} = require('../../validators/validator')

router.post('/v1/:id/name',(ctx,next)=>{
    //获取 url 里面的参数
    const path = ctx.params
    //获取问号后面的查询参数
    const query = ctx.request.query
    const header = ctx.request.header
    const body = ctx.request.body

    const v = new PositiveIntegerValidator().validate(ctx)

    ctx.body = 'success'
})

module.exports = router


