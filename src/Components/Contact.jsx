// components/Contact.jsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    .then(() => 
    {setIsSent(true);
     setIsError(false);
     form.current.reset();
     console.log("Message sent!");
    })
    .catch((error) =>{
    console.error("Error:", error);
    setIsSent(false);
    setIsError(true);
    });
  };

  return (
    <section className="px-6 py-16 bg-gray-100" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-400 bg-clip-text text-transparent flex justify-center items-center gap-2">
          <FaEnvelope /> Get In Touch
        </h2>
        <p className="text-gray-600 mt-2">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Box */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">Let's Connect</h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaEnvelope className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">karthicksolai28114@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-red-500" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <hr className="my-6" />
          <p className="font-semibold mb-2">Follow Me</p>
          <div className="flex gap-4">
            <a href="https://github.com/karthicksolai28" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-gray-600 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/m-karthicksolai/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXcdm7T0XR3ufXjz6VBY0Aw%3D%3D" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800" />
            </a>
          </div>
        </div>

        {/* Right Box - Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-400 bg-clip-text text-transparent mb-6">Send a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <input
              type="text"
              name="title"
              placeholder="What's this about?"
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project or just say hi!"
              required
              className="w-full p-3 border rounded-lg h-32 resize-none outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg flex justify-center items-center gap-2 font-semibold hover:opacity-90"
            >
              <FaPaperPlane /> Send Message
            </button>

            {isSent && <p className="text-green-600 mt-2 text-center">✅ Message sent successfully!</p>}
            {isError && <p className="text-red-600 mt-2 text-center">❌ Failed to send message. Try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
