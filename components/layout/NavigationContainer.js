import React, { useState } from "react";
import PropTypes from "prop-types";
import NavigationBar from "./NavigationBar";
import Navigation from "./Navigation";
NavigationContainer.propTypes = {};
function NavigationContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavigationBar open={open} setOpen={setOpen} />
      <Navigation open={open} setOpen={setOpen} />
    </>
  );
}
export default NavigationContainer;
