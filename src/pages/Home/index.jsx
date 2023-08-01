import { Link } from "react-router-dom"
import "./style.scss"
import Header from "../../components/Header"
import  useFetch from "../../hooks/useFetch"
import Loading from "../../components/Loading/index"

function Home () {
    const data = useFetch('https://blog-page-server.onrender.com/posts')
    return <>
        {
            data ? <>
                <Header/>
                <main>
                    <section className="hero-section">
                        <div className="container hero-section__wrapper">
                            <div className="hero-section__explore">
                                <h3 className="hero-section__explore-title">What I do!</h3>
                                <p className="hero-section__explore-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                                <Link to={'/explore'} className="link">EXPLORE ME</Link>
                            </div>
                            <div className="hero-section__posts">
                                <h2 className="hero-section__posts-title">Recent Posts</h2>
                                <ul className="hero-section__posts-list">
                                    {
                                        data ? data.map(e => 
                                            <li className="hero-section__posts-item" key={e.post_id}>
                                                <div className="hero-section__item-wrapper">
                                                    <p className="hero-section__item-time">September 24.2020</p>
                                                    <p className="hero-section__item-category">{e.category_name}</p>
                                                </div>
                                                <Link to={`post/${e.post_id}`} className="hero-section__item-title link">{e.post_title}</Link>
                                                <p className="hero-section__item-user">{e.user_full_name}</p>
                                            </li>
                                        ) : <p>Up's. An error occurred on the server</p>
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </> : <Loading/>
        }
    </>
}

export default Home