import axios from 'axios';

function getPhoto(query, pageNumber = 1) {
  axios.defaults.baseURL = 'https://pixabay.com/api';
  const key = '19379820-4cfc4b0a180a6a272d7492e1f';

  return axios
    .get(
      `/?q=${query}&page=${pageNumber}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits)
    .then(photos => {
      return photos.reduce((cleanArray, photo) => {
        cleanArray.push({
          id: photo.id,
          webformatURL: photo.webformatURL,
          largeImageURL: photo.largeImageURL,
        });
        return cleanArray;
      }, []);
    });
}

export default getPhoto;
