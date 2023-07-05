import "../css/App.css";

export const HeaderMenu = () => {
  return (
    <>
      <ul className="menu">
        <li className="menu-item">
          <a href="#header">Home</a>
        </li>
        <li className="menu-item">
          <a href="#info">About me</a>
        </li>
        <li className="menu-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="menu-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="menu-item">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </>
  );
};
