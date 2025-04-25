import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import CodeBlock, { cifraHaskell } from '../../components/codeBlock'
 
  const Work = () => (
    
    <Layout title="Cifra de César">
      <Container>
        <Title>
        Cifra de César<Badge>2025</Badge>
        </Title>
        <P>
        A Cifra de César é uma das mais simples e conhecidas técnicas de criptografia. É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/Phna-b/CifraDeCesar">
            https://github.com/Phna-b/CifraDeCesar <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>   Haskell  </span>
          </ListItem>

          
      
     
         
        </List>

        <WorkImage src="/images/JC.jpg" alt="JulioCesar" />
        <CodeBlock title="Implementação em Haskell" code={cifraHaskell} />
      </Container>
      
    </Layout>
    
  )
  
  export default Work
 