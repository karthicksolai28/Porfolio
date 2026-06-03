import React from "react";
import { FaAward } from "react-icons/fa";

// Replace with your real image paths
import awardImg1 from "../assets/pic1.jpeg";
import awardImg2 from "../assets/pic2.jpeg";
import awardImg3 from "../assets/pic3.jpeg";

function Achievements() {
  const images = [awardImg1, awardImg2, awardImg3];

  return (
    <section className="py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400 flex justify-center items-center gap-3">
          <FaAward className="text-3xl" />
          Achievements
        </h2>
        <p className="text-gray-600 mt-2">
          Honored for leading and organizing academic events at institutional level
        </p>
      </div>

      {/* Main Achievement */}
      <div className="mt-10 px-4 md:px-12 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
            🏆 Student Secretary – Award of Excellence
          </h3>
          <p className="text-gray-700 text-lg">
            As the elected <span className="font-medium">Student Secretary</span> of the ECE Department, I successfully
            coordinated and led over <span className="font-semibold">5+ technical events</span> during the National Level
            Technical Symposium at <span className="font-medium">Hindusthan Institute of Technology</span>, 2024.
            <br />
            Received an award from faculty and institution heads recognizing my <span className="italic">leadership,
            planning, and student coordination</span>.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="mt-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Moments of Recognition
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 "
            >
              <img
                src={src}
                alt={`Award Moment ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
