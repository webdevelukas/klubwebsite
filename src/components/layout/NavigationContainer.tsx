import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

function NavigationContainer() {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <>
      <NavigationBar open={open} setOpen={setOpen} />
      <Navigation open={open} />
    </>
  );
}
export default NavigationContainer;
