import { useState } from "react";

export default function Upload() {
  const [image, setImage] = useState(null);

  // When user selects a file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create temporary image URL
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Report Missing Person
        </h2>

        {/* Upload Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Person’s Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Image Preview */}
          {image && (
            <div className="mt-4">
              <p className="text-gray-700 text-sm mb-2">Preview:</p>
              <img
                src={image}
                alt="Preview"
                className="rounded-md shadow-md w-full object-cover h-60"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
