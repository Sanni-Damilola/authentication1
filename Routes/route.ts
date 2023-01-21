import { Router } from "express";
import { getAll, Login, register } from "../UserController/User.controller"

// route

const route = Router()

route.route("/getall").get(getAll)
route.route("/post").post(register);
route.route("/login").post(Login);

export default route