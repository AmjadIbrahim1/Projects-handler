import React from "react";
import logo from "../../public/logo.png";

export default function NoProject({ onEvent }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center gap-6 p-8 bg-gray-950 text-white">
      <img src={logo} alt="logo" className="h-16 w-16 opacity-80" />

      <div className="flex flex-col gap-2 max-w-md">
        <p className="text-2xl font-semibold text-gray-200 tracking-wide">
          No projects yet
        </p>

        <p className="text-sm text-gray-400 leading-relaxed">
          Select a project from the sidebar to start working on it or create a
          new one.
        </p>
      </div>

      <button
        onClick={onEvent}
        className="px-5 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 transition shadow-sm"
      >
        Create a new project
      </button>
    </div>
  );
}
