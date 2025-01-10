# Usa una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . ./

# Crea el directorio de salida para la compilación
RUN mkdir -p dist

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto que usa tu aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
