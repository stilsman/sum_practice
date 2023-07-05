import "../css/App.css";

export const Home = () => {
  return (
    <>
      <div className="header-line"></div>
      <div className="header-main">
        <div className="header-main-info">
          <h1 className="header-main-info-title">
            Denis
            <br /> Novik
          </h1>
          <div className="header-main-info-subtitle">
            UX | UI designer
            <br />
            24 years old, Minsk
          </div>
          <div className="header-main-info-lang">
            <a href="#">RU</a>
            <a href="#">ENG</a>
          </div>
        </div>
        <img
          src="./src/assets/images/bg/header-bg.png"
          alt="Desinger"
          className="header-img"
        />
      </div>
    </>
  );
};
