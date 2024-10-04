import PropTypes from "prop-types";
import React from "react";
import "./AppWrapper.css";

/**
 * Higher-Order Component to wrap a given component with a styled container.
 *
 * @param {React.ComponentType} Component - The component to be wrapped.
 * @param {string} idName - The id for the outer div.
 * @param {string} classNames - Additional classes to apply to the container.
 * @returns {React.FC} - A functional component that renders the wrapped component.
 */
const withAppWrapper = (Component, idName = "defaultId", classNames = "") => {
  const HOC = (props) => {
    return (
      <div id={idName} className={`container ${classNames}`}>
        <div className="wrapper flex">
          <Component {...props} />
        </div>
      </div>
    );
  };

  // Optional: Add display name for easier debugging
  HOC.displayName = `withAppWrapper(${
    Component.displayName || Component.name
  })`;

  return HOC;
};

// PropTypes for validation
withAppWrapper.propTypes = {
  idName: PropTypes.string,
  classNames: PropTypes.string,
};

export default withAppWrapper;
