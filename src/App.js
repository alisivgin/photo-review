import styled from "styled-components";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Header />
      <Gallery />
      <Modal />
    </Container>
  );
}

export default App;
