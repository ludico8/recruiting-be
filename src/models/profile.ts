export interface Profile {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Datos iniciales para pruebas
export const profiles: Profile[] = [
  { id: "1", name: "John Doe", email: "john.doe@example.com", role: "Developer" },
  { id: "2", name: "Jane Smith", email: "jane.smith@example.com", role: "Designer" },
];
