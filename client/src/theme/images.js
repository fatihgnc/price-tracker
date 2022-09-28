import logo from '../assets/img/logo.png';
import logo2x from '../assets/img/logo@2x.png';
import logo3x from '../assets/img/logo@3x.png';
import logo4x from '../assets/img/logo@4x.png';

export const images = {
  logo: {
    src: logo,
    srcset: `${logo4x} 4x, ${logo3x} 3x, ${logo2x} 2x, ${logo} 1x`,
  },
};
