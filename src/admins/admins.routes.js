import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  adminCreateRest,
  adminDeleteRest,
  adminGetByIDRest,
  adminUpdateRest,
} from "./admins.controller.js";

const router = Router();

router.post("/admins", verifyToken, adminCreateRest);
router.get("/admins", verifyToken, adminGetByIDRest);
router.put("/admins/:id", adminUpdateRest);
router.delete("/admins/:id", adminDeleteRest);

export default router;
