import "./App.css";
import styled from "styled-components";
import {Header, Main, Footer} from "./components";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div({
  height: "100vh",
  background: "white",
  padding: "0px",
  margin: "0px",
});

export default App;
