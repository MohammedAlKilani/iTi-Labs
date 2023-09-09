import { Router } from "express";
import userRouter from "./user.routes";

export const routeApp =Router()

routeApp.use("/users",userRouter)
// routeApp.use("/tasks")
  