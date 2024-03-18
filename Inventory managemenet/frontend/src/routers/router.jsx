import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import App from "../App";
  import  DashboardLayout  from "../pages/inventory/inventory dashboard/DashboardLayout";
  import Dashboard from '../pages/inventory/inventory dashboard/Dashboard'; 
  import AddInventory from '../pages/inventory/inventory dashboard/AddInventory'; 
  import ManageInventory from '../pages/inventory/inventory dashboard/ManageInventory';
  import EditInventory from '../pages/inventory/inventory dashboard/EditInventory';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,

        children:[
            {
              path:"/admin/dashboard",
              element:<Dashboard/>
            },{
              path:"/admin/dashboard/AddInventory",
              element:<AddInventory/>
            },
            {
                path:"/admin/dashboard/manage",
                element:<ManageInventory/>
            },
            {
                path:"/admin/dashboard/edit-inventory/:id",
                element:<EditInventory/>,
                loader:({params})=>fetch(`http://localhost:5555/inventory/${params.id}`)
            },
           
              
          
          ]
    }
  ]);  

  export default router