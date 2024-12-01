import { ThemeProvider } from "styled-components";
import theme from './config/theme'
import { Main, Container, BentoElement, Footer, Text, Image } from "./components/styled";
import createPost from './assets/images/illustration-create-post.webp'
import fiveStars from './assets/images/illustration-five-stars.webp'
import schedule from './assets/images/illustration-schedule-posts.webp'
import platforms from './assets/images/illustration-multiple-platforms.webp'
import consistent from './assets/images/illustration-consistent-schedule.webp'
import aiContent from './assets/images/illustration-ai-content.webp'
import audience from './assets/images/illustration-audience-growth.webp'
import growth from './assets/images/illustration-grow-followers.webp'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
      <Container>
        <BentoElement className='a' background='lightYellow'>
          <Text size='20px' big color='black'>Create and schedule content <span color='darkPurple'>quicker</span></Text>
          <Image src={createPost} alt='Create a post' />
        </BentoElement>
        <BentoElement className='b' background='darkPurple'>
          <Text center size='25px' big color='white'>Social Media 10x <span color='darkYellow'>Faster</span> with AI</Text>
          <Image src={fiveStars} alt='five stars' width='50'/>
          <Text color='white' size='10px'>Over 4000 5-stars reviews</Text>
        </BentoElement>
        <BentoElement className='c' background='lightPurple'>
          <Text big color='black' size='20px'>Schedule to social media.</Text>
          <Image src={schedule} alt='schedule posts' relativePosition style={{left: '50px'}}/>
          <Text color='black' size='10px'>
            Optimize post timings to publish content at the perfect time for your audience
          </Text>
        </BentoElement>
        <BentoElement background='white' className="d">
          <Image src={platforms} alt='social media' relativePosition style={{left: '40px'}}/>
          <Text color='black' big size='20x'>Manage multiple accounts and platforms</Text>
        </BentoElement>
        <BentoElement background='darkYellow' className='e'>
          <Text color='black' big size='15px' textAlign='left'>Maintain a consistent posting schedule</Text>
          <Image src={consistent} alt='social media' relativePosition/>
        </BentoElement>
        <BentoElement background='darkYellow' className='f'>
          <Text color='black' big size='25px'>Write your content using AI.</Text>
          <Image src={aiContent} alt='ai content'/>
        </BentoElement>
        <BentoElement background='white' className='g'>
          <Text color='black' big size='20px'>56%</Text>
          <Text color='black' big size='10px'>faster audience growth</Text>
          <Image src={audience} alt='social media'/>
        </BentoElement>
        <BentoElement background='darkPurple' className='h' style={{flexDirection: 'row'}}>
          <Image src={growth} alt='social media' width='50'/>
          <Text color='white' big size='17px'>Grow followers with non-stop content</Text>
        </BentoElement>
      </Container>
      <Footer><p>Challenge by <a href='https://www.frontendmentor.io/home'>Frontend mentor</a>, coded by <a href='https://github.com/chapucrespo'>Chapu Crespo</a></p></Footer>
      </Main>
    </ThemeProvider>
  );
}

export default App;
