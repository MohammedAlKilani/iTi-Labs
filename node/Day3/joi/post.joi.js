import Joi from 'joi';
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi,"userID not Objectid")

export default Joi.object({
    title:Joi.string(),
    content:Joi.string() ,
     userID : Joi.objectId()

})