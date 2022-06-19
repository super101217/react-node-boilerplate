import express from "express";

import { authController } from "../../controllers";

const router = express.Router();

router.post("/signin", authController.me);
router.post("/signup", authController.signup);
router.post("/me", authController.me);

export default router;
