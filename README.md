
# Recruiting App Backend

This is the backend for the Recruiting App, built with **Node.js** and **TypeScript**, using **Express**. It provides API endpoints for the frontend to interact with and is designed to run in a **Docker** container.

---

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js** (v16 or higher recommended) - [Download Node.js](https://nodejs.org/)
- **Docker** - [Download Docker](https://www.docker.com/products/docker-desktop)
- **npm** (comes with Node.js) or **yarn** - [Download Yarn](https://yarnpkg.com/)

---

## Installation and Running with Docker

To run the project using Docker:

1. **Clone the repository**:
   ```bash
   git clone git@github.com:your-username/recruiting-be.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd recruiting-be
   ```

3. **Build the Docker image**:
   ```bash
   docker build -t recruiting-be .
   ```

4. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 recruiting-be
   ```

5. The backend will start on the default port `3000`. You can access the API at:
   ```
   http://localhost:3000
   ```

---

## Development Server (Without Docker)

If you want to run the project locally (without Docker):

1. **Install dependencies**:
   ```bash
   npm install
   ```
   Or, using Yarn:
   ```bash
   yarn install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Or, using Yarn:
   ```bash
   yarn dev
   ```

---

## Build and Run in Production

To create a production build and run it locally:

1. **Build the project**:
   ```bash
   npm run build
   ```
   Or, using Yarn:
   ```bash
   yarn build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

---

## API Endpoints

### Base URL:
```
http://localhost:3000/api
```

### Available Endpoints:

1. **Get all profiles**:
   - `GET /profiles`
   - Response: Returns a list of profiles.

2. **Get a profile by ID**:
   - `GET /profiles/:id`
   - Response: Returns a specific profile.

3. **Create a profile**:
   - `POST /profiles`
   - Body: JSON object containing profile details.

4. **Update a profile**:
   - `PUT /profiles/:id`
   - Body: JSON object with the updated profile details.

5. **Delete a profile**:
   - `DELETE /profiles/:id`
   - Response: Deletes a specific profile.

---

## Environment Variables

This project may require environment variables for configuration. Set them up in a `.env` file at the root of the project.

Example `.env` file:
```plaintext
PORT=3000
API_BASE_URL=http://localhost:3000/api
```

---

## Additional Commands

- **Lint the Code:** To check for and fix coding style issues:
  ```bash
  npm run lint
  ```
- **Format the Code:** If Prettier is configured, you can format the code:
  ```bash
  npm run format
  ```

---

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your changes here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Authors

- **Your Name** - [GitHub Profile](https://github.com/your-username)

---

Feel free to customize this README further with project-specific details! 🚀
