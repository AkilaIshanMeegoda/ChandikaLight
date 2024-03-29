import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/landingPage/Home";
import AdminReservationDashboardLayout from "../pages/Reservations/admin_dashboard/DashboardLayout";
import AdminReservationDashboard from "../pages/Reservations/admin_dashboard/Dashboard";
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
import ApprovedReservations from "../pages/Reservations/admin_dashboard/ApprovedReservations";
import CancelledPage from "../pages/Reservations/admin_dashboard/CancelledPage";
import CancelledReservations from "../pages/Reservations/admin_dashboard/CancelledReservations";
import ServiceDashboardLayout from "../pages/Services/DashboardLayout";
import AllServices from "../pages/Services/AllServices";
import CreateService from "../pages/Services/CreateService";
import DeleteService from "../pages/Services/DeleteService";
import EditService from "../pages/Services/EditService";
import Login from "../components/landingPage/ClientLogin";
import ClientSignUp from "../components/landingPage/ClientSignUp";
import AboutUs from "../components/landingPage/AboutUs";
import AdminDashboardLayout from "../pages/Admin/AdminDashboardLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";

  const router = createBrowserRouter([
    /*reservation routes*/
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
      path:"/admin/reservation/dashboard",
      element:<AdminReservationDashboardLayout/>,
      children:[
        {
          path:"/admin/reservation/dashboard",
          element:<AdminReservationDashboard/>
        },{
          path:"/admin/reservation/dashboard/manage",
          element:<AdminManageReservations/>
        },{
          path:"/admin/reservation/dashboard/view-reservation/:id",
          element:<AdminViewReservation/>,
          loader:({params})=>fetch(`http://localhost:3000/reservation/reservation/${params.id}`)
        },{
          path:"/admin/reservation/dashboard/approve/:id",
          element:<ApprovedPage/>,
          loader:({params})=>fetch(`http://localhost:3000/reservation/reservation/${params.id}`)
        },{
          path:"/admin/reservation/dashboard/cancel/:id",
          element:<CancelledPage/>,
          loader:({params})=>fetch(`http://localhost:3000/reservation/reservation/${params.id}`)
        },{
          path:"/admin/reservation/dashboard/approve-reservations",
          element:<ApprovedReservations/>
        },{
          path:"/admin/reservation/dashboard/cancel-reservations",
          element:<CancelledReservations/>
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
          path:"/client/dashboard/login",
          element:<Login/>
        },
        {
          path:"/client/dashboard/aboutus",
          element:<AboutUs/>
        },
        {
          path:"/client/dashboard/signup",
          element:<ClientSignUp/>
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
    },

    /*service routes*/
    {
      path:"/admin/service/dashboard",
      element:<ServiceDashboardLayout/>,
      children:[
        {
          path:"/admin/service/dashboard/all",
          element:<AllServices/>
        },
        {
          path:"/admin/service/dashboard/add",
          element:<CreateService/>
        },
        {
          path:"/admin/service/dashboard/delete/:id",
          element:<DeleteService/>,
        },
        {
          path:"/admin/service/dashboard/update/:id",
          element:<EditService/>,
        }
      ]
    },

    /*admin route*/
    {
      path:"/admin/dashboard",
      element:<AdminDashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<AdminDashboard/>
        },
      ]
    }
  ]);

  export default router