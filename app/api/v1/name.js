const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/name',(ctx,next)=>{
    //获取 url 里面的参数
    const path = ctx.params
    //获取问号后面的查询参数
    const query = ctx.request.query
    const header = ctx.request.header
    const body = ctx.request.body
    if(!query){
        //注意：error.message 并不是通过点的形式传递进去的，而是通过 Error 这个构造函数传递进去的，这是因为 message 是 Node Error 对象的一个参数
        const error = new Error('错误信息')
        //为了符合 JS 的规范，我们这里使用驼峰的形式
        error.errorCode = 10001
        error.status = 400
        error.requestUrl = `${ctx.method} ${ctx.path}`
        throw error
    }

    ctx.body = 'wangzhen hahah'
})

module.exports = router


