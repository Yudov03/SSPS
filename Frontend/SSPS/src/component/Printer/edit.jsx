// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import AxiosInstance from "../Axios";


// export default function EditPrinter() {
//   const { id } = useParams(); // Lấy ID của máy in từ URL
//   const navigate = useNavigate();

//   // State lưu trữ thông tin máy in
//   const [printer, setPrinter] = useState({
//     name: "",
//     ipAddress: "",
//     location: "",
//     description: "",
//     isActive: true, // Trạng thái kích hoạt
//     image: null, // Ảnh máy in
//   });

//   // Lấy dữ liệu máy in dựa trên ID khi trang được tải
//   useEffect(() => {
//     const fetchPrinter = async () => {
//         try {
//           const response = await AxiosInstance.get(`/printers/${id}`);
//           setPrinter({
//             name: response.data.name,
//             ipAddress: response.data.ip, // Địa chỉ IP
//             location: response.data.location, // Vị trí máy in
//             description: response.data.description || "", // Mô tả máy in
//             isActive: response.data.status === "Đã kích hoạt", // Trạng thái kích hoạt
//             condition: response.data.condition, // Điều kiện máy in
//             statusClass: response.data.status === "Đã kích hoạt" ? "active" : "inactive", // Tính toán statusClass
//             lastUsed: response.data.lastUsed, // Lưu lại ngày sử dụng cuối
//             image: response.data.image, // Ảnh máy in (nếu có)
//             id: response.data.id, // ID của máy in
//           });
//         } catch (error) {
//           console.error("Lỗi khi lấy thông tin máy in:", error);
//         }
//       };
      

      

//     fetchPrinter();
//   }, [id]);

//   // Xử lý khi người dùng chỉnh sửa các trường
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPrinter({ ...printer, [name]: value });
//   };

//   // Xử lý bật/tắt trạng thái kích hoạt
//   const handleStatusChange = (e) => {
//     setPrinter({ ...printer, isActive: e.target.value === "true" });
//   };
  

//   // Xử lý khi người dùng chọn ảnh mới
//   const handleImageChange = (e) => {
//     setPrinter({ ...printer, image: e.target.files[0] });
//   };

//   // Lưu thông tin máy in sau khi chỉnh sửa
//   const handleSave = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", printer.name);
//       formData.append("ip", printer.ipAddress); // Địa chỉ IP
//       formData.append("location", printer.location); // Vị trí máy in
//       formData.append("description", printer.description); // Mô tả máy in
//       formData.append("condition", printer.condition); // Điều kiện máy in
//       formData.append("status", printer.isActive ? "Đã kích hoạt" : "Chưa kích hoạt"); // Trạng thái kích hoạt
//       formData.append("statusClass", printer.isActive ? "active" : "inactive"); // Tính toán statusClass
//       formData.append("lastUsed", printer.lastUsed); // Giữ lại thời gian sử dụng cuối
//       formData.append("id", printer.id); // ID của máy in
  
//       if (printer.image) {
//         formData.append("image", printer.image); // Ảnh máy in (nếu có)
//       }
  
//       // Gửi yêu cầu cập nhật
//       await AxiosInstance.put(`/printers/${id}`, formData);
//       navigate("/printer"); // Quay lại trang danh sách máy in
//     } catch (error) {
//       console.error("Lỗi khi lưu thông tin máy in:", error);
//     }
//   };
  
  
  

//   // Huỷ chỉnh sửa và quay lại trang PrinterTable
//   const handleCancel = () => {
//     navigate("/printer");
//   };

//   return (
//     <div className="edit-printer-container">
//       <div className="edit-printer-box">
//         <button className="cancel-button" onClick={handleCancel}>
//        X
//         </button>
//         <div className="edit-printer-content">
//           {/* Nửa bên trái */}
//           <div className="edit-printer-left">
//             <div className="image-upload">
//               <label>Ảnh máy in : </label>
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//               {printer.image && (
//                 <img
//                   src={
//                     typeof printer.image === "string"
//                       ? printer.image
//                       : URL.createObjectURL(printer.image)
//                   }
//                   alt="Ảnh máy in"
//                   className="printer-image-preview"
//                 />
//               )}
//             </div>
//             <div className="status-dropdown">
//               <label>Trạng thái kích hoạt</label>
//               <select
//                 value={printer.isActive}
//                 onChange={handleStatusChange}
//                 name="isActive"
//               >
//                 <option value={true}> kích hoạt</option>
//                 <option value={false}>Chưa kích hoạt</option>
//               </select>
//             </div>
//           </div>

//           {/* Nửa bên phải */}
//           <div className="edit-printer-right">
//             <div className="form-group">
//               <label>Tên máy in</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={printer.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Địa chỉ IP</label>
//               <input
//                 type="text"
//                 name="ipAddress"
//                 value={printer.ipAddress}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Vị trí</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={printer.location}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Mô tả</label>
//               <textarea
//                 name="description"
//                 value={printer.description}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         </div>
//         <button className="save-button" onClick={handleSave}>
//           Lưu
//         </button>
//       </div>
//     </div>
//   );
// }

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
import { useNavigate, useParams, Link } from "react-router-dom";
import AxiosInstance from "../Axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddPrinter() {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const { id } = useParams();
  const [values, setValues] = useState({
      name: '',
      ip: '',
      location: '',
      status: "D",
      lastUsed: '',
      condition: '',
      description: ''
  })
  useEffect(() => {
    AxiosInstance.get(`printers/${id}/`)
      .then(res => {
          setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [])
  const handleSubmit = async (event) => {
      event.preventDefault();
      handleClose()
      try {
          const res = await AxiosInstance.put(`printers/${id}/`, values);
          console.log(res);
          if (res.status === 200) {
              handleShow2()
              //toast.success('Added Success');
          } else if (res.status === 400) {
              toast.error('Hãy điền đủ các trường!');
          } else {
              toast.error('Lỗi!');
          }
      } catch (error) {
          console.error(error);
          toast.error(`${error}, Lỗi!`);
      }

  }

  const navigate = useNavigate();
  const handleBackButton = () => {
      navigate(-1);
  }
  
  return (
    <StyledPrinterList>
      <StyledHeader>
        <Title>Thêm máy in</Title>
        <>
          <button type="button" className="btn btn-light" onClick={handleBackButton}>
            <i className="bi bi-x-lg"></i> Hủy
          </button>
        </>
      </StyledHeader>
      <hr />
      <div className="mx-5" style={{}}>
        <div>
          <div className="row">
            <div className="col-5">
              <div className="input-file-wrapper">
                <label>Ảnh:</label>
                <input type="file" accept="image/*" />
              </div>
              <div className="">
                <label style={{ fontWeight: 'bold' }} htmlFor="statusid"></label>
                <div className="form-check form-switch ms-2">
                    < input className="form-check-input" type="checkbox" role="switch" id="statusid" checked={values.status==="E"} onClick={e => setValues({ ...values, status: values.status==="E"?"D":"E" })} readOnly />
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <label style={{ fontWeight: 'bold' }} htmlFor="nameid">Tên:</label>
              <input type="text" className="form-control" id="nameid" placeholder="Nhập tên máy in" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
              <label style={{ fontWeight: 'bold' }} htmlFor="ipid">Địa chỉ IP:</label>
              <input type="text" className="form-control" id="ipid" placeholder="Nhập ip máy in" value={values.ip} onChange={e => setValues({ ...values, ip: e.target.value })} />
              <div className="">
                <label style={{ fontWeight: 'bold' }} htmlFor="positionid">Vị trí:</label>
                  <select className="form-control" id="positionid" value={values.location} onChange={(event) => setValues({ ...values, location: event.target.value })}>
                    <option value="" disabled>Chọn vị trí</option>
                    <option value="B1.203">B1.203</option>
                    <option value="H6.501">H6.501</option>
                    <option value="A4.402">A4.402</option>
                  </select>
              </div>
              <div className="">
                <label style={{ fontWeight: 'bold' }} htmlFor="descriptionid">Mô tả:</label>
                <textarea style={{ height: 100 }} id="descriptionid" type="text" className="form-control" placeholder="Nhập mô tả chi tiết" value={values.description} onChange={e => setValues({ ...values, description: e.target.value })} />
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-3 mx-auto pt-5 pb-5">
            <button 
              className=" btn btn-success"
              onClick={handleShow}
            >Lưu</button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Xác nhận</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Bạn có chắc chắn muốn thay đổi thông tin không?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Hủy</Button>
                <Button variant="primary" onClick={handleSubmit}>Xác nhận</Button>
              </Modal.Footer>
            </Modal>
            <Modal
              show={show2}
              onHide={handleClose2}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Đã cập nhật thành công!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Bạn muốn tiếp tục thay đổi hay xem thông tin chi tiết của máy vừa được cập nhật?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>Tiếp tục</Button>
                <Link to={`/printers/info/${id}`} className="btn btn-primary"  onClick={handleClose2}>Đi đến thông tin chi tiết</Link>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
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