import { useEffect, useRef } from "react";

/**
 * Hook pour surveiller les performances des composants
 * Utilise les APIs Web Vitals pour mesurer les métriques de performance
 */
export const usePerformanceMonitor = (componentName) => {
  const renderStartTime = useRef(null);
  const renderCount = useRef(0);

  useEffect(() => {
    // Mesurer le temps de rendu
    renderStartTime.current = performance.now();
    renderCount.current += 1;

    return () => {
      if (renderStartTime.current) {
        const renderTime = performance.now() - renderStartTime.current;

        // Log uniquement en développement
        if (process.env.NODE_ENV === "development") {
          console.log(`[Performance] ${componentName}:`, {
            renderTime: `${renderTime.toFixed(2)}ms`,
            renderCount: renderCount.current,
          });
        }
      }
    };
  });

  // Mesurer les Core Web Vitals
  useEffect(() => {
    if (typeof window !== "undefined" && "web-vital" in window) {
      // Mesurer LCP (Largest Contentful Paint)
      const measureLCP = () => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log(`[Web Vitals] LCP: ${lastEntry.startTime.toFixed(2)}ms`);
        }).observe({ entryTypes: ["largest-contentful-paint"] });
      };

      // Mesurer FID (First Input Delay)
      const measureFID = () => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            console.log(
              `[Web Vitals] FID: ${entry.processingStart - entry.startTime}ms`
            );
          });
        }).observe({ entryTypes: ["first-input"] });
      };

      // Mesurer CLS (Cumulative Layout Shift)
      const measureCLS = () => {
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          console.log(`[Web Vitals] CLS: ${clsValue.toFixed(4)}`);
        }).observe({ entryTypes: ["layout-shift"] });
      };

      measureLCP();
      measureFID();
      measureCLS();
    }
  }, []);

  return {
    renderCount: renderCount.current,
  };
};
