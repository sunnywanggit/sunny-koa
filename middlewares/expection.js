const catchError = async (ctx,next)=>{
    try{
        await next()
    }catch(error){
        /*
        首先我们需要知道，我们待处理的异常是已知异常还是未知异常
        已知异常的典型特征是它的 error 具有 error_code 这个属性
        */
        if(error.errorCode){
            ctx.body = {
                msg:error.message,
                //这里为了保持接口的兼容，所以我们这里使用下划线
                error_code:error.errorCode,
                request:error.requestUrl,
            }
            ctx.status = error.status

        }
    }
}

module.exports = catchError