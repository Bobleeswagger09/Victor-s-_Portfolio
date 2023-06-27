import './About.css';
import Me from '../../assets/me.jpg';
import { FiAward } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
              <small> Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            Hi there!
            <br />
            I’m Victor Samuel, a Web Developer with over 2years of experience in area of
            computer programming . I build things for the web and I’m passionate
            about utilizing new technologies to make better user experience for
            customers. I thrive in collaborative environments and love working
            on project that challenge me to learn new technologies and
            techniques. I’m highly motivated to provide legendary service to
            customers and teammate, as well as encouraging thought of new
            possibilities.
            <br />
            My specialties include Javascript and React.js and am always looking
            for opportunities to apply this skills to create intuitive and
            user-friendly web applications.
            <br />
            <br />
            If you’re looking for a skilled and motivated frontend developer
            for your team, feel free to connect with me. i’m always open to new opportunities and
            partnerships.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
