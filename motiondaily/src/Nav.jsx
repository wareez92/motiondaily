import { Link } from "react-router";
import Logo from "./Logo";
function Nav() {
  return (
    <>
        <header>
             <Logo />
        <ul>
            <li><Link to="/">Home</Link></li>          
            <li><Link to="/">Promo</Link></li>          
            <li><Link to="/">Why Us</Link></li>          
            <li><Link to="/">About</Link></li>          
            <li><Link to="/">Contact Us</Link></li>          
        </ul>
        </header>
    </>
  );
}

export default Nav;
