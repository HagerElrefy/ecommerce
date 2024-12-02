import { useEffect, useState } from "react";

function useResponsiveLimit() {
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    let resizeTimeout;
    const updateLimit = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (window.innerWidth <= 768) setLimit(1);
        else if (window.innerWidth <= 1024) setLimit(2);
        else setLimit(3);
      }, 10); // Debounce resize event
    };

    updateLimit(); // Set initial value
    window.addEventListener("resize", updateLimit); // Update on resize

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", updateLimit);
    };
  }, []);

  return limit;
}

export default useResponsiveLimit;
