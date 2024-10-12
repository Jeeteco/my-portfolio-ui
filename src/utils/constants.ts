import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import DetailBoardPage from "../pages/detailboard/DetailBoardPage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import ProjectPage from "../pages/projects/ProjectPage";

export interface IRouteMaps{
  
    _id:number,
    name:string;
    URL:string;
    element:()=>JSX.Element
}

export const RouteMap:IRouteMaps[]=[
    {   
        _id:1,
        name:"home",
        URL:"/",
        element:HomePage
    },
    {   
        _id:2,
        name:"about",
        URL:"/about",
        element:AboutPage
    }
    ,
    {   
        _id:3,
        name:"contact",
        URL:"/contact",
        element:ContactPage
    }
    ,
    {   
        _id:4,
        name:"projects",
        URL:"/projects",
        element:ProjectPage
    },
    {   
        _id:5,
        name:"Login",
        URL:"/login",
        element:LoginPage
    },
    {   
        _id:6,
        name:"Detailboard",
        URL:"/detailboard",
        element:DetailBoardPage
    }
]

