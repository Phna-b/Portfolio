import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import CodeBlock, { cifraHaskell } from '../../components/codeBlock'
 
  const Work = () => (
    
    <Layout title="Controle de exercicíos">
      <Container>
        <Title>
        Controle de exercicíos<Badge>2025</Badge>
        </Title>
        <P>
        A aplicação web foi desenvolvida com o intuito de possibilitar a coleta de informação dos treinos realizados e retornar dashboards customizados. Com o auxilio de acompanhamento profissional é possível a utilização das informações do aplicativo para desenvolvimento de novas fichas, assim complementando as informações de perfil do usuário e obtendo uma abordagem ainda mais direcionada com base no desenvolvimento.        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/Phna-b/SISWEB_trabalhofinal/">
            https://github.com/Phna-b/SISWEB_trabalhofinal/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>   Python, Flask, SQLAlchemy, JavaScript, HTML, CSS  </span>
          </ListItem>
        </List>
        
        <WorkImage src="/images/siswebPreview.png" alt="SISWEB" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/nL_tizuox6M?si=Zlzd-I6iKW9NdgCR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
      
    </Layout>
    
  )
  
  export default Work
 