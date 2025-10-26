import React, { useRef, useState } from "react";
import Input from "./Input";
import Invalid from "./Invalid";
import isValidDate from "../Validation/Date";
export default function ProjectDetails({
  project,
  updateProjects,
  onCancel,
  onDelete,
}) {
  let title = useRef();
  let description = useRef();
  let dueDate = useRef();
  let [error, setError] = useState(false);

  function handleValid() {
    setError(false);
  }

  function handleSave() {
    const updatedProject = {
      ...project,
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    if (!isValidDate(updatedProject.dueDate)) {
      setError(true);
      return;
    }

    const formattedDate = new Date(
      updatedProject.dueDate.split("-").reverse().join("-")
    );

    if (
      !updatedProject.title ||
      !updatedProject.description ||
      !updatedProject.dueDate ||
      formattedDate < new Date() ||
      updatedProject.title.length < 5 ||
      updatedProject.description.length < 10
    ) {
      setError(true);
      return;
    }

    updateProjects((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.id === project.id ? updatedProject : p
      ),
      selectedProject: updatedProject,
    }));
  }

  if (error) return <Invalid valid={handleValid} />;

  return (
    <div className="flex-1 bg-gray-950 text-white p-10 flex flex-col items-center overflow-auto">
      <div className="w-full max-w-xl flex flex-col gap-6">
        <Input ref={title} label="Title" defaultValue={project.title} />
        <Input
          ref={description}
          label="Description"
          textarea
          defaultValue={project.description}
        />
        <Input ref={dueDate} label="Due Date" defaultValue={project.dueDate} />
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition"
        >
          Save Changes
        </button>

        <button
          onClick={onCancel}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-800 rounded-md transition"
        >
          Cancel
        </button>

        <button
          onClick={() => onDelete(project)}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
