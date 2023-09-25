import { db } from "../database/database.connection.js";

export async function getCustomers(req, res) {
    try {
        const client = await db.query(`SELECT * FROM customers;`)

        res.sendStatus(client);

    } catch (err) {
        res.status(500).send(err.message)
    }

}

export async function getCustomersID(req, res) {

    const { id } = req.params

    try {
        const customer = await db.query(`SELECT * FROM customers WHERE id=$1;`, [id])
        if (customer.rowCount === 0) return res.status(401).send({ message: "Este usuário não existe!" })
        res.send(customer.rows[0])
    
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postCustomers(req, res) {

    try {
        const { name, phone, cpf, birthday } = req.body

        const newCustomers = await db.query(`
        INSERT INTO customers (name, "phone", "cpf", "birthday")
        VALUES ($1,$2,$3,$4);
        `, [name, phone, cpf, birthday]);

        res.sendStatus(201);

    } catch (err) {
        res.status(409).send(err.message)
    }

}

export async function updateCustomers(req, res) {

    const { id } = req.params
    const { name, phone, cpf, birthday } = req.body

    try {
        await db.query(`
        UPDATE costumers
        SET name=$1, phone=$2, cpf=$3, birthday=$4
        WHERE id=$5;
        `, [name, phone, cpf, birthday, id])
        res.sendStatus(200)

    } catch (err) {
        res.sataus(409).send(err.message)
    }


}