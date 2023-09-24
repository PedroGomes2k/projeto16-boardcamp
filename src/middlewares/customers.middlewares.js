export async function validateCustomers(req, res, next) {

    try {
        const { cpf } = req.body
        const { id } = req.params

        const validate = await db.query(`SELECT * FROM costumers WHERE cpf=$1;`, [cpf])

        if (validate.rowCount === 0) return next()

        if (validate.rowCount > 0 && validate.rows[0].id === Number(id)) return next()

        return res.status(409).send({ message: "Este CPF já é ultilizado por outro usário!" })
    } catch (err) {
        res.status(401).send(err.message)
    }


}