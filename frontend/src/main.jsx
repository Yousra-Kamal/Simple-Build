import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GridBackground from "./components/ui/GridBackgroun.jsx";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import UpdateProjectForm from "./components/UpdateProjectForm.jsx";
import UpdateProjectPage from "./pages/UpdateProjectPage.jsx";
import CreateProjectPage from "./pages/CreateProjectPage.jsx";
import AllProjects from "./pages/AllProjects.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      {path: "signup", element: <SignupPage/>},
      {path: "login", element: <LoginPage/>},

      {path: "allProjects", element: <AllProjects/>},
      {
        path: "projectPage/:projectId",
        element: <ProjectPage />,
      },
      {
        path: "projectForm",
        element: <CreateProjectPage />,
      },
      {
        path: "updateprojectForm/:projectId",
        element: <UpdateProjectPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
