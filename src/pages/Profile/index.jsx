import { useEffect, useState } from "react";
import Loading from "../../components/Loading/index"
import Modal from "../../components/Modal/index"
import "./style.scss"
import { Link } from "react-router-dom";
// import EditPostModal from "../../components/EditPostModal";

function Profile () {
    const [data, setData] = useState(null) 
    const [isOpen, setIsOpen] = useState(false);
    // const [isOpenEdit, setIsOpenEdit] = useState(false);
    const token = localStorage.getItem("token")

    function deletePost(e) {
        const item = e.closest('.post-list__item')
        fetch(`https://blog-page-server.onrender.com/delete/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'token': token
            }
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            window.location.reload();
    }

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
                    <ul className="category-posts-list posts-list">
                        {
                            data.posts.map(e => <li className="post-list__item" key={e.post_id} id={e.post_id}>
                            <div className="hero-section__item-wrapper">
                                <p className="hero-section__item-time">September 24.2020</p>
                                <p className="hero-section__item-category">{e.category_name}</p>
                            </div>
                            <Link to={`post/${e.post_id}`} className="hero-section__item-title link">{e.post_title}</Link>
                            <p className="hero-section__item-user">{data.user_full_name}</p>
                            <span className="edit-post-wrapper">
                                {/* <button className="edit-post-btn" onClick={() => setIsOpenEdit(true)}>Edit</button> */}
                                {/* {isOpenEdit && <EditPostModal setIsOpenEdit={setIsOpenEdit}/>} */}
                                <button className="delete-post-btn" onClick={e => deletePost(e.target)}>Delete</button>
                            </span>
                        </li>)
                        }
                    </ul>
                </div>
            </section> : <Loading/>
        }
    </>
}

export default Profile