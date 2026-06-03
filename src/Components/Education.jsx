import React from "react";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineSchool } from "react-icons/md";

function Education() {
  return (
    <div className="w-full bg-[#f5f6fb] py-20 px-4" id="education">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 flex justify-center items-center gap-2">
          <HiOutlineAcademicCap className="text-blue-500" />
          Education
        </h1>
        <p className="text-gray-600 mt-2">
          My academic journey and professional development
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-purple-400"></div>

        {/* Timeline Items */}
        <div className="space-y-20">
          {/* Item 1 */}
          <div className="flex justify-start items-center w-full relative">
            <div className="w-1/2 pr-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-blue-600 text-xl" />
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                    Degree
                  </span>
                  <span className="text-sm text-gray-500">2022 - 2026</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  Bachelor of Engineering – Electronics & Communication
                </h3>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <MdOutlineSchool /> Hindusthan Institute of Technology
                </p>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <FaMapMarkerAlt /> Coimbatore, Tamil Nadu
                </p>
                <p className="text-purple-600 font-semibold mt-2">🌸 7.6 CGPA</p>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>

          {/* Item 2 */}
          <div className="flex justify-end items-center w-full relative">
            <div className="w-1/2"></div>
            <div className="w-1/2 pl-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-green-600 text-xl">💻</span>
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                    Certification
                  </span>
                  <span className="text-sm text-gray-500">2026</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  Full Stack Development – MERN Stack
                </h3>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <MdOutlineSchool /> Besant Technology
                </p>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <FaMapMarkerAlt /> Offline,Chennai
                </p>
                <p className="text-purple-600 font-semibold mt-2">🌸 Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col justify-around items-center">
          <div className="w-4 h-4 bg-white border-2 border-purple-500 rounded-full shadow"></div>
          <div className="w-4 h-4 bg-white border-2 border-purple-500 rounded-full shadow"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Education;