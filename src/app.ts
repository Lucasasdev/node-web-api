import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/customerRouterPrisma";

const app = express();

app.use(cors());

app.use(morgan("tiny"));

app.use(helmet());

app.use(express.json());

app.use("/user/", userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("Hello, Node!");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});

export default app;
