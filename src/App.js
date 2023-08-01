import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/index";
import Auth from "./pages/Auth/index"
import Home from "./pages/Home/index"
import FoundPost from "./pages/FoundPost/index"
import Explore from "./pages/explore/index"
import Category from "./pages/Category";
import Profile from "./pages/Profile/index"

function App() {
  const token = localStorage.getItem("token")
  if(!token) {
    return <Auth/>
  }

  return <>
      <Routes>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/post/:id" element={<FoundPost/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  </>
}

export default App;