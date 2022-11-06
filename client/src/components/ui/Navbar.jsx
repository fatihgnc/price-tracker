import { Link } from 'react-router-dom';
import { MdLogin } from 'react-icons/md';

import { images } from '../../theme/images';
import { useSelector } from 'react-redux';

export default function Navbar({ onLogout }) {
  const { token } = useSelector((state) => state.auth);

  return (
    <nav className='py-5 px-20 flex justify-between items-center gap-x-10 relative'>
      <div className='flex items-center py-5 px-10 cursor-pointer'>
        <img
          src={images.logo.src}
          srcSet={images.logo.srcset}
          alt='logo'
          className='cursor-pointer'
        />
        <span className='uppercase tracking-wider text-2xl font-semibold'>
          Price Tracker
        </span>
      </div>
      <ul className='flex gap-x-8'>
        {!token ? (
          <>
            <li className='text-lg font-medium text-white uppercase tracking-wider cursor-pointer'>
              <Link to='/register'>Register</Link>
            </li>
            <li className='text-lg font-medium text-white uppercase tracking-wider cursor-pointer'>
              <Link to='/login'>
                <MdLogin size={30} />
              </Link>
            </li>
          </>
        ) : (
          <li className='text-lg font-medium text-white uppercase tracking-wider cursor-pointer'>
            <button onClick={onLogout}>Log out</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
