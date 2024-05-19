import Card from "./Card";

export default function Portfolio() {
  return (
    <div id="portfolio" className="w-full lg:h-screen px-8">
      <div className="max-w-[1240px] m-4 mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Portfolio
        </p>
        <h2 className="py-4">Coming Soon</h2>
        {/* TODO: Finish adding portfolio */}
        {/*   <div className="p-8"> */}
        {/*     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center"> */}
        {/*       <Card /> */}
        {/*       <Card /> */}
        {/*     </div> */}
        {/*   </div> */}
      </div>
    </div>
  );
}
