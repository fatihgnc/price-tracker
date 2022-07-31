import { useState } from 'react';

const getPrice = (url) => {
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

function App() {
  const [url, setUrl] = useState('');

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='enter product url'
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={(e) => getPrice(url)}>fiyatı al</button>
    </div>
  );
}
export default App;
