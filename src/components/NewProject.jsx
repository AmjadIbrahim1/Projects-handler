import React, { useRef, useState } from "react";
import Input from "./Input";
import Invalid from "./Invalid";
import  isValidDate  from "../Validation/Date";
export default function NewProject({ onEvent, onAdd }) {
  let title = useRef();
  let description = useRef();
  let dueDate = useRef();
  let [error, setError] = useState(false);
  function handleValid() {
    setError((prev) => false);
    console.log(error);
  }
  function handleSave() {
    let project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      id: Date.now(),
    };

    if (!isValidDate(project.dueDate)) {
      setError(true);
      return;
    }

    if (
      !project.title ||
      !project.description ||
      !project.dueDate ||
      new Date(project.dueDate.split("-").reverse().join("-")) < new Date() ||
      project.title.length < 5 ||
      project.description.length < 10
    ) {
      setError(true);
      return;
    }

    onAdd(project);
    onEvent();
  }

  if (error) return <Invalid valid={handleValid} />;
  return (
    <div className="flex-1 w-full bg-gray-950 text-white p-8 flex flex-col items-center justify-center overflow-auto">
      {/* Wrapper for content */}
      <div className="w-full max-w-xl flex flex-col gap-6">
        {/* Top Buttons */}
        <menu className="flex items-center justify-end gap-3">
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 transition"
          >
            Save
          </button>

          <button
            onClick={onEvent}
            className="px-4 py-2 rounded-md text-sm font-medium border border-gray-600 hover:bg-gray-800 transition"
          >
            Cancel
          </button>
        </menu>

        {/* Inputs Section */}
        <div className="flex flex-col gap-4">
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label={`Due Date like 15-01-2027`} />
        </div>
      </div>
    </div>
  );
}
