import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const isBrowser = typeof window !== "undefined";
  const [scrollPosition, setScrollPosition] = useState(
    isBrowser ? window.scrollY : 0
  );
  const [headerIsVisible, setHeaderIsVisible] = useState(true);
  const [scrollPositionIsNearTopOfPage, setScrollPositionIsNearTopOfPage] =
    useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  function handleScroll() {
    const previousScrollPosition = scrollPosition;
    const currentScrollPosition = window.scrollY;

    const isScrollingUp = previousScrollPosition > currentScrollPosition;
    const isOnTopOfPage = currentScrollPosition <= 75;
    const isNearTopOfPage = currentScrollPosition > window.innerHeight / 3;

    setScrollPosition(currentScrollPosition);
    setHeaderIsVisible(isScrollingUp || isOnTopOfPage);
    setScrollPositionIsNearTopOfPage(isNearTopOfPage);
  }

  return { scrollPosition, headerIsVisible, scrollPositionIsNearTopOfPage };
}
