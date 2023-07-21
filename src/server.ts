import express, { Request, Response, NextFunction, Application } from "express";
import { Server } from "http";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello");
});

const server: Server = app.listen(5000, () => console.log("run at 5000"));
