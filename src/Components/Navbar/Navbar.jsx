import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsPersonWorkspace } from 'react-icons/bs';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        onClick={() => setActiveNav('home')}
        className={activeNav === '#' ? 'active' : ''}
        href="#">
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BsFillBookmarkFill />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <BsPersonWorkspace />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <TbMessageCircle2Filled />
      </a>
    </nav>
  );
};

export default Navbar;
