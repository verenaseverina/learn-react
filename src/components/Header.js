import React from "react";
import PropTypes from "prop-types";

const header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

header.defaultProps = {
  title: "Learn React",
};

header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default header;
