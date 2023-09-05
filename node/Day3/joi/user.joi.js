import Joi from 'joi';



export default Joi.object({
    userName:Joi.string(),
    email:Joi.string().email().required() ,
     password :Joi.string(),
    age:Number,
    gender:Joi.string().valid(...["male","female"]),
     phone:Joi.string().length(11).pattern(/^0(10|11|12|15)\d{8}$/)

})