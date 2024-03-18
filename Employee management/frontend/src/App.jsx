import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './App.css'; // Import your CSS file

function App() {
  return (
    <>
      <ToastContainer /> {/* Add ToastContainer here */}
      <Outlet />
    </>
  );
}

export default App;