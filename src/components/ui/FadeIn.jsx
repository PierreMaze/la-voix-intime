import { useEffect, useRef } from "react";

export const FadeIn = ({ children, className = "", threshold = 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.disconnect(); // Plus performant que unobserve
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`opacity-0 translate-y-4 transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
};
