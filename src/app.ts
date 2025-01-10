import express, { Application } from 'express';
import routes from './routes';
import cors from 'cors';
import profileRoutes from "./routes/profileRoutes";

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Reemplaza con la URL de tu frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes); // general routes
app.use("/api", profileRoutes); // profile routes

export default app;
