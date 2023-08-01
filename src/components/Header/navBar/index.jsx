import { Link } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"

function NavBar () {

    const categories = useFetch('https://blog-page-server.onrender.com/categories')

    return <>
            <ul className="header__nav">
                {
                    categories ? categories.data.map(e => <li className="header__nav-item" id={e.category_id} key={e.category_id}>
                        <Link className="link" to={`/category/${e.category_id}`}>{e.category_name}</Link>
                    </li>) : <></>
                }
            </ul>
    </>
}

export default NavBar