import Navbar from '../ui/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { images } from '../../theme/images';

export default function MainLayout() {
  const token = useSelector((state) => state.auth.token);
  if (token) return <Navigate to='/login' />;
  return (
    <div
      className='w-screen h-screen flex flex-col'
      style={{
        backgroundImage: images.bg.src,
        backgroundSize: 'cover',
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
