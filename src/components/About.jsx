import AboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <div
      name="about"
      className="w-full md:h-screen px-8 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am an aspiring software engineer based in the United States. I am
            currently pursuing a Bachelor&#39;s degree in Computer Science in my
            first year of college. I have a passion for creating different
            things and problem-solving. Throughout my life, mathematics has
            always been something I was fairly good with, and enjoyed the
            problem-solving aspect of it. I have always been interested in
            technology and how it works, and I want to take this passion and use
            it to create software that will benefit the world.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-4 hover:scale-105 ease-in duration-300">
          <img src={AboutImg} className="rounded-xl" alt="About Image" />
        </div>
      </div>
    </div>
  );
}
