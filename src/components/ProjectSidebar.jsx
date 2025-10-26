import React from "react";
import ProjectDetails from "./ProjectDetails";

export default function ProjectSidebar({ onEvent, projs, onSelect }) {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col gap-6 border-r border-gray-800">
      <h2 className="text-xl font-semibold tracking-wide">Projects</h2>

      <button
        onClick={onEvent}
        className="px-3 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-sm font-medium"
      >
        + Add Project
      </button>

      <ul>
        {projs.map((project) => (
          <li
            onClick={() => onSelect(project)}
            key={project.id}
            className="cursor-pointer p-2 rounded hover:bg-gray-800"
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
