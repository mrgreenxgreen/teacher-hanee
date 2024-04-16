import { createBrowserRouter } from "react-router-dom";
import { LoremIpsum } from "../components/LoremIpsum";
import John from "../components/John";
import App from "../App";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Sample from "../pages/Sample";

export const Router = createBrowserRouter([
    {
        path:"teacher-hanee",
        element:<App/>,
        children: [{
            path: "home",
            element: <Home/>
        },
        {
            path:"profile",
            element:<Profile/>
        },
       
        
        ]
    },
    {
        path:"sample",
        element:<Sample/>
    }

])