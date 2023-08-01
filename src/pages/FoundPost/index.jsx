import { Link, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Header from "../../components/Header/index"
import Loading from "../../components/Loading/index"
import "./style.scss"

function FoundPost () {
    const { id } = useParams()
    const data  = useFetch(`https://blog-page-server.onrender.com/post/${id}`)
    let posts  = useFetch('https://blog-page-server.onrender.com/posts')
    posts = posts ? posts.slice(0, 3) : []
    return <>
        <Header/>
        {
            data ? <section className="found-post">
                <div className="container">
                    <div className="found-post__wrapper">
                        <p className="found-post__user">{data.data.user_full_name}</p>
                        <h1 className="found-post__title">{data.data.post_title}</h1>
                        <p>October 24, 2020</p>
                        <img className="found-post__img" src={data.data.post_img} alt="" width="735" height="352"/>
                        <p className="found-post__desc">{data.data.post_body}</p>
                        <ul className="hero-section__posts-list">
                            {
                                posts ? posts.map(e => 
                                    <li className="hero-section__posts-item" key={e.post_id}>
                                        <div className="hero-section__item-wrapper">
                                            <p className="hero-section__item-time">September 24.2020</p>
                                            <p className="hero-section__item-category">{e.category_name}</p>
                                        </div>
                                        <Link to={`post/${e.post_id}`} className="hero-section__item-title link">{e.post_title}</Link>
                                        <p className="hero-section__item-user">{e.user_full_name}</p>
                                    </li>
                                ) : <Loading/>
                            }
                        </ul>
                    </div>
                </div>
            </section>: <Loading/> 
        }
    </>
}

export default FoundPost