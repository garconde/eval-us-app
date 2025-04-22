# 🧪 Evaluador de Usabilidad - Frontend

Este es el cliente web del sistema **Evaluador de Usabilidad**, una herramienta diseñada para evaluar y analizar la usabilidad de aplicaciones de software mediante métricas como eficacia, eficiencia y satisfacción del usuario.

Este proyecto trabaja en conjunto con la API [eval-us-api](https://github.com/garconde/eval-us-api), la cual provee la funcionalidad del backend.

---

## 🚀 Tecnologías utilizadas

| Tecnología             | Descripción                                           |
|------------------------|-------------------------------------------------------|
| **React**              | Librería principal para construir la interfaz de usuario. |
| **Axios**              | Cliente HTTP para comunicación con la API.            |
| **React Router**       | Manejo de rutas y navegación entre vistas.            |
| **JavaScript (ES6+)**  | Lenguaje base del proyecto.                           |
| **HTML5 + CSS3**       | Maquetación y estilos.                                |

---

## ✅ Características

- **Gestión de software**: Agregar, listar y eliminar software para evaluación.
- **Evaluación de usabilidad**: Evaluar eficacia, eficiencia, satisfacción y usabilidad general.
- **Gráficos interactivos**: Visualización de datos mediante gráficos dinámicos.
- **Interfaz responsiva**: Estilos basados en Bootstrap para una experiencia de usuario consistente.
- **Conexión con API**: Interacción con un backend para guardar y recuperar datos.
- **Manejo de errores**: Validaciones y mensajes de error para una mejor experiencia de usuario.

---

## 📦 Requisitos

- **Node.js**: Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde [aquí](https://nodejs.org/).
- **npm**: Viene incluido con Node.js, pero asegúrate de tener la última versión ejecutando `npm install -g npm`.
- **API Backend**: Asegúrate de tener la API [eval-us-api](https://github.com/garconde/eval-us-app.git) corriendo en tu máquina o en un servidor accesible.
- **Conexión a Internet**: Para descargar dependencias y acceder a la API.

---
## ⚙️ Instalación y ejecución

1. **Clona este repositorio:**

```bash
git clone https://github.com/garconde/eval-us-app.git
cd eval-us-app
```
2. **Instala las dependencias:**

```bash
npm install
```
3. **Configura la URL del servidor en `src/config.js`:**

```js
export const serverURL = "http://localhost:5000";
```
4. **Inicia la aplicación:**

```bash
npm start
```

Esto abrirá la aplicación en http://localhost:3000/ por defecto.

## 🔗 Repositorio relacionado

Este frontend se comunica con la API:

📦 **eval-us-api**  
🔗 [https://github.com/garconde/eval-us-api](https://github.com/garconde/eval-us-api)

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.  
Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## ✍️ Autor

**David Garcés Conde**  
GitHub: [@garconde](https://github.com/garconde)
