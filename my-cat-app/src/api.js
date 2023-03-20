import axios from "axios";

const API_KEY = "live_vG0cmMAG8xDP9VyC7orN9zNOdYzX8rJV546J4v9ZBqpszCHhpEA9wvOmWevmTOgm";

const setFavorite = (imageId) => {
  axios.post("https://api.thecatapi.com/v1/favourites",{image_id:imageId},{
    headers: {
        'x-api-key': API_KEY
    },
    }).then((response)=>{
      window.location.reload();
      console.log(response.id);
    })
}
  
const fetchBreeds = async () => {
  try {
    const response = axios.get('https://api.thecatapi.com/v1/breeds', {
      headers: {
        "x-api-key": API_KEY
      }
    })
    return response;
  } catch (error) {
    console.error(error);
  }
};

const fetchFavorites = async () => {
    try {
    const response = axios.get('https://api.thecatapi.com/v1/favourites', {
      headers: {
        "x-api-key": API_KEY
      }
    })
    return response;
  } catch (error) {
    console.error(error);
  }
};


const deleteFavorite = (favoriteId) => {
  axios
    .delete(`https://api.thecatapi.com/v1/favourites/${favoriteId}`, {
      headers: {
        "x-api-key": API_KEY
      },
    })
    .then((response) => {
      window.location.reload();
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

const fetchSingleFavorites = async (id) => {
  try {
  const response = axios.get(`https://api.thecatapi.com/v1/favourites/${id}`, {
    headers: {
      "x-api-key": API_KEY
    }
  })
  return response;
} catch (error) {
  console.error(error);
}
};

export { fetchBreeds, fetchFavorites, deleteFavorite, setFavorite, fetchSingleFavorites };
