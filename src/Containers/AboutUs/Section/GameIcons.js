import { HStack, Img } from "@chakra-ui/react";
import React from "react";
import "./GameIcons.css";

const images = [

  {
    src: "https://raw.githubusercontent.com/Ivan-Corporation/Ivan-Corporation/b85e6cb3259847e540680388131f3fbc77e508ac/icons/angular.svg",
    alt: "Angular"
  },
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", alt: "React" },
  { src: "https://raw.githubusercontent.com/Ivan-Corporation/Ivan-Corporation/b85e6cb3259847e540680388131f3fbc77e508ac/icons/vue.svg", alt: "Vue" },

];

export const GameIcons = (props) => {
  return (
    <HStack className="game-icons">
      {images.map((img) => (
        <Img src={img.src} alt={img.alt} maxW="23.5%" h="auto" key={img.alt} />
      ))}
    </HStack>
  );
};
