import React, { useState } from "react";
import { useNavigate, } from 'react-router-dom';
import useFetch from "../../hooks/useFetch"
import { RiCloseLine } from "react-icons/ri";


const EditPostModal = ({ setIsOpenEdit }) => {
  const token = localStorage.getItem('token')
  let navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState([])

  let categories = useFetch('https://blog-page-server.onrender.com/categories')

  async function editPost (e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('post_title', title)
    formData.append('post_body', body)
    formData.append('post_category', category)
    formData.append('image', file, "0")

    if(file) {
      let res = await fetch('https://blog-page-server.onrender.com/add-post', {
      method: 'POST',
      headers: {
        'token': token
      },
      body: formData
    })
    let req = await res.json()
    // eslint-disable-next-line no-cond-assign
    if(req.status === 200) {
      navigate('/');
      window.location.reload();
    }
    }
  }

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpenEdit(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Edit Post</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpenEdit(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <form onSubmit={editPost}>
              <input className="add-post-input" type="text" name="post_title" placeholder="Post Title" required
              onChange={e => setTitle(e.target.value)}/>
              <input className="add-post-input" type="text" name="post_body" placeholder="Post Body" required
              onChange={e => setBody(e.target.value)}/>
              <select className="add-post-input" name="post_category" onChange={e => setCategory(e.target.value)}>
                {
                  categories ? categories.data.map(e => <option key={e.category_id} id={e.category_id} value={e.category_id}>{e.category_name}</option>) : <></>
                }
              </select>
              <label htmlFor="file">Choose a file</label>
              <input className="inputfile post-img" id="file" type="file" name="image" onInput={e => setFile(e.target.files[0])}/>
              <button className="add-post__btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPostModal;