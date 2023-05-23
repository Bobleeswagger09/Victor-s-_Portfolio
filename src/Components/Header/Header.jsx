import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me_02.png';
import HeaderSocials from './HeaderSocials';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="header">
        <h5>Hello I`m</h5>
        <h1>Victor Samuel</h1>
        <h4 className="text-light">
          <Typewriter
            options={{
              strings: [
                'The Purpose of Man is to learn and to Create',
                'React Developer 😎',
                'Currrently learning The MERN Stack  🔥',
                'Life Hack: Learn More, Fear Less',
                'Break Things',
                'Fix emm'
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2800,
            }}
          />
        </h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
