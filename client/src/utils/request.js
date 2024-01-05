import { LOCAL_API_URL } from './constants';

export const trackPrice = (url) => {
  fetch(LOCAL_API_URL + `price/?url=${encodeURI(url)}`)
    .then((res) => res.json())
    .then((data) => alert(JSON.stringify(data, null, 2)))
    .catch((error) => console.log(error));
};
