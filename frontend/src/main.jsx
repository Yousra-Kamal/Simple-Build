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
import CreateFormPage from "./pages/CreateFormPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "projectForm",
        element: <CreateFormPage />,
      },
      {
        path: "projectPage/:projectId",
        element: <ProjectPage />,
      },
      {
        path: "updateprojectForm/:projectId",
        element: <UpdateProjectForm/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
