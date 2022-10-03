import { LOCAL_API_URL } from "./constants";

export const trackPrice = (url) => {
  fetch(LOCAL_API_URL, {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => alert(error.message));
};
