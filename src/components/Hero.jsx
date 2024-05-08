import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Home() {
  return (
    <div name="hero" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&#39;s Connect
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, I&#39;m <span className="text-[#5651e5]">Jack</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Engineer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I am dedicated to learning emerging technologies and developing
            solutions that address practical issues in the real world.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
            <Link to="contact" smooth={true} duration={500}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
