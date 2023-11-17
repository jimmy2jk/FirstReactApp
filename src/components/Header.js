import logo from "../images/logo192.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="React logo" className="header--logo" />
      <h3 className="header--title"></h3>
    </header>
  );
}
