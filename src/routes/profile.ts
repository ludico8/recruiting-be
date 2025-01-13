import express, { Request, Response } from "express";
import { ProfileRequestBody } from "../types/profile";
import { addProfile } from "../services/dynamodb";

const router = express.Router();

router.post(
  "/profiles",
  async (req: Request<{}, {}, Omit<ProfileRequestBody, "id">>, res: Response): Promise<void> => {
    try {
      const { name, skills, experience } = req.body;

      if (!name || !skills || !experience) {
        res.status(400).json({ message: "All fields are required." });
        return;
      }

      const id = Date.now().toString();
      const profile = { id, name, skills, experience };

      await addProfile(profile);

      res.status(201).json({ message: "Profile added successfully", profile });
    } catch (error) {
      console.error("Error adding profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default router;