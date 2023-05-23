import './Portfolio.css';
import {content}  from '../../assets/data'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <h5>My Recent Work</h5>
      <div className="container portfolio_container">
        {content.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_items">
              <div className="portfolio_items-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank" rel='noreferrer'>
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel='noreferrer'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
