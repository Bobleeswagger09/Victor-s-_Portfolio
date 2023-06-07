import { CiFacebook } from 'react-icons/ci'
import { FiTwitter } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Victor Samuel</a>

      <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>

          
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
      </ul>

      <div className="footer__socials">
        <a href="https://web.facebook.com/?_rdc=1&_rdr"><CiFacebook/></a>
        <a href="https://twitter.com/EdidiongSammy09"><FiTwitter/></a>
        <a href='https://linkedin.com'><BsLinkedin/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; VICTOR SAMUEL. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer