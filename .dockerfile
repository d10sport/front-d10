# Etapa de build
FROM node:18 AS build
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Variables de entorno para React (build-time)
ARG REACT_APP_API_URL
ARG REACT_APP_GOOGLE_ANALYTICS_ID

# Ejecutar build
RUN npm run build

# Etapa de producción con Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

