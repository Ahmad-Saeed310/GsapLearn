import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Animate() {
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        x: -60,
        y: -40,
        scale: 0.95,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power2.out",
        force3D: true,
        clearProps: "transform",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <div
        ref={boxRef}
        style={{
          width: "150px",
          height: "150px",
          background: "green",
          borderRadius: "14px",
          willChange: "transform",
        }}
      />
    </div>
  );
}

export default Animate;
