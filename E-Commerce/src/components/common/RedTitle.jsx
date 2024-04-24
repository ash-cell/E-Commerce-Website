import PropTypes from "prop-types";

const RedTitle = ({ title }) => {
  return (
    <div className="mb-12 flex flex-row gap-4 items-center text-lg font-semibold">
      <span className=" bg-red-500 h-10 w-5 rounded "></span>
      <span className="text-red-500">{title}</span>
    </div>
  );
};

RedTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default RedTitle;