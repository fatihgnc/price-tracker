import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { trackPrice } from './utils/request';
import { checkUrl } from './utils/url';

function App() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');

  return (
    <div className='flex flex-col px-[200px] w-screen'>
      <div className='flex border border-gray-700'>
        <div className='flex gap-x-4 items-center w-full flex-grow bg-gray-900 px-4 py-2 text-lg font-light'>
          <div className='flex-shrink-0'>
            <BiSearchAlt style={{ color: 'rgba(255,255,255,.76)' }} />
          </div>
          <input
            type='text'
            placeholder='(bershka/zara/hepsiburada/trendyol).com/product-you-wanna-track'
            onKeyUp={(e) => {
              setUrl(e.target.value);
              if (e.key === 'Enter') {
                if (checkUrl(url)) {
                  trackPrice(url);
                  setError('');
                  setUrl('');
                } else setError('Geçersiz bir adres girdiniz!');
              }
            }}
            className='w-full outline-none bg-transparent tracking-wider'
          />
        </div>
        <button
          onClick={(e) => trackPrice(url)}
          className='px-8 py-4 uppercase duration-150 opacity-80 flex-shrink-0 transition-all cursor-pointer text-black bg-white disabled:opacity-40'
          disabled={!checkUrl(url)}
        >
          TAKİP ET
        </button>
      </div>
      <div></div>
    </div>
  );
}
export default App;
