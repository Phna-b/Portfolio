import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import { useTranslation } from 'react-i18next';

  const Work = () => {
    const { t } = useTranslation();
    return (
    <Layout title="farofa">
      <Container>
        <Title>
          farofa <Badge>2025-</Badge>
        </Title>
        <P>
          {t('farofa')}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://lojafarofa.com.br/">
            https://lojafarofa.com.br/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('plataforma')}</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>   HTML, CSS, JavaScript </span>
          </ListItem>
 
        </List>
  
        <WorkImage maxW="400px" maxH="400px" src="/images/farofaPost.png" alt="farofa" />
 
      </Container>
    </Layout>
  )
}
  export default Work
 