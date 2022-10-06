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
    src: "url('https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg?w=2000&t=st=1665093192~exp=1665093792~hmac=a28a09ff3c0136dd942d92f7edbd87fa121426dd3871f9a65132bb1f504357d9')",
  },
};
