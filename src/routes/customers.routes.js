import { Router } from "express";
import { getCustomers, getCustomersID, postCustomers, updateCustomers } from "../controllres/customers.controllers";
import { validateCustomers } from "../middlewares/customers.middlewares";
import validateSchemaCustomers from "../middlewares/validateSchema.middleware";

const customersRouter = Router()

customersRouter.get("/customers", getCustomers)
customersRouter.get("/customers/:id", getCustomersID)
customersRouter.post("/customers", validateSchemaCustomers, validateCustomers, postCustomers) 
customersRouter.put("/customers/:id", validateSchemaCustomers,validateCustomers,updateCustomers)



export default customersRouter