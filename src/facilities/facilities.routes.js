import { Router } from "express";
import {
  facilitieCreateRest,
  facilitieDeleteRest,
  facilitieGetByIDRest,
  facilitieUpdateRest,
} from "./facilities.controller.js";

const router = Router();

router.post("/facilities", facilitieCreateRest);
router.get("/facilities", facilitieGetByIDRest);
router.put("/facilities", facilitieUpdateRest);
router.delete("/facilities", facilitieDeleteRest);

export default router;
