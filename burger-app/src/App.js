import "./App.css";
import styled from "styled-components";
import {Header, Banner, Main} from "./components";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Banner />
      <Main />
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
