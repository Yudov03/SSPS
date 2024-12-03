import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPrinter({ addPrinter }) {
  const [printerName, setPrinterName] = useState("");
  const [printerIP, setPrinterIP] = useState("");
  const [printerLocation, setPrinterLocation] = useState("");
  const [printerImage, setPrinterImage] = useState(null);
  const [status, setStatus] = useState("Đã kích hoạt"); // Trạng thái ban đầu
  const [statusClass, setStatusClass] = useState("active"); // Trạng thái class ban đầu
  const navigate = useNavigate();

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
    navigate("/printer");
  };

  return (
    <div className="add-printer-container">
      <h2>Thêm máy in mới</h2>
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
        <Link to="/printer">
          <button className="button cancel">Hủy</button>
        </Link>
        <button className="button save" onClick={handleSavePrinter}>
          Lưu
        </button>
      </div>
    
  );
}
