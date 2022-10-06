import { Routes, Route } from 'react-router-dom';
import Login from '../components/screens/Login';
import Main from '../components/screens/Main';
import Register from '../components/screens/Register';
import MainLayout from '../components/layout/MainLayout';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Main />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route
        path='*'
        element={
          <div className='text-red-500 font-semibold text-xl'>
            Page not found!
          </div>
        }
      />
    </Routes>
  );
}
