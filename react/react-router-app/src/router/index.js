import {createBrowserRouter} from "react-router-dom"
import mainRoutes from "./routes/mainRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import NotFound from "../pages/RootPages/NotFound.jsx";

const router = createBrowserRouter([...mainRoutes, ...authRoutes, {
    path: "*", Component: NotFound
}])

export default router