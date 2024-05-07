/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import UpdateProjectPage from "./pages/UpdateProjectPage.jsx";
import CreateProjectPage from "./pages/CreateProjectPage.jsx";
import AllProjects from "./pages/AllProjects.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import { CheckoutForm, Return } from "./pages/StripePage.jsx";
import StripePage from "./pages/StripePage.jsx";
import Test from "./pages/Test.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<NotFoundPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="/stripe" element={<StripePage />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/return" element={<Return />} />
      <Route path="/test" element={<Test />} />


      <Route element={<ProtectedRoute />}>
        <Route path="projects" element={<AllProjects />} />
        <Route path="projectPage/:projectId" element={<ProjectPage />} />
        <Route
          path="updateprojectForm/:projectId"
          element={<UpdateProjectPage />}
        />
        <Route path="projectForm" element={<CreateProjectPage />} />
        <Route path="services" element={<ServicePage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
