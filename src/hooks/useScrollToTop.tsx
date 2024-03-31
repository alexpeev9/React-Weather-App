import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page with smooth behavior when the pathname changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
}
