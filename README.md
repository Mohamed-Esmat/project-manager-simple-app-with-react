# 📂 React Project Manager

This project is part of my React learning journey, focusing on **state management, component reusability, form validation, and UI styling with Tailwind CSS**. It enhances my understanding of managing user interactions, component communication, and dynamic UI updates. This project is part of the **"React - The Complete Guide 2025 (incl. Next.js, Redux)"** by **Maximilian Schwarzmüller**.

## ✨ Features
- 🏗 **Projects Sidebar Component**: A dedicated sidebar for managing projects.
- 🎨 **Tailwind CSS Styling**: Styled components with Tailwind for a sleek UI.
- 📝 **New Project & Reusable Input Component**: Efficient form handling.
- 🧩 **Splitting Components**: Ensuring modularity for better maintainability.
- 🔄 **Managing State**: Dynamically switching between components.
- 📥 **Collecting User Input**: Using Refs & Forwarded Refs for efficient input handling.
- ✅ **Project Creation & UI Updates**: Seamless project addition with state updates.
- ⚠️ **Validating User Input**: Displaying error messages via `useImperativeHandle`.
- 🪟 **Error Modal**: Styled and managed using Tailwind CSS.
- ❌ **Handling Project Deletion**: Allowing easy project removal.
- ✅ **Project Tasks & Task Component**: Organizing and managing project tasks.
- 🔗 **Prop Drilling**: Understanding how to pass data between components.
- 🧹 **Clearing Tasks & Bug Fixes**: Optimizing functionality and UI.

## 📁 Project Structure
```
src/
│── components/
│   ├── Button.jsx             # 🖱️ Reusable button component
│   ├── Input.jsx              # 🔤 Reusable input field component
│   ├── Modal.jsx              # 🪟 Modal component for error handling
│   ├── NewProject.jsx         # 📝 Form to create a new project
│   ├── NewTask.jsx            # ✅ Form to add a new task
│   ├── NoProjectSelected.jsx  # 🚫 Placeholder when no project is selected
│   ├── ProjectSidebar.jsx     # 📂 Sidebar for managing projects
│   ├── SelectedProject.jsx    # 📋 Displays selected project details
│   ├── Tasks.jsx              # 📌 Manages tasks within a project
│── App.js                     # 🚀 Main application component
│── index.js                   # 🎯 Entry point
│── index.css                  # 🎨 Global styles
```

## ⚙️ Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/Mohamed-Esmat/project-manager-simple-app-with-react.git
   ```
2. Navigate to the project directory:
   ```sh
   cd project-manager-simple-app-with-react
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## 🌍 Demo
You can view the live demo of the project here:
🔗 [Live Demo](https://project-manager-simple-app-with-react-esmat.vercel.app/)

## 🛠️ Technologies Used
- ⚛️ **React**
- 🎨 **Tailwind CSS**
- 📥 **Refs & useImperativeHandle**
- 🏗 **Component-Based Architecture**

## 🤝 Contribution
Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request. 🚀

## 📜 License
This project is part of the **"React - The Complete Guide 2025 (incl. Next.js, Redux)"** by **Maximilian Schwarzmüller** and follows an MIT License.

