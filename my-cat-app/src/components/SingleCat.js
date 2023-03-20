import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSingleFavorites } from "../api";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 auto;
  margin-top: 200px;
  border-radius: 4px;
  max-width: fit-content;
  padding: 20px;
  background-color: rgba(122, 145, 156, 0.2);
`

const StyledImage = styled.img`
  justify-content: center;
  align-items: center;
  height: 50vh;
  object-fit: cover;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`

export default function SingleCat() {
  const [singleFavorite, setSingleFavorite] = useState([]);
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    fetchSingleFavorites(id).then((data) => {
      return setSingleFavorite(data?.data);
    });
  }, [id]);


  return (  
    <StyledDiv>
      <StyledImage src={singleFavorite?.image?.url} alt={singleFavorite.name} />
    </StyledDiv>
  );
}