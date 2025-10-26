export default function Invalid({ valid }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-8 rounded-lg w-[90%] max-w-md flex flex-col gap-4 text-center shadow-lg shadow-black/30">
        <p className="text-2xl font-semibold text-red-400">
          Oops... Invalid Values
        </p>

        <p className="text-gray-300">
          Please fill in all fields with valid information.
        </p>

        <button
          onClick={valid}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md font-medium"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
