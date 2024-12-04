import { ThemeProvider } from "styled-components";
import theme from './config/theme'
import { Main, Container, Footer } from "./components/styled";
import CreateContent from "./components/CreateContent";
import FasterSocialMedia from "./components/FasterSocialMedia";
import SocialMediaSchedule from "./components/SocialMediaSchedule";
import MultipleAccounts from "./components/MultipleAccounts";
import ConsistentPosting from "./components/ConsistentPosting";
import WriteWithAI from "./components/WriteWithAI";
import AudienceGrowth from "./components/AudienceGrowth";
import GrowFollowers from "./components/GrowFollowers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
      <Container>
        <CreateContent/>
        <FasterSocialMedia />
        <SocialMediaSchedule />
        <MultipleAccounts />
        <ConsistentPosting />
        <WriteWithAI />
        <AudienceGrowth />
        <GrowFollowers />
      </Container>
      <Footer><p>Challenge by <a href='https://www.frontendmentor.io/home'>Frontend mentor</a>, coded by <a href='https://github.com/chapucrespo'>Chapu Crespo</a></p></Footer>
      </Main>
    </ThemeProvider>
  );
}

export default App;
