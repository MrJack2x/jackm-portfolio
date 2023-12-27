import { Link } from "react-scroll";
import ContactImg from "../assets/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Contact() {
  return (
    <div name="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase py-4 text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Let&#39;s Connect</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src={ContactImg}
                  alt="Contact Image"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
                <div>
                  <h2 className="py-2">Jack Michell</h2>
                  <p>Software Engineer</p>
                  <p className="py-4">
                    I am available for full-time positions. Contact me and
                    let&#39;s connect.
                  </p>
                </div>
                <div>
                  <p className="uppercase text-center pt-8 text-[#5651e5]">
                    Connect With Me
                  </p>
                  <div className="flex items-center justify-evenly py-4">
                    <a
                      href="https://www.linkedin.com/in/jack-michell/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn size={20} />
                      </div>
                    </a>
                    <a
                      href="https://github.com/MrJack2x"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="mailto:jmichell2003@gmail.com" method="post">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button className="w-full shadow-gray-400 text-[#fff] p-4 text-gray-100 mt-4">
                  Let&#39;s Connect
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link to="hero" smooth={true} duration={300}>
            <div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
