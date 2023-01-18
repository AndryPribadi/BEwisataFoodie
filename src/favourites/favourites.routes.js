import { Router } from "express";
import {
  favouritCreateRest,
  favouritDeleteRest,
  favouritGetByIDRest,
  favouritUpdateRest,
} from "./favourites.controller.js";

const router = Router();

router.post("/favourites", favouritCreateRest);
router.get("/favourites", favouritGetByIDRest);
router.put("/favourites/:id", favouritUpdateRest);
router.delete("/favourites/:id", favouritDeleteRest);

export default router;
