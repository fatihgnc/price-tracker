import logo from '../assets/img/logo.png';
import logo2x from '../assets/img/logo@2x.png';
import logo3x from '../assets/img/logo@3x.png';
import logo4x from '../assets/img/logo@4x.png';

export const images = {
  logo: {
    src: logo,
    srcset: `${logo4x} 4x, ${logo3x} 3x, ${logo2x} 2x, ${logo} 1x`,
  },
  bg: {
    src: "url('https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg?w=2000&t=st=1664401059~exp=1664401659~hmac=7f22b4dd7a0f428d7f00dc8472746022eee76ec4c31875e9ef040cd4ab29ce15')",
  },
};
