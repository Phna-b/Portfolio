import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from "../lib/theme";
import Fonts from "../components/fonts";

const Website = ( { Component, pageProps, router } ) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts></Fonts>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website