
export default function Header(props) {
  return (
    <header className="header">
      <img src={props.logo} alt="React logo" className="header--logo" />
      <h3 className="header--title">{props.title}</h3>
    </header>
  );
}
