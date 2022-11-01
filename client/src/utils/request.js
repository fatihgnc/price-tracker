import { LOCAL_API_URL } from './constants';

export const trackPrice = (url) => {
  fetch(LOCAL_API_URL + `/price/?url=${url}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => alert(error.message));
};
