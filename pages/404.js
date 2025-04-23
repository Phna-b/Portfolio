import NextLink from 'next/link'
import {Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Erro 404 - Not found</Heading>
      <Text>A página não existe.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="purple">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}
export default NotFound