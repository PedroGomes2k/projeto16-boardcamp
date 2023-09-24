import { Router } from "express";
import { validateCreate } from "../middlewares/games.middlewares.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import {getGames, createGames} from "../controllres/games.controllers.js";


const gamesRouter = Router()

gamesRouter.get("/games", getGames)
gamesRouter.post("/games", validateSchema, validateCreate, createGames)


export default gamesRouter