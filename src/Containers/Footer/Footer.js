import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <Box textAlign="center" bg='dark' mb={15} mt={85}>
      <Heading size="sm">
        <span style={{ color: "orange" }}>Koma</span>{" "}
        <span style={{ color: "orange" }}>Corporation</span>
      </Heading>
      <Heading size="xs">{year}</Heading>
    </Box>
  );
};
