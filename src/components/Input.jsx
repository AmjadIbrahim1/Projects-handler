import React, { forwardRef } from "react";

export default forwardRef(function Input(
  { label, textarea, defaultValue },
  ref
) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-200">{label}</label>

      {textarea ? (
        <textarea
          ref={ref}
          defaultValue={defaultValue}
          placeholder={`Enter ${label} here...`}
          className="resize-none w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows={4}
        />
      ) : (
        <input
          ref={ref}
          defaultValue={defaultValue}
          placeholder={`Enter ${label}...`}
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      )}
    </div>
  );
});
