import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import { getSearch } from "../../store/reducer/searchSlice";
import "./style.scss"
import NavBar from "./navBar"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Header () {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(null)

    useEffect(() => {
        dispatch(getSearch({title}))
        // eslint-disable-next-line
    }, [title])  

    return <header className="header container">
        <div className="header__wrapper">
            <Link to={"/"} className="link">
                <img src={logo} alt=""/>
                <p className="logo-text">BlogPage</p>
            </Link>
            {<NavBar/>}
            <input onInput={e => setTitle(e.target.value)} className="header__search" type="text" name="search" placeholder="Search Post"/>
            <Link className="link" to={'/profile'}>Profile</Link>
        </div>
    </header>
}

export default Header