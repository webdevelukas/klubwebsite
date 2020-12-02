import { useState } from "react";
import NavigationBar from "./NavigationBar";
import Navigation from "./Navigation";

function NavigationContainer() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <NavigationBar open={open} setOpen={setOpen} />
      <Navigation open={open} />
    </>
  );
}
export default NavigationContainer;
