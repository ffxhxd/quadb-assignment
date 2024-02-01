import React, { useState, useEffect } from "react";
import Header from "./Header";

const Ticket = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      // Parse the stored form data if it exists
      const parsedFormData = JSON.parse(storedFormData);
      setFormData(parsedFormData);
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleDelete = () => {
    // Remove the stored form data from localStorage
    localStorage.removeItem("formData");
    // Clear the form data in the component state
    setFormData(null);
  };

  return (
    <div className="bg-slate-900 min-h-screen ">
      <Header />
      <div className="mt-4 p-4 m-8 bg-gray-600 rounded shadow">
        {formData ? (
          <>
            <ul className="text-white">
              <li className="mb-2">Name: {formData.name}</li>
              <li className="mb-2">Phone: {formData.phone}</li>
              <li className="mb-2">Movie: {formData.movie}</li>
              <li className="mb-2">Date: {formData.date}</li>
              <li className="mb-2">Time: {formData.time}</li>
            </ul>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleDelete}
            >
              Delete Ticket
            </button>
          </>
        ) : (
          <h1 className="text-2xl font-bold">No Tickets Booked Yet</h1>
        )}
      </div>
    </div>
  );
};

export default Ticket;
