import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import CodeBlock, { cifraHaskell } from '../../components/codeBlock'
  import { useTranslation } from 'react-i18next';
 
  const Work = () => {
    const { t } = useTranslation();
    return(
    <Layout title="Cifra de César">
      <Container>
        <Title>
          {t('cifra')}<Badge>2025</Badge>
        </Title>
        <P>
            {t('cifraDescricaoCompleta')}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/Phna-b/CifraDeCesar">
            https://github.com/Phna-b/CifraDeCesar <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('plataforma')}</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>   Haskell  </span>
          </ListItem>

          
      
     
         
        </List>

        <WorkImage src="/images/JC.jpg" alt="JulioCesar" />
        <CodeBlock title={t('haskell')} code={cifraHaskell} />
      </Container>
      
    </Layout>
    
  )
}
  export default Work
 