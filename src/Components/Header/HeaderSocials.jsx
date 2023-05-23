import { FaLinkedinIn } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { BsDribbble } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel='noreferrer'>
        <FaLinkedinIn />
      </a>
      <a href="https://github.com" target="_blank" rel='noreferrer'>
        <ImGithub />
      </a>
      <a href="https://dribbble.com/" target="_blank" rel='noreferrer'>
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
