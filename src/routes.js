import Login from "./components/Login"
import Join from "./components/Join"
import Main from './components/Main'

const routes = [                 
    {path: "/", element: <Login />},
    {path: "/join", element: <Join />},
    {path: "/main", element: <Main /> }
]

export default routes;