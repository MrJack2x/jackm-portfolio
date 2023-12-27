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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos sit repudiandae suscipit esse aspernatur blanditiis rem,
            sint consectetur illo aliquam at laborum voluptatem accusamus
            soluta, aliquid sapiente dolor maxime vero provident ut earum ipsa
            nulla. Maiores reiciendis velit voluptatum.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos sit repudiandae suscipit esse aspernatur blanditiis rem,
            sint consectetur illo aliquam at laborum voluptatem accusamus
            soluta, aliquid sapiente dolor maxime vero provident ut earum ipsa
            nulla. Maiores reiciendis velit voluptatum.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-4 hover:scale-105 ease-in duration-300">
          <img src={AboutImg} className="rounded-xl" alt="About Image" />
        </div>
      </div>
    </div>
  );
}
