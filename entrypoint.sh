#!/bin/sh

# Generar archivo de variables para el frontend
cat <<EOF > /usr/share/nginx/html/env-config.js
window.__ENV__ = {
  VITE_API_URL: "${API_URL}",
  VITE_API_KEY: "${API_KEY}"
};
EOF

# Ejecutar el comando original (Nginx)
exec "$@"
