import { Router } from "express";
import { getCustomers, getCustomersID, postCustomers, updateCustomers } from "../controllres/customers.controllers.js";
import { validateCustomers } from "../middlewares/customers.middlewares.js";
import validateSchemaCustomers from "../middlewares/validateSchema.middleware.js";

const customersRouter = Router()

customersRouter.get("/customers", getCustomers)
customersRouter.get("/customers/:id", getCustomersID)
customersRouter.post("/customers", validateSchemaCustomers, validateCustomers, postCustomers) 
customersRouter.put("/customers/:id", validateSchemaCustomers,validateCustomers,updateCustomers)



export default customersRouter