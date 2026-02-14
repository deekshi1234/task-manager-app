import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import validator from "../middlewares/validator.js";
import {
  createUserSchema,
  updateUserSchema,
} from "../validators/userValidator.js";

const router = express.Router();

router.post("/", validator(createUserSchema), createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", validator(updateUserSchema), updateUser);
router.delete("/:id", deleteUser);

export default router;
