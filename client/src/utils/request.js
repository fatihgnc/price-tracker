export const trackPrice = (url) => {
  fetch('http://localhost:3001', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
