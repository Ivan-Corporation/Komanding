import React, { useContext } from "react";
import {
    Box,
    Flex,
    Spacer,
    HStack,
    Image,
    Link,
    Container,
    useColorMode,
    Button,
    Icon,
} from "@chakra-ui/react";
import { EmailIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

import NavbarIcon from "./NavbarIcon";
import "./Navbar.css";
import { LocaleContext } from "../../Components/LocaleProvider/LocaleProvider";
import logo from '../../images/logo.png'
import russia from '../../images/russia.png'
import usa from '../../images/usa.png'
import { motion } from "framer-motion";
import { useToast } from '@chakra-ui/react'




export default (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { localeMode, toggleLocaleMode } = useContext(LocaleContext);
    const toast = useToast()

    function languageChanger() {
        {
            {
                localeMode === "ru" ?
                    toast({
                        status: 'success',
                        position: 'top-right',
                        duration: 2000,
                        isClosable: true,
                        render: () => (
                            <Box m={3} color="orange">
                                Language changed
                            </Box>
                        ),
                    })
                    :
                    toast({
                        status: 'success',
                        position: 'top-right',
                        render: () => (
                            <Box m={3} color="orange">
                                Язык изменён
                            </Box>
                        ),
                        duration: 2000,
                        isClosable: true,
                    })
            }
            toggleLocaleMode()
        }
    }

    return (
        <Container
            maxW="100%"
            borderTop="5px solid"
            borderColor="blue.500"
            zIndex="999"
            as="nav"
        >
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.2,
                }}
                className='header'>

                <Flex maxW="1240px" m="auto">
                    <Link
                        href="/"
                        _hover={{ textDecoration: "none" }}
                        pos="relative"
                        left="0"
                        transform="translate(0%, 25%)"
                    >
                        <Box w="50px" h="auto" mt="-2px">
                            <Image
                                boxSize="40px"
                                objectFit="contain"
                                src={logo}
                                pos="absolute"
                                alt="logo"
                            />
                        </Box>
                    </Link>
                    <Spacer />
                    <HStack p={3} spacing={[4, 6, 8]} mt="24px">
                        <Button
                            bg="transparent"
                            size="md"
                            pr={8}
                            mt={-5}
                            _hover={{
                                bg: "transparent"
                            }}
                            onClick={() => toggleColorMode(!colorMode)}
                        >
                            <Icon
                                as={colorMode === "light" ? MoonIcon : SunIcon}
                                w={24} h={24}
                                color="blue.100"
                                transition="color"
                                transitionDuration=".3s"
                                transitionTimingFunction="ease-in"
                                _hover={{
                                    color: "orange"
                                }}
                            />
                        </Button>
                        <NavbarIcon
                            icon={EmailIcon}
                            href="mailto:hammer.99.ivan@gmail.com"

                        />
                        <Button
                            onClick={() => languageChanger()}
                            aria-label={"Flag-" + localeMode}
                            variant="ghost"
                            pl={14}

                        >
                            {localeMode === "ru" ?
                                <Image
                                    boxSize='55px'
                                    objectFit="cover"
                                    src={russia}
                                    fallbackSrc='../../images/gif/hearts.gif'
                                    mt={-10}
                                /> :
                                <Image
                                    boxSize='55px'
                                    objectFit="cover"
                                    src={usa}
                                    fallbackSrc='../../images/gif/hearts.gif'
                                    mt={-5}
                                />

                            }
                        </Button>



                    </HStack>
                </Flex>

            </motion.div>
        </Container>
    );
};
