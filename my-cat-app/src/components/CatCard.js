import React from "react";
import { deleteFavorite } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  border-radius: 4px;
  max-width: fit-content;
  padding: 10px;
  background-color: rgba(122, 145, 156, 0.2);
  font-weight: 700;
  margin: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 400px;
  height: 350px;
  object-fit: cover;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledButton = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CatCard({ cat }) {
  return (
    <Container>
      <Link key={cat.id} to={"/single-favorite"} state={{ id: cat?.id }}>
        <StyledDiv>
          <StyledImage src={cat?.image?.url} alt={cat.name} />
        </StyledDiv>
      </Link>
        <br/>
      <StyledButton>
        <button onClick={() => deleteFavorite(cat?.id)}>DELETE</button>
      </StyledButton>
    </Container>
  );
}

export default CatCard;