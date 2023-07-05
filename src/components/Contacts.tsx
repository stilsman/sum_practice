import "../css/App.css";

export const Contacts = () => {
  return (
    <>
      <footer className="footer" id="contacts">
        <div className="container">
          <div className="footer-title">Contacts</div>
          <div className="footer-descr">
            Want to know more or just chat?
            <br />
            You are welcome!
          </div>
          <form action="footer-btn">
            <button className="btn">Send message</button>
          </form>

          <div className="footer-wrapper">
            <div className="footer-wrapper-link">
              <a href="#">
                <img
                  src="./src/assets/images/icon/icon-footer/icon-1.png"
                  alt="in"
                />
              </a>
            </div>
            <div className="footer-wrapper-link">
              <a href="#">
                <img
                  src="./src/assets/images/icon/icon-footer/icon-2.png"
                  alt="instagram"
                />
              </a>
            </div>
            <div className="footer-wrapper-link">
              <a href="#">
                <img
                  src="./src/assets/images/icon/icon-footer/icon-3.png"
                  alt="be"
                />
              </a>
            </div>
            <div className="footer-wrapper-link">
              <a href="#">
                <img
                  src="./src/assets/images/icon/icon-footer/icon-4.png"
                  alt="ball"
                />
              </a>
            </div>
          </div>
          <div className="footer-info">
            Like me on
            <br />
            LinkedIn, Instagram, Behance, Dribble
          </div>
        </div>
      </footer>
    </>
  );
};
