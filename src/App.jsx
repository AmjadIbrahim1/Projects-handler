import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  let [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddProject(project) {
    setProjectsState((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
  }

  function handleCancel() {
    setProjectsState((prev) => ({
      ...prev,
      selectedProject: undefined,
    }));
  }

  function handleDeleteProject(project) {
    setProjectsState((prev) => ({
      selectedProject: undefined,
      projects: prev.projects.filter((p) => p.id !== project.id),
    }));
  }

  function handleOpenNewProject() {
    setProjectsState((prev) => ({
      ...prev,
      selectedProject: null,
    }));
  }

  function handleCancelNew() {
    setProjectsState((prev) => ({
      ...prev,
      selectedProject: undefined,
    }));
  }

  function handleSelectProject(project) {
    setProjectsState((prev) => ({
      ...prev,
      selectedProject: project,
    }));
  }

  let content;
  if (projectsState.selectedProject === undefined) {
    content = <NoProject onEvent={handleOpenNewProject} />;
  } else if (projectsState.selectedProject === null) {
    content = <NewProject onEvent={handleCancelNew} onAdd={handleAddProject} />;
  } else {
    content = (
      <ProjectDetails
        project={projectsState.selectedProject}
        updateProjects={setProjectsState}
        onCancel={handleCancel}
        onDelete={handleDeleteProject}
      />
    );
  }

  return (
    <main className="flex h-screen w-screen">
      <ProjectSidebar
        onEvent={handleOpenNewProject}
        projs={projectsState.projects}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;

