import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  restaurantCreateRest,
  restaurantDeleteRest,
  restaurantGetByIDRest,
  restaurantUpdateRest,
} from "./restaurants.controller.js";

const router = Router();

router.post("/restaurants", verifyToken, restaurantCreateRest);
router.get("/restaurants", verifyToken, restaurantGetByIDRest);
router.put("/restaurants/:id", restaurantUpdateRest);
router.delete("/restaurants/:id", restaurantDeleteRest);

export default router;
