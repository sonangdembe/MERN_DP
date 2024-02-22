
import {createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
    {
        path : '/',
        element : <h1>this is home page</h1>
    },
    {
        path : '/about',
        element : <h1>hello this about page</h1>
    }
])
export default router