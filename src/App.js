import { ThemeProvider } from "styled-components";
import elements from "./mock/elements";
import theme from './config/theme'
import { Main, Container, BentoElement, Footer } from "./components/styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
      <Container>
        {elements.map((element) => (
          <BentoElement className={element.class}>{element.value}</BentoElement>
        ))}
      </Container>
      <Footer><p>Challenge by <a href='https://www.frontendmentor.io/home'>Frontend mentor</a>, coded by <a href='https://github.com/chapucrespo'>Chapu Crespo</a></p></Footer>
      </Main>
    </ThemeProvider>
  );
}

export default App;
