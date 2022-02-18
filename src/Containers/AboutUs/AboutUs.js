import { Box } from "@chakra-ui/react";
import React from "react";
import content from "./content";
import { Section } from "./Section";
import { useLocale } from "../../Components/LocaleProvider/LocaleProvider";

export const AboutUs = () => {
    const { localeMode } = useLocale();

    return (
        <Box as="section" w="100%" h="100%" overflow="hidden">
            {content[localeMode].map((val, i) => {
                return (
                    <Section data={val} reverse={i % 2 !== 0} key={val.title} />
                );
            })}
        </Box>
    );
};
