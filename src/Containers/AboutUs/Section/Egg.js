import { HStack, Img } from "@chakra-ui/react";
import React from "react";


const images = [

  {
    src: "https://komaroad.netlify.app/static/media/secret.9a954979.png",
    alt: "egg"
  },


];

export const Egg = (props) => {
  return (
    <HStack className="egg">
      {images.map((img) => (
        <Img src={img.src} alt={img.alt} maxW="83.5%" h="auto" key={img.alt} />
      ))}
    </HStack>
  );
};
