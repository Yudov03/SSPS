import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SideNavigation from "./component/SideNav/nav";
import Printer from "./component/Printer/printer";
import AddPrinter from "./component/Printer/add";
import AxiosInstance from "./component/Axios";

function App() {
  // State để quản lý danh sách máy in
  const [printers, setPrinters] = useState([]);

  // Lấy danh sách máy in từ API
  const fetchPrinters = async () => {
    try {
      const response = await AxiosInstance.get("/printers");
      setPrinters(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu máy in:", error);
    }
  };

  // Thêm máy in mới vào API
  const addPrinter = async (newPrinter) => {
    try {
      const response = await AxiosInstance.post("/printers", newPrinter);
      setPrinters((prevPrinters) => [...prevPrinters, response.data]);
    } catch (error) {
      console.error("Lỗi khi thêm máy in mới:", error);
    }
  };

  // Tải danh sách máy in khi component mount
  useEffect(() => {
    fetchPrinters();
  }, []);

  return (
    <SideNavigation
      content={
        <Routes>
          <Route
            path="/printer"
            element={<Printer printers={printers} setPrinters={setPrinters} />}
          />
          <Route
            path="/printer/add"
            element={<AddPrinter addPrinter={addPrinter} />}
          />
        </Routes>
      }
    />
  );
}

export default App;
