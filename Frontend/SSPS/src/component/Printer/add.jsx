// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AxiosInstance from "../Axios";

// export default function AddPrinter() {

//   // // State để quản lý danh sách máy in
//   // const [printers, setPrinters] = useState([]);

//   // // Thêm máy in mới vào API
//   // const addPrinter = async (newPrinter) => {
//   //   try {
//   //     const response = await AxiosInstance.post("/printers", newPrinter);
//   //     setPrinters((prevPrinters) => [...prevPrinters, response.data]);
//   //   } catch (error) {
//   //     console.error("Lỗi khi thêm máy in mới:", error);
//   //   }
//   // };
//   // const [data, setData] = useState({
//   //   name: nu
//   // })
//   // AxiosInstance.post("/printers",newPrinter)

//   const [printerName, setPrinterName] = useState("");
//   const [printerIP, setPrinterIP] = useState("");
//   const [printerLocation, setPrinterLocation] = useState("");
//   const [printerImage, setPrinterImage] = useState(null);
//   const [status, setStatus] = useState("Đã kích hoạt"); // Trạng thái ban đầu
//   const [statusClass, setStatusClass] = useState("active"); // Trạng thái class ban đầu
//   const navigate = useNavigate();

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setPrinterImage(URL.createObjectURL(file));
//     }
//   };

//   const handleStatusChange = (event) => {
//     const selectedStatus = event.target.value;
//     setStatus(selectedStatus);
//     setStatusClass(selectedStatus === "Đã kích hoạt" ? "active" : "inactive");
//   };

//   const handleSavePrinter = () => {
//     const newPrinter = {
//       name: printerName,
//       status: status, // Trạng thái đã chọn
//       condition: "Sẵn sàng", // Trạng thái của máy in
//       ip: printerIP,
//       location: printerLocation,
//       lastUsed: new Date().toLocaleString(),
//       statusClass: statusClass, // Class trạng thái
//     };
//     addPrinter(newPrinter); // Thêm máy in mới với trạng thái đã thay đổi
//     navigate("/printers");
//   };

//   return (
//     <div className="add-printer-container">
      // <h2>Thêm máy in mới</h2>
      // <div className="form-wrapper">
      //   <div className="form-group-left">
      //     <div className="input-file-wrapper">
      //       <label>Ảnh:</label>
      //       <input type="file" accept="image/*" onChange={handleImageChange} />
      //       {printerImage && (
      //         <div className="image-preview">
      //           <img src={printerImage} alt="Preview" />
      //         </div>
      //       )}
      //     </div>

      //     {/* Dropdown để chọn trạng thái */}
      //     <div className="status-dropdown">
      //       <label>Chọn trạng thái máy in:</label>
      //       <select value={status} onChange={handleStatusChange}>
      //         <option value="Đã kích hoạt">kích hoạt</option>
      //         <option value="Chưa kích hoạt">Không kích hoạt</option>
      //       </select>
      //     </div>
      //   </div>

      //   <div className="form-group-right">
      //     <div className="form-group">
      //       <label>Tên máy in:</label>
      //       <input
      //         type="text"
      //         placeholder="Nhập tên máy in"
      //         value={printerName}
      //         onChange={(e) => setPrinterName(e.target.value)}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label>Địa chỉ IP:</label>
      //       <input
      //         type="text"
      //         placeholder="Nhập địa chỉ IP"
      //         value={printerIP}
      //         onChange={(e) => setPrinterIP(e.target.value)}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label>Vị trí:</label>
      //       <input
      //         type="text"
      //         placeholder="Nhập vị trí máy in"
      //         value={printerLocation}
      //         onChange={(e) => setPrinterLocation(e.target.value)}
      //       />
      //     </div>
      //   </div>
      // </div>

      // <div className="button-group">
      //   <Link to="/printers">
      //     <button className="button cancel">Hủy</button>
      //   </Link>
      //   <button className="button save" onClick={handleSavePrinter}>
      //     Lưu
      //   </button>
      // </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function AddPrinter() {

    const [values, setValues] = useState({
        name: null
        
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await AxiosInstance.post(`printers/`, values);
            console.log(res);
            if (res.status === 201) {
                toast.success('Added Success');
                setValues({
                    name: ''


                });
            } else if (res.status === 400) {
                toast.error('Please fill full');
            } else {
                toast.error('An error occurred');
            }
        } catch (error) {
            console.error(error);
            toast.error(`${error}, Please try again!`);
        }

    }

    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }

    //-----------------------------------------
    const [printerName, setPrinterName] = useState("");
  const [printerIP, setPrinterIP] = useState("");
  const [printerLocation, setPrinterLocation] = useState("");
  const [printerImage, setPrinterImage] = useState(null);
  const [status, setStatus] = useState("Đã kích hoạt"); // Trạng thái ban đầu
  const [statusClass, setStatusClass] = useState("active"); // Trạng thái class ban đầu

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPrinterImage(URL.createObjectURL(file));
    }
  };

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
    setStatusClass(selectedStatus === "Đã kích hoạt" ? "active" : "inactive");
  };

  const handleSavePrinter = () => {
    const newPrinter = {
      name: printerName,
      status: status, // Trạng thái đã chọn
      condition: "Sẵn sàng", // Trạng thái của máy in
      ip: printerIP,
      location: printerLocation,
      lastUsed: new Date().toLocaleString(),
      statusClass: statusClass, // Class trạng thái
    };
    addPrinter(newPrinter); // Thêm máy in mới với trạng thái đã thay đổi
    navigate("/printers");
  };
    
      return (
        <StyledPrinterList>
            <StyledHeader>
                <Title>Thêm máy in</Title>
                <>
                  <Link to={`/printers`} className="addbtn">Hủy</Link>
                </>
            </StyledHeader>
            <hr />
            <div className="form-wrapper">
        <div className="form-group-left">
          <div className="input-file-wrapper">
            <label>Ảnh:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {printerImage && (
              <div className="image-preview">
                <img src={printerImage} alt="Preview" />
              </div>
            )}
          </div>

          {/* Dropdown để chọn trạng thái */}
          <div className="status-dropdown">
            <label>Chọn trạng thái máy in:</label>
            <select value={status} onChange={handleStatusChange}>
              <option value="Đã kích hoạt">kích hoạt</option>
              <option value="Chưa kích hoạt">Không kích hoạt</option>
            </select>
          </div>
        </div>

        <div className="form-group-right">
          <div className="form-group">
            <label>Tên máy in:</label>
            <input
              type="text"
              placeholder="Nhập tên máy in"
              value={printerName}
              onChange={(e) => setPrinterName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Địa chỉ IP:</label>
            <input
              type="text"
              placeholder="Nhập địa chỉ IP"
              value={printerIP}
              onChange={(e) => setPrinterIP(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Vị trí:</label>
            <input
              type="text"
              placeholder="Nhập vị trí máy in"
              value={printerLocation}
              onChange={(e) => setPrinterLocation(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="button-group">
        <button className="button save" onClick={handleSavePrinter}>
          Lưu
        </button>
      </div>
        </StyledPrinterList>
    );
};
  
const StyledPrinterList = styled.section`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 0px 24px;
`;

const Title = styled.h2`
  color: #242222;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0px;
`;