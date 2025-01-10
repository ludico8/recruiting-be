import { Request, Response } from "express";
import { profiles, Profile } from "./../models/profile";

// Obtener todos los perfiles
export const getProfiles = (req: Request, res: Response): void => {
  res.json(profiles);
};

// Obtener un perfil por ID
export const getProfileById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }

  res.json(profile);
};

// Crear un nuevo perfil
export const createProfile = (req: Request, res: Response) => {
  const newProfile: Profile = { id: Date.now().toString(), ...req.body };
  profiles.push(newProfile);
  res.status(201).json(newProfile);
};

// Actualizar un perfil existente
export const updateProfile = (
  req: Request<{ id: string }, {}, Partial<Profile>>, // Tipos específicos para params y body
  res: Response
): void => {
  const { id } = req.params;

  const index = profiles.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Profile not found" });
    return; // Retorno explícito para evitar `undefined`
  }

  profiles[index] = { ...profiles[index], ...req.body };
  res.json(profiles[index]);
};

// Eliminar un perfil
export const deleteProfile = (
  req: Request<{ id: string }>, // Tipado para params
  res: Response
): void => {
  const { id } = req.params; // Obtiene el ID de los parámetros

  // Encuentra el índice del perfil
  const index = profiles.findIndex((p) => p.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }

  // Elimina el perfil
  const [deletedProfile] = profiles.splice(index, 1); // Elimina y obtiene el perfil eliminado

  // Devuelve el perfil eliminado
  res.json(deletedProfile);
};