import { useSelector } from "react-redux";
import PostCard from '../PostCard/index'

function RenderCards () {
    let items = undefined
    items = useSelector((state) => state.items.items);

    const data = useSelector((state) => state.posts);
    console.log(data);
    if(items !== undefined) {
        return <>
            {
                items ? items.data.map(e => <PostCard key={e.post_id} post_id={e.post_id} category_name={e.category_name} post_title={e.post_title} user_full_name={'fotih'}/>) :
                <p>error</p>
            }
        </>
    }

    return <>
            {
                data.posts !== null ? <> {
                    data.posts ? data.posts.map(e => <PostCard key={e.post_id} post_id={e.post_id} category_name={e.category_name} post_title={e.post_title} user_full_name={e.user_full_name}/>) :
                    <p>error</p>
                } </> : <p>Loading</p>
            }
        </>
}

export default RenderCards