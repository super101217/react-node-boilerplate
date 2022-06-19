import express from "express";

import { authController } from "../../controllers";

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/me", authController.me);

export default router;
