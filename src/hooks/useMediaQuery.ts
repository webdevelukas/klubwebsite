import { useEffect, useState } from "react";

function useMediaQuery(mediaQuery: string) {
  const [matchesMediaQuery, setMatchesMediaQuery] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    setMatchesMediaQuery(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", () =>
      setMatchesMediaQuery(mediaQueryList.matches)
    );

    return () =>
      mediaQueryList.removeEventListener("change", () =>
        setMatchesMediaQuery(mediaQueryList.matches)
      );
  }, []);

  return [matchesMediaQuery];
}

export default useMediaQuery;
