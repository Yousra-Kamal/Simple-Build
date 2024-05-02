import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProjectForm from "./components/CreateProjectForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectPage/:id" element={<ProjectPage />} />
        <Route path="/projectForm" element={<CreateProjectForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
