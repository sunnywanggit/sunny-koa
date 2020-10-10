const {HttpException} = require("../core/http-exception")


const catchError = async (ctx,next)=>{
    try{
        await next()
    }catch(error){
        /*
        首先我们需要知道，我们待处理的异常是已知异常还是未知异常
        */
        if(error instanceof HttpException){
            ctx.body = {
                msg:error.msg,
                //这里为了保持接口的兼容，所以我们这里使用下划线
                error_code:error.errorCode,
                request:`${ctx.method} ${ctx.path}`,
            }
            ctx.status = error.code

        }
        //未知异常处理，对于未知的异常，我们是不知道原因的
        else{
            ctx.body = {
                msg:'wo made a mistake ~ (。・＿・。)ﾉI’m sorry~',
                error_code:999,
                request:`${ctx.method} ${ctx.path}`,
            }
            ctx.status = 500


        }
    }
}

module.exports = catchError