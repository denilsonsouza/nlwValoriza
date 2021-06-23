import "reflect-metadata";
import express , {Request, Response, NextFunction, response} from "express";
import "express-async-errors"
import { router } from "./routers";
import "./database"

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
  if(err instanceof Error){
    return resp.status(400).json({
      error: err.message
    })
  }

  return resp.status(500).json({
    status: "Error",
    message: "Internal server error!"
  })
});

app.listen(3000, () => { console.log("Server running NLW..."); });