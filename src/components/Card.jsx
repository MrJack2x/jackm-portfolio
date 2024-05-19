import PropTypes from "prop-types";

export default function Card({ projectName, projectImg }) {
  return (
    <div className="px-8 shadow-xl rounded-xl">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="px-8 py-4">
            <div className="flex flex-col justify-center items-center p-4">
              <h3 className="text-lg my-4 text-center">{projectName}</h3>
              <img
                className="rounded-xl hover:scale-105 ease-in duration-300 h-[75px] sm:h-[200px]"
                src={projectImg}
                alt="Projects"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  projectName: PropTypes.string,
  projectImg: PropTypes.string,
};
