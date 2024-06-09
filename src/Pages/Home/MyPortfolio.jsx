import React, { useEffect, useRef } from "react";
import data from "../../data/index.json";

export default function MyPortfolio() {
  const portfolioRef = useRef();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-out');
          } else {
            entry.target.classList.remove('pop-out');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = portfolioRef.current.querySelectorAll('.portfolio--section--card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={() => scrollToSection('free-trail')}>
            Get Free Trail Here
          </button>
        </div>
      </div>
      <div className="portfolio--section--container" ref={portfolioRef}>
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
