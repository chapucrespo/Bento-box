import { BentoElement } from "./components/BentoElement";
import Container from "./components/Container";
import elements from "./mock/elements";

function App() {
  return (
    <Container>
      {elements.map((element) => (
        <BentoElement className={element.class}>{element.value}</BentoElement>
      ))}
    </Container>
  );
}

export default App;
