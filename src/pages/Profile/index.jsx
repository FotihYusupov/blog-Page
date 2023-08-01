import { useEffect, useState } from "react";
import Loading from "../../components/Loading/index"
import Modal from "../../components/Modal/index"
import PostCard from "../../components/PostCard/index"
import "./style.scss"

function Profile () {
    const [data, setData] = useState(null) 
    const [isOpen, setIsOpen] = useState(false);

    const token = localStorage.getItem("token")
    
    useEffect(() => {
        fetch('https://blog-page-server.onrender.com/profile', {
        headers: {
            'Content-type': 'application/json',
            'token': token
        }
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <>
        {
            data !== null ? <section className="profile">
                <div className="container">
                    <div className="profile__wrapper">
                        <h1>{data.user_full_name}</h1>
                        <h3>{data.user_name}</h3>
                        <p>Posts: {data.posts.length}</p>
                    <button className="add-post-btn" onClick={() => setIsOpen(true)}>Add Post</button>
                    {isOpen && <Modal setIsOpen={setIsOpen} />}
                    </div>
                    <h3>You Posts</h3>
                    <ul className="category-posts-list">
                        {
                            data.posts.map(e => <PostCard key={e.post_id} post_id={e.post_id} category_name={e.category_name} post_title={e.post_title} user_full_name={data.user_full_name}/>)
                        }
                        <PostCard />
                    </ul>
                </div>
            </section> : <Loading/>
        }
    </>
}

export default Profile