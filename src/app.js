import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import corsOptions from "../config/corsOptions.js";
import {
  logger,
  errorHandler,
  verifyJWT,
  credentials,
  throw404,
} from "./middleware/index.js";
import {
  authRouter,
  logoutRouter,
  refreshRouter,
  registerRouter,
  rootRouter,
} from "./routes/index.js";
import { employeeRouter, userRouter } from "./routes/api/index.js";

const app = express();

app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", rootRouter);
app.use("/register", registerRouter);
app.use("/auth", authRouter);
app.use("/refresh", refreshRouter);
app.use("/logout", logoutRouter);

app.use(verifyJWT);
app.use("/employees", employeeRouter);
app.use("/users", userRouter);

app.all("*", throw404);
app.use(errorHandler);

export default app;
