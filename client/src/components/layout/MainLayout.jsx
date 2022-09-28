import Navbar from '../ui/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MainLayout() {
  const token = useSelector((state) => state.auth.token);
  if (token) return <Navigate to='/login' />;
  return (
    <div
      className='w-screen h-screen flex flex-col'
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg?w=2000&t=st=1664401059~exp=1664401659~hmac=7f22b4dd7a0f428d7f00dc8472746022eee76ec4c31875e9ef040cd4ab29ce15')",
        backgroundSize: 'cover',
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
