import Generic from "../components/Generic";
import Home from '../components/Home'

export const navbar = [
    {
        id : 1,
        title:"Home",
        path: "/",
        Element: Home,
        hidden: false
    },
    {
        id : 2,
        title:"Shop",
        path: "/shop",
        Element: Generic,
        hidden: false
    },
    {
        id : 3,
        title:"Plant care",
        path: "/plant",
        Element: Generic,
        hidden: false
    },
    {
        id : 4,
        title:"Blogs",
        path: "/blogs",
        Element: Generic,
        hidden: false
    },
]