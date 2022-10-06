import { Link } from 'react-router-dom';
import useProxyState from '../../utils/hooks/useProxyState';
import { images } from '../../theme/images';

export default function Register() {
  const [loginState, setLoginState] = useProxyState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onEmailChange = (e) => {
    setLoginState({ email: e.target.value });
  };

  const onPasswordChange = (e) => {
    setLoginState({ password: e.target.value });
  };

  const onConfirmPasswordChange = (e) => {
    setLoginState({ confirmPassword: e.target.value });
  };

  return (
    <div
      className='w-screen h-screen grid place-items-center'
      style={{
        backgroundImage: images.bg.src,
        backgroundSize: 'cover',
      }}
    >
      <div className='flex gap-y-5 px-10 pt-6 pb-10 items-center justify-center flex-col border w-[60%]'>
        <h1 className='self-start text-xl font-semibold tracking-wide mb-2'>
          REGISTER
          <p className='text-base font-medium'>
            {' '}
            to join this mysterious world!
          </p>
        </h1>
        <div className='w-full'>
          <label htmlFor='email' className='uppercase font-medium text-sm'>
            E-mail
          </label>
          <input
            type='text'
            id='email'
            placeholder='your-mail@gmail.com'
            className='block w-full py-3 px-6 outline-none mt-1 text-sm font-medium bg-transparent text-white bg-gray-600'
            value={loginState.email}
            onChange={onEmailChange}
          />
        </div>
        <div className='w-full'>
          <label htmlFor='password' className='uppercase font-medium text-sm'>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='********'
            className='block w-full py-3 px-6 outline-none mt-1 text-sm font-medium bg-transparent text-white bg-gray-600'
            value={loginState.password}
            onChange={onPasswordChange}
          />
        </div>
        <div className='w-full'>
          <label
            htmlFor='confirm-password'
            className='uppercase font-medium text-sm'
          >
            Confirm Password
          </label>
          <input
            type='password'
            id='confirm-password'
            placeholder='********'
            className='block w-full py-3 px-6 outline-none mt-1 text-sm font-medium bg-transparent text-white bg-gray-600'
            value={loginState.confirmPassword}
            onChange={onConfirmPasswordChange}
          />
        </div>
        <div className='w-full'>
          <button
            type='submit'
            className='text-sm bg-gray-600 uppercase font-regular px-6 py-3'
          >
            Submit
          </button>
        </div>
        <p className='self-start'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-500 font-semibold'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
