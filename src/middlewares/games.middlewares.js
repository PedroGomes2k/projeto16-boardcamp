
export async function validateCreate(req, res, next) {
    const { name } = req.body
    try {

        const verify = await db.query(`SELECT * FROM games WHERE name=$1;`, [name])
        if (verify.rowConut !== 0) return res.status(409).send({ message: "Este jogo já existe!" })

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}