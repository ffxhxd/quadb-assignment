import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useParams } from "react-router";
import useSingleMovie from "../Utils/useSingleMovie";
import Loading from "./Loading";

const MovieBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    movie: "",
    date: "",
    time: "",
  });

  const { id } = useParams();
  const data = useSingleMovie(id);

  if (!data) {
    return <Loading />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      movie: data?.name,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    toast("Ticked Issued 🤗!");
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="p-5 min-h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="rounded-md bg-gray-800 shadow-lg p-6 w-[90vw] sm:w-[60vw] ">
          <h2 className="text-2xl font-bold text-gray-300 mb-6">
            Movie Booking Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-400 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded-md py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-400 text-sm font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border rounded-md py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="movie"
                className="block text-gray-400 text-sm font-bold mb-2"
              >
                Movie
              </label>
              <input
                type="text"
                id="movie"
                name="movie"
                readOnly
                value={data?.name}
                className="w-full border rounded-md py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-400 text-sm font-bold mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full border rounded-md py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-gray-400 text-sm font-bold mb-2"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full border rounded-md py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline w-full"
            >
              Book Now
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default MovieBookingForm;
