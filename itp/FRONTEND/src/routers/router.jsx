import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Dashboard from "../pages/Dashboard"
import DashboardLayout from "../pages/DashboardLayout";
import CreateMaintain from "../pages/CreateMaintain"
import ViewMaintain from "../pages/ViewMaintain";
import UpdateMaintain from "../pages/UpdateMaintain";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path:"/dashboard",
        element:<DashboardLayout/>,

        children:[
            {
              path:"/dashboard",
              element:<Dashboard/>,
            },{
              path:"/dashboard/view",
              element:<ViewMaintain/>
            },
            {
              path:"/dashboard/create",
              element:<CreateMaintain/>
            },
           {
              path: "/dashboard/update/:id",
             element: <UpdateMaintain />,
             loader:({params})=>fetch(`http://localhost:8070/maintain/${params.id}`)
            },
           
              
          
          ]
    }

    
  ]);

  export default router;