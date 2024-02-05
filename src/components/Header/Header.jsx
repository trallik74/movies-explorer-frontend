import Logo from "../Logo";
import Navigation from "../Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
