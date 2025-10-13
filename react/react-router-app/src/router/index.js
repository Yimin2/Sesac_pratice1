// 페이지 링크 컴포넌트
import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Profile from "../pages/Profile.jsx";

const router = createBrowserRouter([{
    path: "/", Component: Home,
}, {
    path: "/about", Component: About,
},{
    path: "/profile", Component: Profile,
},

])

export default router