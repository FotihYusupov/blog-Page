import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import "./style.scss"
import NavBar from "./navBar"

function Header () {
    return <header className="header container">
        <div className="header__wrapper">
            <Link to={"/"} className="link">
                <img src={logo} alt=""/>
                <p className="logo-text">BlogPage</p>
            </Link>
            {<NavBar/>}
            <input  className="header__search" type="text" name="search" placeholder="Search Post"/>
            <Link className="link" to={'/profile'}>Profile</Link>
        </div>
    </header>
}

export default Header