import JoiBase from "joi";  
import JoiDate from "@joi/date"

const Joi = JoiBase.extend(JoiDate)

export const customerSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.number().min(10).max(11).required(),
    cpf: Joi.number().integer().min(11).max(11).required(),
    birthday: Joi.date().format(['YYYY-MM-DD']).required()
})