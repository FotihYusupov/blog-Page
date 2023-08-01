import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import PostCard from "../../components/PostCard/index"
import Loading from "../../components/Loading/index"
import "./style.scss"

function Category() {
    const { id } = useParams()
    
    const data = useFetch(`https://blog-page-server.onrender.com/category/${id}`)

    return <>
        {
            data ? <div className="container category-wrapper">
                <ul className="category-posts-list">
                    {
                        data.data.map(e => <PostCard key={e.post_id} post_id={e.post_id} category_name={e.category_name} post_title={e.post_title} user_full_name={e.user_full_name}/>)
                    }
                </ul>
            </div> : <Loading/>
        }
    </>
}

export default Category;