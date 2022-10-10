import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import "reflect-metadata";
import { routes } from "./presentation/routes/Vacancy.routes";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server UP and Running !!!"));
