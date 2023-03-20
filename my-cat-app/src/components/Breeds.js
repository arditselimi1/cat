import React, { useState, useEffect } from "react";
import { fetchBreeds, setFavorite } from "../api";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 405px;
  height: 350px;
  object-fit: cover;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

const Container = styled.div`
  border-radius: 4px;
  max-width: fit-content;
  padding: 10px;
  background-color: rgba(122, 145, 156, 0.2);
  color: white;
  font-weight: 700;
  margin: 10px;
`;

const StyledButton = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  
  useEffect(() => {
    fetchBreeds().then((response) => {
      return setBreeds(response?.data);
    });
  }, []);

  console.log(breeds);
  
  return (
    <div>
      <h2>Breeds</h2>

      <StyledContainer>
        {breeds.map((breed, idx) => (
          <Container key={idx}>
            <StyledImage src={breed?.image?.url} alt={breed.name} />
            <p key={breed.id}>NAME: {breed.name}</p>
                              ORIGIN: {breed.origin}
            <br/>
                          <br/>LIFESPAN: {breed.life_span}
            <br/>
                          <br/>TEMPERAMENT: {breed.temperament}
            <br/>
            <br/>
            <StyledButton>
              <button onClick={() => setFavorite(breed?.image?.id)}>
                FAVORITE
              </button>
            </StyledButton>
          </Container>
        ))}
      </StyledContainer>
    </div>
  );
}

export default Breeds;