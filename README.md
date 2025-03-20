# React Frontend - Prueba técnica

Este proyecto es un frontend desarrollado con **React** y **Material UI**. Se conecta con un backend en **Node.js** y permite realizar autenticación, listar usuarios y crear nuevos usuarios.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- npm (se instala con Node.js)

## 🚀 Instalación y Configuración

1. **Clonar el repositorio**

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd prueba-tecnica-front
   ```

2. **Instalar dependencias**

   ```sh
   npm install
   ```

3. **Configurar variables de entorno**

   - Copia el archivo de ejemplo y renómbralo como `.env`:
     ```sh
     cp .env.example .env
     ```
   - Abre `.env` y define la URL del backend:
     ```sh
     REACT_APP_API_URL=http://localhost:5005
     ```

4. **Iniciar la aplicación**
   ```sh
   npm start
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Inicio de sesión** con credenciales predefinidas.
- **Listado de usuarios** obtenidos desde el backend.
- **Creación de nuevos usuarios**, enviando los datos al backend.

## Tecnologías Usadas

- React
- Material UI
- Axios
- React Router

---

### Credenciales de Prueba

Para iniciar sesión, usa:

```
Email: admin@test.com
Contraseña: 123456
```

**Nota:** Para que el frontend funcione correctamente, asegúrate de que el backend esté corriendo. Sigue las instrucciones en el README del backend para iniciarlo.

---

## Troubleshooting

Si tienes problemas:

- Asegúrate de que `node_modules` está instalado: `npm install`
- Verifica que el backend esté corriendo en `http://localhost:5005`
- Revisa la consola del navegador para errores en la red (`F12 > Console`)
