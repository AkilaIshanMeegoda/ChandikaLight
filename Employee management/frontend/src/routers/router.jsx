import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import DashboardLayout from "../pages/Employee/employee dashboard/DashboardLayout";
import Dashboard from "../pages/Employee/employee dashboard/Dashboard";
import ManageEmployee from "../pages/Employee/employee dashboard/ManageEmployee";
import EditEmployee from "../pages/Employee/employee dashboard/EditEmployee";
import AddEmployee from "../pages/Employee/employee dashboard/AddEmployee";
import ManageSalary from "../pages/Employee/salary dashboard/ManageSalary";
import EditSalary from "../pages/Employee/salary dashboard/EditSalary";
import AddSalary from "../pages/Employee/salary dashboard/AddSalary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/admin/dashboard/AddEmployee",
        element: <AddEmployee />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageEmployee />,
      },
      {
        path: "edit-employee/:id",
        element: <EditEmployee />,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/employee/${params.id}`),
      },
      {
        path: "/admin/dashboard/AddSalary",
        element: <AddSalary />,
      },
      {
        path: "/admin/dashboard/manage-salary",
        element: <ManageSalary />,
      },
      {
        path: "/admin/dashboard/edit-salary/:id",
        element: <EditSalary />,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/salary/${params.id}`),
      },
    ],
  },
]);

export default router;
