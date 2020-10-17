const Router = require('koa-router')

//路有前缀，省略每一次都要写路由前缀
const router = new Router({
    prefix:'/v1/user'
})

const {RegisterValidator} = require('../../validators/validator')

//新增注册功能
router.post('/register',async (ctx)=>{
    const v = await new RegisterValidator().validate(ctx)

})

module.exports = router