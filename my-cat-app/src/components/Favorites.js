import React, { useState, useEffect } from "react";
///import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchFavorites } from "../api";
import CatCard from "./CatCard";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  border-radius: 4px;
  max-width: fit-content;
  padding: 10px;
  background-color: rgba(122, 145, 156, 0.2);
  margin: 11px;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites().then((data) => {
      return setFavorites(data?.data);
    });
  }, []);

  return (
    <div>
      <h3>Favorite Cats</h3>
      <StyledContainer>
        {favorites.length > 0 && favorites.map((favorite) => (
          <CatCard key={favorite.id} cat={favorite} />
        ))}
      </StyledContainer>
    </div>
  );
}

export default Favorites;
