import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useLocale } from "../../Components/LocaleProvider/LocaleProvider";
import { motion } from "framer-motion";



export const Title = () => {
    const { localeMode } = useLocale();

    return (
        <Box>
            <Heading
                as="h1"
                size="3xl"
                textAlign="center"
                mb={3}
                className="logo"
                fontSize='35px'
            >
                <motion.div
                    initial={{ opacity: 0, x: -1180 }}
                    animate={{ opacity: 1, x: -50 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.3,
                    }}
                >
                    <Text
                        as="span"
                        color="red.500"
                        textShadow="4px 4px 12px orange"

                    >
                        {localeMode === "ru" ? "Koma" : "Koma"}
                    </Text>{" "}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -180 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.2,
                    }}
                >
                    <Text as="span" display={["none", "inline-block"]} textShadow="4px 4px 12px orange">
                        💡
                    </Text>{" "}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 1180 }}
                    animate={{ opacity: 1, x: 60 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.3,
                    }}
                >
                    <Text
                        as="span"
                        color="blue.400"
                        textShadow="4px 4px 12px orange"
                    >
                        {localeMode === "ru" ? "Human" : "Human"}
                    </Text>
                </motion.div>
            </Heading>
            <motion.div
                initial={{ opacity: 0, x: -1180 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.9,
                }}
            >
                <Heading textAlign="center" className="logo" fontSize='20px'>
                    {localeMode === "ru"
                        ? "Шаблон одностраничника"
                        : "Landing Template"}
                </Heading>
            </motion.div>
        </Box>
    );
};
