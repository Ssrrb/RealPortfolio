# Portfolio Project

## Description

This project is a personal portfolio website built with Next.js, Three.js, and Tailwind CSS. It showcases my skills, projects, and experience as a software engineer.

## Technologies Used

-   Next.js
-   Three.js
-   Tailwind CSS
-   React
-   @react-three/fiber
-   @react-three/drei

## Getting Started

1.  Clone the repository:

    ```bash
    # Git is not available
    # git clone <repository-url>
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Build and Deployment

1.  Build the application:

    ```bash
    npm run build
    ```

2.  Start the production server:

    ```bash
    npm run start
    ```

## Project Structure

-   `app/`: Contains the Next.js application pages and components.
-   `components/`: Reusable React components.
-   `public/`: Static assets such as images and fonts.
-   `styles/`: Global CSS styles.
-   `lib/`: Utility functions.

## Contact

For questions or feedback, please contact me at [sirsebastianrojas@gmail.com](mailto:sirsebastianrojas@gmail.com).

## 🚀 Cómo Actualizar el Portfolio

Sigue estos pasos para actualizar y desplegar tu portfolio en Google Cloud:

### 1️⃣ Construir el Contenedor Localmente
Ejecuta el siguiente comando en la raíz del proyecto para construir la imagen Docker:
```sh
docker build -t my-next-app .

gcloud auth login

gcloud config set project "portfolio-448819"

gcloud builds submit --region=us-central1 --tag us-central1-docker.pkg.dev/portfolio-448819/my-repo/portfolio-fixed-beta:tag1
