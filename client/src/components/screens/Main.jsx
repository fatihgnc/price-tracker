import { useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { trackPrice } from '../../utils/request';
import { checkUrl } from '../../utils/url';

export default function Main() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      alert(error);
      setError('');
    }
  }, [error]);

  const processRequest = () => {
    if (checkUrl(url)) {
      trackPrice(url);
      setError('');
      setUrl('');
    } else setError('Geçersiz bir adres girdiniz!');
  };

  return (
    <div className='flex flex-col flex-grow justify-center rounded-xl px-10 md:px-[150px]'>
      <div className='flex'>
        <div className='flex gap-x-4 items-center w-full flex-grow bg-black text-white text-lg font-light'>
          <input
            type='text'
            placeholder='(bershka/amazon/hepsiburada/trendyol).com/your-dream-product'
            onKeyUp={(e) => {
              setUrl(e.target.value);
              if (e.key === 'Enter') {
                processRequest();
              }
            }}
            className='w-full outline-none bg-transparent tracking-wider p-8'
          />
        </div>
        <button
          onClick={processRequest}
          className='group px-10 uppercase duration-75 flex-shrink-0 bg-black transition-all cursor-pointer '
          disabled={!checkUrl(url)}
        >
          <AiOutlineSend size={25} className='group:hover:text-gray-900' />
        </button>
      </div>
      <div className='bg-gray-900 h-[70%] max-h-[600px] p-10 grid place-items-center overflow-y-auto text-2xl'>
        Your products that are being tracked will appear in here.
      </div>
    </div>
  );
}
