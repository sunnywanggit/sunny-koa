const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager{
    //入口方法
    static initCore(app){
        InitManager.app = app
        //注意：这里是如何调用静态方法的
        InitManager.initLoadRouters()

    }

    static initLoadRouters(){
        requireDirectory(module,'../app/api',{visit:whenLoadModule})

        function whenLoadModule(obj){
            if(obj instanceof Router){
                InitManager.app.use(obj.routes())
            }
        }
    }
}

module.exports = InitManager



