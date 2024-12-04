import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SideNavigation from "./component/SideNav/nav";
import Printer from "./component/Printer/printer";
import AddPrinter from "./component/Printer/add";
import EditPrinter from "./component/Printer/edit"; // Import thêm trang chỉnh sửa
import DetailPrinter from "./component/Printer/detail";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// thêm đại dòng này up lên git cho dui
function App() {
  const location = useLocation()
  const noNavbar = location.pathname === "/"
  return (
    <>
    {noNavbar ?
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    :
    <SideNavigation
      content={
        <Routes>
          <Route path="/printers" element={<Printer />} />
          <Route path="/printers/add" element={<AddPrinter />} />
          <Route path="/printers/edit/:id" element={<EditPrinter />} />
          <Route path="/printers/info/:id" element={<DetailPrinter />} />
        </Routes>
      }
    />
    }
    </>
  );
}

export default App;
