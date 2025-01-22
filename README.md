# Clon de Filmin

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Objetivos del Proyecto](#objetivos-del-proyecto)
- [Alcance del MVP](#alcance-del-mvp)
- [Equipo](#equipo)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Historias de Usuario](#historias-de-usuario)
- [Deployment](#deployment)
- [Instrucciones de Uso del Repositorio](#instrucciones-de-uso-del-repositorio)
- [Enlaces a Documentos del Proyecto](#enlaces-a-documentos-del-proyecto)



## Descripción del Proyecto

Este proyecto tiene como objetivo crear una réplica funcional de la plataforma de streaming Filmin utilizando React. Filmin es conocida por su catálogo de cine de autor, independiente y comercial. Nuestro enfoque es recrear la experiencia de usuario y diseño de la plataforma original en un MVP (Producto Mínimo Viable).

## Objetivos del Proyecto

1. Diseñar y desarrollar con React.
2. Ofrecer funcionalidades clave como:
   - Catálogo de películas/series.
   - Carrusel principal dinámico.
   - Diseño atractivo e intuitivo prototipado en Figma.
3. Publicar la aplicación en línea para su presentación.

## Alcance del MVP

El MVP incluye:

- **Navbar**:
  - Logo que redirige a la página principal.
  - Acceso a las páginas de "Cine" y "Series" (en construcción).
- **Página Principal**:
  - Carrusel principal con 6 imágenes de películas/series y sus títulos.
  - 10 sliders de categorías, cada uno con 10 películas/series y sus títulos.
- **Footer**:
  - Mensaje de copyright: `@copyright creado por StreamTeam`.
  - Nombres de los integrantes del equipo con enlaces a sus respectivos repositorios.

## Equipo

**StreamTeam**

- **Celia**: Product Owner- Developer
- **Alejandro**: Scrum Master- Developer
- **Carlota**: Developer
- **Lidia**: Developer
- **Eva**: Developer
- **Jose**: Developer

## Tecnologías Utilizadas

- **Framework Principal**: React
- **Diseño**: Figma
- **Publicación**: GitHub Pages
- **API de Datos**: [The Movie Database API (TMDb)](https://developer.themoviedb.org/docs/getting-started).
- **Informe de Tareas**: Jira
- **Diagrama de Flujo**: draw.io
- **Controlador de versiones**: Git
- **Editor de código**: VSCode

## Proceso de Desarrollo

1. **Preparación**:
   - Análisis inicial de Filmin para identificar funcionalidades clave.
   - Diseño UI/UX en Figma.
   - Organización del equipo y tareas mediante un tablero en Jira.

2. **Desarrollo Ágil**:
   - Creación historias de usuario.
   - Diseño en Figma antes de implementar cada historia.
   - Validación cada funcionalidad antes de los avances en la página.

## Historias de Usuario

 Las historias de Usuario están disponibles en el prototipo de Figma junto con los test de aceptación:
- [Historias de Usuario](https://www.figma.com/design/zunfDm7xntU8RLjY9yoIYS/Proyecto-filming?node-id=155-41&t=yPGwgLMwXFtUkj0n-1)

## Deployment

- [GitHub Pages]()

## Instrucciones de Uso del Repositorio

### 1. Clonar el repositorio

Para obtener una copia local de este proyecto, sigue estos pasos:

1. Abre tu terminal o línea de comandos.
2. Navega al directorio donde deseas guardar el proyecto.
3. Ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone "https://github.com/AlejandroAriasSL/filminClon.git"
   ```

4. Ingresa al directorio del proyecto clonado:

   ```bash
   cd filminClon
   ```

### 2. Instalar dependencias

Antes de correr el proyecto, asegúrate de instalar las dependencias necesarias. Para ello, asegúrate de tener [Node.js](https://nodejs.org) instalado en tu máquina.

1. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

### 3. Ejecutar la aplicación en modo desarrollo

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

1. Ejecuta el siguiente comando:

   ```bash
   npm run dev
   ```

2. Abre tu navegador y visita la URL indicada en la consola (normalmente es `http://localhost:5173`).

### 4. Ejecutar las pruebas

El proyecto usa [Vitest](https://vitest.dev/) para ejecutar pruebas. Para correrlas:

1. Ejecuta el siguiente comando:

   ```bash
   npm run test
   ```

   Esto ejecutará todas las pruebas y mostrará los resultados en la consola.

## 5. Problemas comunes y solución

- **Error: `command not found: npm`**  

  Asegúrate de tener instalado Node.js y NPM. Puedes descargarlo desde [https://nodejs.org](https://nodejs.org).

---

¡Ahora estás listo para trabajar con este proyecto! 


## Enlaces a Documentos del Proyecto

### Informe de tareas

- [Jira](https://carlotaml21.atlassian.net/jira/core/projects/PF/board?atlOrigin=eyJpIjoiNDllMzRkMGMwOTY3NDM4NWE2NTMzYTEyNzc2YTUzNjMiLCJwIjoiaiJ9)

### FlowChart

- [FlowChart](https://drive.google.com/file/d/1JdhMyGPiL8UDQ9zPyZhKbffSjm_tjCDv/view?usp=sharing)

### Prototipo (MVP)

- [Prototipo en Figma](https://www.figma.com/design/zunfDm7xntU8RLjY9yoIYS/Proyecto-filming?node-id=155-41&t=yPGwgLMwXFtUkj0n-1)

### API

- [The Movie Database API](https://developer.themoviedb.org/docs/getting-started)

---

© 2025 StreamTeam