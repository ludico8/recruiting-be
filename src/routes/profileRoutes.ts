import { Router } from "express";
import {
  getProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
} from "./../controllers/profileController";

const router: Router = Router();

router.get("/profiles", getProfiles);
router.get("/profiles/:id", getProfileById);
router.post("/profiles", createProfile);
router.put("/profiles/:id", updateProfile);
router.delete("/profiles/:id", deleteProfile);

export default router;
