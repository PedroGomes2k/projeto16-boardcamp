import { gameSchema } from "../schemas/game.schema.js";
import { customerSchema } from "../schemas/customers.schema.js";

export default function validateSchemaGame(req, res, next) {
    const validate = gameSchema.validate(req.body, { abortEarly: false })

    if (validate.error) {
        const erros = validate.error.details.map(d => d.message)
        return res.status(400).send(erros)
    }
    next()
}

export default function validateSchemaCustomers(req, res, next) {
    const validate = customerSchema.validate(req.body, { abortEarly: false })

    if (validate.error) {
        const erros = validate.error.details.map(d => d.message)
        return res.status(400).send(erros)
    }
    next()
}