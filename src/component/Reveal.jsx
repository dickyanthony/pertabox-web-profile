import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { color } from "../utils";

export default function Reveal(props) {
  const { children, width = "fit-content" } = props;
  const ref = useRef(null);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          borderRadius: 30,
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: color.primaryColor,
        }}
      />
    </div>
  );
}
