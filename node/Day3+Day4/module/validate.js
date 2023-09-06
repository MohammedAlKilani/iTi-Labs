import tryCatchErr from "./tryCatchErr.js"

export  function validBody(scheam){
return tryCatchErr(async (req,res,next)=>{
    
    const valid =   await scheam.validateAsync(req.body,{
        abortEarly:false
    })
    if(valid){
        next()
    }
    
})
}
export  function validparams(scheam){
return tryCatchErr(async (req,res,next)=>{
    
    const valid =   await scheam.validateAsync(req.params,{
        abortEarly:false
    })
    if(valid){
        next()
    }
    
})
}
