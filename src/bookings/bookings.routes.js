import { Router } from "express";
import {
  bookingCreateRest,
  bookingDeleteRest,
  bookingGetByIDRest,
  bookingUpdateRest,
} from "./bookings.controller.js";

const router = Router();

router.post("/bookings", bookingCreateRest);
router.get("/bookings", bookingGetByIDRest);
router.put("/bookings/:id", bookingUpdateRest);
router.delete("/bookings/:id", bookingDeleteRest);

export default router;
