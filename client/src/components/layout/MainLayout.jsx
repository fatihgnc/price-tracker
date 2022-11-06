import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import Navbar from '../ui/Navbar';
import { images } from '../../theme/images';
import { authActions } from '../../store/slices/auth.slice';

export default function MainLayout() {
  // If user is not authenticated, navigate to login page.
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authActions.logout());
  };

  if (!token) return <Navigate to='/login' />;
  return (
    <div
      className='w-screen h-screen flex flex-col'
      style={{
        backgroundImage: images.bg.src,
        backgroundSize: 'cover',
      }}
    >
      <Navbar onLogout={onLogout} />
      <Outlet />
    </div>
  );
}
