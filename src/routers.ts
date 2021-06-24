import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import {AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentController} from "./controllers/CreateComplimentController"
const router = Router();

const createUsersController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users",createUsersController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);
export { router };