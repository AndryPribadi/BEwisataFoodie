import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  userCreateRest,
  userDeleteRest,
  userGetByIDRest,
  userUpdateRest,
} from "./users.controller.js";

const router = Router();

router.post("/users", verifyToken, userCreateRest);
router.get("/users", verifyToken, userGetByIDRest);
router.put("/users/:id", userUpdateRest);
router.delete("/user/:id", userDeleteRest);

export default router;
