const HttpException = require("../core/http-exception")


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
    }
}

module.exports = catchError