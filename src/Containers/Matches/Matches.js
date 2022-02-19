import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Stack, Text, Heading, VStack, Image, Link, Center, useColorMode } from "@chakra-ui/react";
import React, { useContext } from "react";
import { SlidingImage, SlidingText } from "../../Components/sliders/index";
import { useLocale } from "../../Components/LocaleProvider/LocaleProvider";
import content from "./content";
import { RepositoryMetrics } from 'repository-metrics';
import { LocaleContext } from "../../Components/LocaleProvider/LocaleProvider";



const Card = ({ image, title, body, link, owner, repo }) => {

    const { colorMode, toggleColorMode } = useColorMode();



    return (
        <VStack maxW="480px" align="center" justify="center" textAlign="center">
            <SlidingImage
                dir="top"
                offset={50}
                style={{ marginBottom: "1rem" }}
            >
                <Link href={link}>
                    <Image src={image} borderRadius='full' />
                </Link>
                <Center mt={20}>
                    <RepositoryMetrics
                        owner={owner}
                        repo={repo}
                        theme={colorMode === "light" ? "light" : "dark"}
                    />
                </Center>
            </SlidingImage>
            <SlidingText>
                <Heading mb={3}>{title}</Heading>
                <Text>{body}</Text>
                <br />
                <hr />
            </SlidingText>

        </VStack >
    );
};

export const Matches = (props) => {
    const { localeMode } = useLocale();

    return (
        <Box as="section" overflow="hidden" pos="relative">
            <Flex
                w="100%"
                h="100%"
                paddingY="100px"
                direction="column"
                justify="center"
                align="center"
                maxW="1240px"
                m="0 auto"
            >
                <Flex justify="center" flex={1} mb={5}>
                    <SlidingImage dir="top" offset={50}>
                        <Heading size="3xl" textAlign="center" px={5} fontSize='30px'>
                            {localeMode === "ru"
                                ? "Другие проекты: 🦃"
                                : "Another projects: 🦆"}{" "}

                        </Heading>
                    </SlidingImage>
                </Flex>
                <Stack
                    pt="75px"
                    spacing={20}
                    // Здесь можно настроить респонсивку 
                    // direction={["column", "column", "row"]}
                    justify="space-around"
                    align="center"
                    w="100%"
                >
                    {content[localeMode].map((c) => (
                        <Card key={c.title} {...c} />
                    ))}
                </Stack>
            </Flex>
        </Box>
    );
};
