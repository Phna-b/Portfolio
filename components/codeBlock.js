import React from 'react'
import { Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'

export const cifraHaskell = `import Data.Char (chr, ord, isUpper, isLower) 
cifra num letra =    
    if isUpper letra 
        then chr ( ord 'A' + mod (ord letra - ord 'A' + num) 26 )  
                                                                   
    else if isLower letra 
        then chr ( ord 'a' + mod (ord letra - ord 'a' + num) 26 )
    else letra

crip l msg = map (cifra l) msg
desc l msg = crip (-l) msg  

uiCrip = do  
    putStrLn "Qual a palavra que deseja criptografar?"
    msg <- getLine
    putStrLn "Digite o numero de deslocamento:"
    des <- getLine
    let desL = read des :: Int 
    let criptografada = crip desL msg
    putStrLn $ "Mensagem criptografada: " ++ criptografada

uiDesc = do  
    putStrLn "Qual a palavra que deseja descriptografar?"
    msg <- getLine
    putStrLn "Digite o numero de deslocamento:"
    des <- getLine
    let desL = read des :: Int  
    let descriptografada = desc desL msg
    putStrLn $ "Mensagem descriptografada: " ++ descriptografada

exeCifra = do  
    putStrLn "Qual operação deseja realizar?"
    putStrLn "1 - Criptografar;"
    putStrLn "2 - Descriptografar."
    msg <- getLine
    let msg1 = read msg :: Int
    if msg1 == 1 then uiCrip
    else if msg1 == 2 then uiDesc
    else  exeCifra

`
const CodeBlock = ({ title, code }) => {
  const bg = useColorModeValue('gray.100', 'gray.800')
  const textColor = useColorModeValue('black', 'white')

  return (
    <Box
      bg={bg}
      p={4}
      borderRadius="md"
      boxShadow="md"
      overflowX="auto"
      fontFamily="mono"
      whiteSpace="pre"
      mb={6}
    >
      {title && (
        <Heading as="h4" size="md" mb={3}>
          {title}
        </Heading>
      )}
      <Text color={textColor} fontSize="xs">
        {code}
      </Text>
    </Box>
  )
}

export default CodeBlock
 