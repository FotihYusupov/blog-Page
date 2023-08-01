import "./style.scss"
import { Link } from "react-router-dom"

function PostCard (props) {
    return <>
        <li className="hero-section__posts-item" key={props.post_id}>
            <div className="hero-section__item-wrapper">
                <p className="hero-section__item-time">September 24.2020</p>
                <p className="hero-section__item-category">{props.category_name}</p>
            </div>
            <Link to={`post/${props.post_id}`} className="hero-section__item-title link">{props.post_title}</Link>
            <p className="hero-section__item-user">{props.user_full_name}</p>
        </li>
    </>
}

export default PostCard;