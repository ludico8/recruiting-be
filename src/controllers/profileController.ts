import { Request, Response } from "express";
import { profiles, Profile } from "./../models/profile";
import { addProfile } from "../services/dynamodb";
import { ProfileRequestBody } from "../types/profile";

// Get profiles
export const getProfiles = (req: Request, res: Response): void => {
  res.json(profiles);
};

// Find profile
export const getProfileById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }

  res.json(profile);
};

// Create new profile in DynamoDB
export const createProfile = async (
  req: Request<{}, {}, Omit<ProfileRequestBody, "id">>,
  res: Response
): Promise<void> => {
  try {
    const { name, skills, experience } = req.body;

    // Field validation
    if (!name || !skills || !experience) {
      res.status(400).json({ message: "All fields are required." });
      return;
    }

    // Create profile
    const id = Date.now().toString();
    const newProfile = { id, name, skills, experience };

    // Save profile in DynamoDB
    await addProfile(newProfile);

    // Send response
    res.status(201).json({
      message: "Profile added successfully",
      profile: newProfile,
    });
  } catch (error) {
    console.error("Error adding profile:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Update profile
export const updateProfile = (
  req: Request<{ id: string }, {}, Partial<Profile>>,
  res: Response
): void => {
  const { id } = req.params;

  const index = profiles.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }

  profiles[index] = { ...profiles[index], ...req.body };
  res.json(profiles[index]);
};

// Delete profile
export const deleteProfile = (
  req: Request<{ id: string }>,
  res: Response
): void => {
  const { id } = req.params;

  const index = profiles.findIndex((p) => p.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }

  // Delete profile
  const [deletedProfile] = profiles.splice(index, 1);

  // return deleted profile
  res.json(deletedProfile);
};