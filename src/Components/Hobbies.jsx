import React from 'react';
import { FaGamepad, FaPalette, FaMusic, FaCoffee, FaCamera, FaGlobe } from 'react-icons/fa';
import { MdCode, MdExplore, MdSchool, } from 'react-icons/md';

const hobbies = [
  { icon: <MdCode size={30} />, title: "Coding", desc: "Building innovative solutions and exploring new technologies", bg: "bg-indigo-100" },
  { icon: <FaPalette size={30} />, title: "Designing", desc: "Creating beautiful user interfaces and visual experiences", bg: "bg-pink-100" },
  { icon: <FaMusic size={30} />, title: "Music", desc: "Listening to various genres and discovering new artists", bg: "bg-purple-100" },
  { icon: <MdSchool size={30} />, title: "Learning", desc: "Reading tech blogs, documentation, and staying updated", bg: "bg-green-100" },
  { icon: <FaGamepad size={30} />, title: "Gaming", desc: "Playing strategy games and exploring virtual worlds", bg: "bg-orange-100" },
  { icon: <FaCamera size={30} />, title: "Photography", desc: "Capturing moments and exploring creative perspectives", bg: "bg-blue-100" },
  { icon: <MdExplore size={30} />, title: "Exploring", desc: "Discovering new places and cultures", bg: "bg-teal-100" },
  { icon: <FaGlobe size={30} />, title: "Traveling", desc: "Experiencing new cultures and broadening horizons", bg: "bg-yellow-100" },
  // { icon: <FaCoffee size={30} />, title: "Coffee", desc: "Enjoying different coffee blends while coding", bg: "bg-yellow-100" }
];

const Hobbies = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id ="hobbies">
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4"> Hobbies & Interests</h2>
      <p className="text-center text-gray-500 mb-12">When I'm not coding, here's what keeps me inspired and motivated</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {hobbies.map((item, i) => (
          <div key={i} className={`p-6 rounded-xl shadow-md text-center ${item.bg}`}>
            <div className="mb-4 text-3xl">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Fun Fact Section */}
      <div className="mt-20 max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-xl text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-400 bg-clip-text text-transparent mb-4">🎉 Fun Fact</h3>
        <p className="text-gray-600 mb-6">
          I believe that having diverse interests makes me a better developer. Each hobby brings a unique perspective to problem-solving.
        </p>
        <div className="flex justify-around text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-bold text-lg">
          <div>
            <FaCoffee className="mx-auto mb-1" />
            50+ <p className="text-gray-500 text-sm font-medium">Travel Covered India</p>
          </div>
          <div>
            <MdSchool className="mx-auto mb-1" />
            500+ <p className="text-gray-500 text-sm font-medium">Photos Shoot</p>
          </div>
          <div>
            <FaMusic className="mx-auto mb-1" />
            1000+ <p className="text-gray-500 text-sm font-medium">Songs in Playlist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
