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
router.put("/facilities/:id", facilitieUpdateRest);
router.delete("/facilities/:id", facilitieDeleteRest);

export default router;
