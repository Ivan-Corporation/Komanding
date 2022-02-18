import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import { motion, useAnimation } from "framer-motion";
import { Title } from "./Title";
import React, { useEffect } from "react";
import "./Hero.css";

export const Hero = (props) => {
  const { colorMode } = useColorMode();
  const bgAnimation = useAnimation();

  useEffect(() => {
    bgAnimation.start(colorMode);
  }, [colorMode, bgAnimation]);

  const bgVariants = {
    light: {
      background:
        "linear-gradient(to bottom, #154277 0%, #576e71 30%, #e1c45e 70%, #b26339 100%)"
    },
    dark: {
      background:
        "linear-gradient(to bottom, #020111 0%, #020111 30%, #020111 70%, #20202c 100%)"
    }
  };

  return (
    <Box
      as="section"
      overflow="hidden"
      pos="relative"
      h="750px"
      style={{ clipPath: "ellipse(150% 75% at 40% 20%)" }}
    >
      <motion.div
        initial={colorMode}
        variants={bgVariants}
        animate={bgAnimation}
        transition={{
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <Flex
          minH={["auto", "auto", "750px"]}
          direction="column"
          pos="relative"
          w="100%"
          overflow="hidden"
          align="center"
        >
          <Navbar />
          <Box pt={["90px", "120px", "150px"]} zIndex="1">
            <Title />
          </Box>
          {/* Parallax here! */}

        </Flex>
      </motion.div>
    </Box>
  );
};
