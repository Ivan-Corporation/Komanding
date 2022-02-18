import React, { useRef, useState, useLayoutEffect } from "react";
import { motion, useViewportScroll, useAnimation } from "framer-motion";

export const SlidingText = ({ children, ...props }) => {
  const [elementOffsetTop, setElementOffsetTop] = useState(0);
  const elementRef = useRef();

  const { scrollY } = useViewportScroll();

  const [animationRan, setAnimationRan] = useState(false);
  const animation = useAnimation();
  const animationOffsetStart = window.innerHeight - 200;

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  useLayoutEffect(() => {
    setElementOffsetTop(elementRef.current.getBoundingClientRect().y);
    return scrollY.onChange((y) => {
      if (!animationRan && y >= elementOffsetTop - animationOffsetStart) {
        animation.start("open");
        setAnimationRan(true);
      }
    });
  }, [
    elementOffsetTop,
    scrollY,
    animationRan,
    animationOffsetStart,
    animation
  ]);

  return (
    <motion.div
      ref={elementRef}
      variants={variants}
      initial={false}
      animate={animation}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          style={{ opacity: 0, y: 50 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export const SlidingImage = ({ dir, offset, ...props }) => {
  const [elementOffsetTop, setElementOffsetTop] = useState(0);
  const elementRef = useRef();

  const { scrollY } = useViewportScroll();

  const [animationRan, setAnimationRan] = useState(false);
  const animation = useAnimation();
  const animationOffsetStart = window.innerHeight - 200;

  offset = offset || 300;

  const variants = {
    initial: { opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        bounce: 0.4,
        type: "spring"
      }
    }
  };

  if (dir === "left") {
    variants.initial.x = offset * -1;
  } else if (dir === "right") {
    variants.initial.x = offset;
  } else if (dir === "top") {
    variants.initial.y = offset * -1;
  } else if (dir === "bottom") {
    variants.initial.y = offset;
  }

  useLayoutEffect(() => {
    setElementOffsetTop(elementRef.current.getBoundingClientRect().y);
    return scrollY.onChange((y) => {
      if (!animationRan && y >= elementOffsetTop - animationOffsetStart) {
        animation.start("animate");
        setAnimationRan(true);
      }
    });
  }, [
    elementOffsetTop,
    scrollY,
    animationRan,
    animationOffsetStart,
    animation
  ]);

  return (
    <motion.div
      initial="initial"
      animate={animation}
      variants={variants}
      ref={elementRef}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};
