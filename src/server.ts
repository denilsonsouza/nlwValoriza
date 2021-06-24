import "reflect-metadata";
import express , {Request, Response, NextFunction, response} from "express";
import "express-async-errors"
import { router } from "./routers";
import "./database"
import {errorHandle} from "./middlewares/errorHandle"
const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandle)

app.listen(3000, () => { console.log("Server running NLW..."); });