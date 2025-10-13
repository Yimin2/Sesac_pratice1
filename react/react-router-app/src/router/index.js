// 페이지 링크 컴포넌트
import {createBrowserRouter} from "react-router-dom"
import RootLayout from "../layout/RootLayout.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";
import ProtectedLayout from "../layout/ProtectedLayout.jsx";

import Home from "../pages/RootPages/Home.jsx";
import About from "../pages/RootPages/About.jsx";
import Profile from "../pages/RootPages/Profile.jsx";

import AuthHome from "../pages/AuthPages/AuthHome.jsx";
import Login from "../pages/AuthPages/Login.jsx";
import Signup from "../pages/AuthPages/Signup.jsx";
import PostList from "../pages/RootPages/PostList.jsx";
import PostDetail from "../pages/RootPages/PostDetail.jsx";

const router = createBrowserRouter([{
    path: "/", Component: RootLayout, children: [{
        index: true, Component: Home
    }, {
        path: "about", Component: About
    }, {
        path: "posts", Component: PostList
    }, {
        path: "posts/:postId", Component: PostDetail
    }, {
        Component: ProtectedLayout, children: [{
            path: "profile", Component: Profile
        }]
    }]
}, {
    path: "auth", Component: AuthLayout, children: [{
        index: true, Component: AuthHome
    }, {
        path: "login", Component: Login
    }, {
        path: "signup", Component: Signup
    }]
}])

export default router