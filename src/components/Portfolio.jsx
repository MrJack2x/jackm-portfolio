import Card from "./Card";
import PortfolioImg from "../assets/portfolio.png";
import HelveraImg from "../assets/helvera.png";

export default function Portfolio() {
  const portfolioName = "My Portfolio";
  const portfolioImg = PortfolioImg;
  const helveraName = "Helvera";
  const helveraImg = HelveraImg;

  return (
    <div id="portfolio" className="w-full lg:h-screen px-8">
      <div className="max-w-[1240px] m-4 mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Portfolio
        </p>
        <h2 className="py-4">What I Have Done</h2>
        <div className="p-8 flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
            <a href="https://github.com/jrmichell/jackm-portfolio">
              <Card projectName={portfolioName} projectImg={portfolioImg} />
            </a>
            <a href="https://helvera.vercel.app/">
              <Card projectName={helveraName} projectImg={helveraImg} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
