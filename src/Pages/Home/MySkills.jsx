import data from "../../data/index.json";

export default function MySkills() {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">What We Do?</p>
        <h2 className="skills--section--heading">Our Services</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
        
      </div>
      <button className="btn btn-github" onClick={() => scrollToSection('free-trail')}>
            Click Here For FREE Trail
          </button>
    </section>
  );
}
