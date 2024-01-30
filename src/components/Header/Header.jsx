import Logo from "../Logo";
import Navigation from "../Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
