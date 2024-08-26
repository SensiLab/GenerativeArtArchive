import React, { useEffect, useRef, useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

import { sketch } from "../sketches/game-of-life";

const P5Sketch = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Use ResizeObserver for more reliable size detection
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial dimensions update
    updateDimensions();

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      id="sketch-container"
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    >
      {dimensions && (
        <ReactP5Wrapper
          sketch={sketch}
          parentWidth={dimensions.width}
          parentHeight={dimensions.height}
        />
      )}
    </div>
  );
};

export default P5Sketch;
