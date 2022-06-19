import express from "express";

import { authenticationMiddleware } from "../../middlewares";

import { authController } from "../../controllers";

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/me", authenticationMiddleware, authController.me);

export default router;
