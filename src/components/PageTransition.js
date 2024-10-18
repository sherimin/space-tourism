"use client";

import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 1);
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div
      className={`transition-opacity bg-primary duration-1 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
