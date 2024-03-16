import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/landingPage/Home";
import AdminDashboardLayout from "../pages/Reservations/admin_dashboard/DashboardLayout";
import AdminDashboard from "../pages/Reservations/admin_dashboard/Dashboard";
import AdminManageReservations from "../pages/Reservations/admin_dashboard/ManageReservations";
import AdminViewReservation from "../pages/Reservations/admin_dashboard/ViewReservation";
import ClientDashboardLayout from "../pages/Reservations/client_dashboard/DashboardLayout";
import ClientDashboard from "../pages/Reservations/client_dashboard/Dashboard";
import ClientManageReservations from "../pages/Reservations/client_dashboard/ManageReservations";
import ClientViewReservation from "../pages/Reservations/client_dashboard/ViewReservation";
import ClientCreateReservation from "../pages/Reservations/client_dashboard/CreateReservation";
import ClientUpdateReservation from "../pages/Reservations/client_dashboard/UpdateReservation";
import InitialPayment from "../pages/Reservations/client_dashboard/InitialPayment";
import ApprovedPage from "../pages/Reservations/admin_dashboard/ApprovedPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<AdminDashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<AdminDashboard/>
        },{
          path:"/admin/dashboard/manage",
          element:<AdminManageReservations/>
        },{
          path:"/admin/dashboard/view-reservation/:id",
          element:<AdminViewReservation/>,
          loader:({params})=>fetch(`http://localhost:3000/reservation/reservation/${params.id}`)
        },{
          path:"/admin/dashboard/approve/:id",
          element:<ApprovedPage/>,
          loader:({params})=>fetch(`http://localhost:3000/reservation/reservation/${params.id}`)
        },

      ]
    },
    {
      path:"/client/dashboard",
      element:<ClientDashboardLayout/>,
      children:[
        {
          path:"/client/dashboard",
          element:<ClientDashboard/>
        },
        {
          path:"/client/dashboard/create",
          element:<ClientCreateReservation/>
        },{
          path:"/client/dashboard/manage",
          element:<ClientManageReservations/>
        },{
          path:"/client/dashboard/update-reservation/:id",
          element:<ClientUpdateReservation/>,
          loader:({params})=>fetch(`http://localhost:3000/reservation/reservation/${params.id}`)
        },{
          path:"/client/dashboard/view-reservation/:id",
          element:<ClientViewReservation/>,
          loader:({params})=>fetch(`http://localhost:3000/reservation/reservation/${params.id}`)
        },{
          path:"/client/dashboard/initial-payment",
          element:<InitialPayment/>
        }
      ]
    }
  ]);

  export default router