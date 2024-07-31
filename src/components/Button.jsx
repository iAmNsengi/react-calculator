import PropTypes from "prop-types";

const Button = ({ title, value, span }) => {
  return (
    <button
      value={value}
      className={`font-semibold py-12 w-full text-2xl bg-gray-300 px-7 border border-gray-600 ${
        span ? "col-span-2 w-full" : ""
      }`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  span: PropTypes.string,
};

export default Button;
