import { useEffect, useState } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string | undefined>(undefined);

  function handleResize() {
    if (window.innerWidth < 600) {
      setBreakpoint("xs");
    } else if (window.innerWidth < 900) {
      setBreakpoint("sm");
    } else if (window.innerWidth < 1200) {
      setBreakpoint("md");
    } else if (window.innerWidth < 1536) {
      setBreakpoint("lg");
    } else {
      setBreakpoint("xl");
    }
  }

  useEffect(() => {
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  window.addEventListener("resize", handleResize);

  return breakpoint;
};
