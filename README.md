# React Application - Star Wars project

This project was created to explore and become familiar with new technologies, that are used in this application. Please note that there are different versions of the project depending on the selected branch, each showcasing specific features, configurations, or improvements in the technology stack. This allows for a better understanding of how different tools and techniques can be applied in a modern development environment.

The latest version of the application is available on the app-state-management branch. The app displays cards featuring characters from the Star Wars movies, fetched from the SWAPI API. Users can search for characters by name, view detailed information about each character, and navigate through the list of characters using pagination. Additionally, users can select multiple characters across different pages and download their information in a CSV format.

This version of the application showcases efficient state management with Redux Toolkit, API integration, and data export functionalities, providing a smooth and interactive user experience.

### Branches:

- **main**: Initial project setup with basic configurations. Added **Prettier**, **ESLint**, and **Husky** for code formatting, linting, and Git hooks management.
- **class-components**: Introduced simple logic using **React Class Components**, showcasing the older class-based component structure in React.
- **hooks-and-routing**: Added custom **React Hooks** and implemented navigation using **React Router** for handling different routes within the application.
- **app-state-management**: Refactored the code to replace class components with **functional components** and implemented global state management using **Redux Toolkit**.
- **forms**: Explored form creation using **React Forms**, gaining knowledge on handling form state, validation, and user input efficiently.

### Key Technologies:

- **React**
- **TypeScript**
- **Redux Toolkit**
- **RTK Query**
- **React Router**
- **Vite**

### Code Quality and Formatting:

- **ESLint** & **TypeScript-ESLint**
- **Prettier**
- **Husky**

### Scripts Overview:

- **dev**: Starts the Vite development server for local development.
- **build**: Compiles the project using TypeScript and creates an optimized production build using Vite.
- **lint**: Runs ESLint to check for code issues and ensures all rules are followed.
- **format:fix**: Uses Prettier to automatically format code.
- **preview**: Starts a local server to preview the production build.
- **prepare**: Sets up Husky for managing pre-commit hooks.

### Installation and Setup

Follow the steps below to clone the repository and run the application locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Tserpilouski/react-rsschool.git
   cd react-rsschool
   ```

2. **Install Dependencies**:
   Ensure that [Node.js](https://nodejs.org/) and npm (Node Package Manager) are installed on your system. Then, run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Run the Application**:
   After installing the dependencies, you can start the development server with:

   ```bash
   npm run dev
   ```
