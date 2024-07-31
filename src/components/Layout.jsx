import React from "react";
import PropTypes from "prop-types";
import Screen from "./Screen";

const Layout = (props) => {
  return (
    <>
      <div className="max-w-xl mx-auto my-auto mt-40">
        <Screen />
      </div>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
