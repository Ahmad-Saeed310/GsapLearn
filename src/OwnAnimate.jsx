import { useRef, useEffect } from "react";
import gsap from "gsap"


function OwnAnimate() {
  const allreference = useRef(null);

  useEffect(() => {
    const applied = gsap.context(() => {
      gsap.from(allreference.current, {
        x: -100,
        y: 100,
        scale: 0.5,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power2.out",
        force3D: true,
        clearProps: "transform",
      });
    });
    return () => applied.revert();
  }, []);

  return (
    <>
      <div style={{ padding: "50px" }}>
        <div
          ref={allreference}
          style={{
            width: "300px",
            height: "300px",
            background: "white",
            borderRadius: "14px",
            willChange: "transform",
          }}
        ></div>
      </div>
    </>
  );
}

export default OwnAnimate;
