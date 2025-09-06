# Etapa de build
FROM node:18 AS build
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar todo y ejecutar build
COPY . .
RUN npm run build

# Etapa de producción con Nginx
FROM nginx:alpine

# Copiar archivos compilados al servidor web
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar script de arranque para generar env-config.js
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

# Usar el entrypoint que genera env-config.js y luego arranca Nginx
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
