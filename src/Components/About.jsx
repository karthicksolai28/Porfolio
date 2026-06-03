import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiMysql,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";

function About() {
  return (
    <section className="bg-[#f5f6fb] py-16 px-4 sm:px-6 lg:px-8" id="about">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-gray-600 mt-2">
          Get to know more about my journey and expertise
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: My Journey */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
            My Journey
          </h2>
          <p className="text-gray-700 text-md leading-relaxed">
            I’m <span className="font-semibold text-black">M Karthick Solai</span>
            , a passionate B.E. Electronics and Communication Engineering
            graduate from Hindusthan Institute of Technology, Coimbatore.
            <br />
            With a solid foundation in electronics, embedded systems, and
            communication technologies, I’ve gained hands-on experience in
            circuit troubleshooting and motherboard-level repairs through
            real-world technical workshops.
            <br />
            <br />
            My curiosity for building practical digital solutions led me into
            the world of web development, where I recently completed an
            intensive MERN Stack training program from{" "}
            <span className="font-semibold text-black">Besant Technology</span>. I
            specialize in creating full-stack applications using MongoDB,
            Express.js, React.js, and Node.js, focusing on clean architecture
            and seamless user experiences.
            <br />
            <br />I enjoy solving complex problems and transforming ideas into
            functional, intuitive interfaces. Outside of coding, I’m always
            exploring new technologies, contributing to open-source, and keeping
            up with the latest trends in web development.
          </p>
        </div>

        {/* Right: Skills & Stats */}
        <div className="flex flex-col gap-6">
          {/* Technical Skills */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center text-sm text-gray-800">
              {[
                {
                  icon: <FaReact size={30} className="text-blue-500" />,
                  name: "React.js",
                },
                {
                  icon: <FaNodeJs size={30} className="text-green-600" />,
                  name: "Node.js",
                },
                {
                  icon: <SiExpress size={30} className="text-gray-700" />,
                  name: "Express.js",
                },
                {
                  icon: <SiMongodb size={30} className="text-green-700" />,
                  name: "MongoDB",
                },
                {
                  icon: <SiMysql size={30} className="text-blue-700" />,
                  name: "SQL",
                },
                {
                  icon: <SiJavascript size={30} className="text-yellow-500" />,
                  name: "JavaScript",
                },
                {
                  icon: (
                    <FaPython
                      size={30}
                      className="bg-pythonBlueDark text-pythonYellowLight"
                    />
                  ),
                  name: "JavaScript",
                },
                {
                  icon: <SiHtml5 size={30} className="text-orange-500" />,
                  name: "HTML",
                },
                {
                  icon: <SiCss3 size={30} className="text-blue-600" />,
                  name: "CSS",
                },
                // {
                //   icon: <SiTailwindcss size={30} className="text-cyan-500" />,
                //   name: "Tailwind CSS",
                // },
                {
                  icon: <SiBootstrap size={30} className="text-violet-500" />,
                  name: "Bootstrap",
                },
                {
                  icon: <SiGithub size={30} className="text-gray-600" />,
                  name: "GitHub",
                },
                {
                  icon: <SiPostman size={30} className="text-orange-600" />,
                  name: "Postman",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 p-4 shadow-sm rounded-lg flex flex-col items-center font-semibold hover:shadow-md transition duration-300"
                >
                  {skill.icon}
                  <span className="mt-1">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "3+", label: "Projects" },
              { value: "200+", label: "Hours Coded" },
              { value: "5+", label: "Technologies" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-xl text-center"
              >
                <p className="text-purple-600 font-bold text-xl">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
