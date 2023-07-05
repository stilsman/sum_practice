import "../css/App.css";

export const Portfolio = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio-title">Portfolio</div>
          <div className="portfolio-wrapper">
            <div className="portfolio-wrapper-items">
              <img
                src="./src/assets/images/screen/screen-1.png"
                alt="Sale_Store"
                className="portfolio-wrapper-items-img"
              />
              <a href="#" className="portfolio-wrapper-items-link">
                Online fashion store - Homepage
              </a>
            </div>
            <div className="portfolio-wrapper-items">
              <img
                src=" ./src/assets/images/screen/screen-2.png"
                alt="Sale_Store"
                className="portfolio-wrapper-items-img"
              />
              <a href="#" className="portfolio-wrapper-items-link">
                Reebok Store - Concept
              </a>
            </div>
            <div className="portfolio-wrapper-items">
              <img
                src=" ./src/assets/images/screen/screen-3.png"
                alt="Sale_Store"
                className="portfolio-wrapper-items-img"
              />
              <a href="#" className="portfolio-wrapper-items-link">
                Braun Landing Page - Concept
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
