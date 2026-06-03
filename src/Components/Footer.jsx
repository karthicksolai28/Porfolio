import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 px-4 sm:px-6 md:px-20 pt-10" id="footer">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work together?</h2>
        <p className="text-lg mb-6">Let’s build something amazing! Reach out and let’s get started.</p>
        <a
          href="#contact"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          Let's Talk
        </a>
      </div>

      {/* Main Footer Content */}
      <div className="grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Left Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">M KARTHICK SOLAI</h2>
          <p className="mb-4">
            Full Stack Developer passionate about creating innovative web solutions using modern technologies. Always learning, always building.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'].map((tech) => (
              <span key={tech} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            {['Home', 'About','contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">Connect</h2>
          <div className="space-y-2">
            <p>📧 karthicksolai28114@gmail.com</p>
            <p>📍 Chennai, Tamil Nadu</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/karthicksolai28" className="bg-gray-700 p-2 rounded-full hover:bg-white hover:text-black"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/m-karthicksolai/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXcdm7T0XR3ufXjz6VBY0Aw%3D%3D " className="bg-gray-700 p-2 rounded-full hover:bg-white hover:text-black"><FaLinkedin /></a>
            {/* <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-white hover:text-black"><FaTwitter /></a> */}
            <a href="mailto:karthicksolai28114@gmail.com" className="bg-gray-700 p-2 rounded-full hover:bg-white hover:text-black"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 pb-6 text-sm text-gray-500">
        <p>
          <span className="text-blue-500">{"</>"}</span> 2025 KARTHICK SOLAI. Made with ❤️
        </p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Source Code</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
