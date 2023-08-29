import { Link } from "react-router-dom"
import "./style.scss"
import Header from "../../components/Header"
import Loading from "../../components/Loading/index"
import RenderCards from "../../components/renderCards"
import { useSelector } from "react-redux"

function Home () {
    const data = useSelector((state) => state.posts);
    return <>
        {
            data.posts ? <>
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
                                    <RenderCards/>
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