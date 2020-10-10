const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager{
    //入口方法
    static initCore(app){
        InitManager.app = app
        //注意：这里是如何调用静态方法的
        InitManager.initLoadRouters()
        //将 HttpException 挂载到全局变量 global
        InitManager.loadHttpException()
    }

    static initLoadRouters(){
        //path config
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module,apiDirectory,{visit:whenLoadModule})

        function whenLoadModule(obj){
            if(obj instanceof Router){
                InitManager.app.use(obj.routes())
            }
        }
    }

    static loadHttpException(){
        const errors = require('../middlewares/expection')
        global.errs = errors

    }
}

module.exports = InitManager



