import { useState } from "react";
import "./style.scss"

function Auth () {
    const [fullName, setFullName] = useState([])
    const [userName, setUserName] = useState([])
    const [password, setPassword] = useState([])

    async function signIn (e) {
        e.preventDefault()
        let res = await fetch('https://blog-page-server.onrender.com/sign-in', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user_full_name: fullName,
                user_name: userName,
                user_password: password
            })
        })
        let data = await res.json()
        if(data.status === 200) {
            localStorage.setItem("token", JSON.stringify(data.token))
        }
        window.location.reload(false);
    }

    async function logIn (e) {
        e.preventDefault()
        let res = await fetch('https://blog-page-server.onrender.com/log-in', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user_name: userName,
                user_password: password
            })
        })
        let data = await res.json()
        if(data.status === 200) {
            localStorage.setItem("token", JSON.stringify(data.token))
        } else {
        }
        window.location.reload(false);
    }

    function updateClass (e) {
        const wrapper = e.closest(".wrapper")
        wrapper.classList.toggle("wrapper-login")
    }

    return <>
        <div className="container">
            <div className="wrapper">
                <form className="sign-in-from">
                    <h1 className="sign-in-from__title">Sign In </h1>
                    <input className="sign-in-from__input" type="text" name="user_full_name" required placeholder="Full Name"
                    onInput={e => setFullName(e.target.value)}/>
                    <input className="sign-in-from__input" type="text" name="user_name" required placeholder="User Name"
                    onInput={e => setUserName(e.target.value)}/>
                    <input className="sign-in-from__input" type="password" name="user_password" required placeholder="User Password"
                    onInput={e => setPassword(e.target.value)}/>
                    <button className="sign-in-from__btn" onClick={signIn}>Submit</button>
                    <p className="sign-up-log-in" onClick={e => updateClass(e.target)}>Already have an account? Log in here.</p>
                </form>
                <form className="log-in-from">
                    <h1 className="sign-in-from__title">Log In </h1>
                    <input className="sign-in-from__input" type="text" name="user_name" required placeholder="User Name"
                    onInput={e => setUserName(e.target.value)}/>
                    <input className="sign-in-from__input" type="password" name="user_password" required placeholder="User Password"
                    onInput={e => setPassword(e.target.value)}/>
                    <button className="sign-in-from__btn" onClick={logIn}>Submit</button>
                    <p className="sign-up-log-in" onClick={e => updateClass(e.target)}>Already have an account? Sign in here.</p>
                </form>
            </div>
        </div>
    </>
}

export default Auth