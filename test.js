async function func1(){
    try{
        await func2()
    }catch(error){
        console.log('error');
    }
}

function func2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let result = Math.random()
            if(result < 0.5){
                reject('error')
            }
        },1000);
    })
}

func1()

