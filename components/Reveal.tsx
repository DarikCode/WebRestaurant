import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children?: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  fullHeight?: boolean;
}

export const Reveal: React.FC<Props> = ({ children, width = "fit-content", delay = 0, fullHeight = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden", height: fullHeight ? "100%" : "auto" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        className={fullHeight ? "h-full" : ""}
      >
        {children}
      </motion.div>
    </div>
  );
};