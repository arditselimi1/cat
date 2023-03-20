import React from "react";
import Breeds from "./components/Breeds";
import Favorites from "./components/Favorites";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px;
`;

function App() {
  return (
    <StyledDiv>
      <h1>The Cat App</h1>
      <Favorites />
      <Breeds />
    </StyledDiv>
  );
}

export default App;
