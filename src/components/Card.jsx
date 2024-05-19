import PropTypes from "prop-types";

export default function Card({ projectImg }) {
  return (
    <div className="shadow-xl rounded-lg">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-xl hover:scale-105 ease-in duration-300 h-[200px] sm:h-[350px] w-full"
              src={projectImg}
              alt="Projects"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  projectImg: PropTypes.string,
};
