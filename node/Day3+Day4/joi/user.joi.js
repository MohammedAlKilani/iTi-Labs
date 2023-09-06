import Joi from 'joi';
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi,"userID not Objectid ")


export default Joi.object({
    userName:Joi.string(),
    email:Joi.string().email().required() ,
     password :Joi.string().required().pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
    age:Joi.number(),
    gender:Joi.string().valid(...["male","female"]),
     phone:Joi.string().length(11).pattern(/^0(10|11|12|15)\d{8}$/)

})

export const userIdJoiSchema  = Joi.object(
    {
        id:Joi.objectId()
    }
)

export const userSineinSchema = Joi.object({
    email:Joi.string().email().required() ,
     password :Joi.string().required().pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
})