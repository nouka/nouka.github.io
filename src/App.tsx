import React from "react";
import styled from "styled-components";
import MainScreen from "./components/screen/MainScreen";
import Header from "./components/share/components/Header";

const Page = styled.div`
  position: relative;
`;

function App() {
  return (
    <Page>
      <Header />
      <MainScreen />
    </Page>
  );
}

export default App;
