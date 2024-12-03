import React, { useState, useEffect } from "react";
import AxiosInstance from "../Axios";

export default function PrinterTable() {
  
  // State cho danh sách hiển thị, giá trị tìm kiếm và trạng thái lọc
  const [printers, setPrinters] = useState([]);
    useEffect(() => {
        AxiosInstance.get(`printers/`)
            .then(res => setPrinters(res.data))
            .catch(err => console.log(err));
    }, [])
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // Lọc theo trạng thái

  // Hàm xử lý tìm kiếm
  const handleSearch = () => {
    const filteredPrinters = printerData.filter((printer) =>
      printer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPrinters(filteredPrinters);
  };

  // Hàm xử lý lọc theo trạng thái
  const handleFilter = () => {
    if (filterStatus === "active") {
      setPrinters(printerData.filter((printer) => printer.statusClass === "active"));
    } else if (filterStatus === "inactive") {
      setPrinters(printerData.filter((printer) => printer.statusClass === "inactive"));
    } else {
      setPrinters(printerData); // Hiển thị tất cả máy in nếu chọn "all"
    }
  };

  return (
    <div className="printer-management">
      {/* Header: Tìm kiếm và chế độ */}
      <div className="header-actions">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm máy in..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Tìm kiếm
          </button>
        </div>
        <select
          className="mode-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">Tất cả máy in</option>
          <option value="active">Máy in đang hoạt động</option>
          <option value="inactive">Máy in không hoạt động</option>
        </select>
        <button className="view-printers-button" onClick={handleFilter}>
          Xem máy in
        </button>
      </div>

      {/* Bảng máy in */}
      <div className="table-container">
        <table className="printer-table">
          <thead>
            <tr>
              <th>Tên máy in</th>
              <th>Trạng thái</th>
              <th>Tình trạng</th>
              <th>Địa chỉ IP</th>
              <th>Vị trí</th>
              <th>Sử dụng gần nhất</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {printers.length > 0 ? (
              printers.map((printer, index) => (
                <tr key={index}>
                  <td>{printer.name}</td>
                  <td className={printer.statusClass}>{printer.status}</td>
                  <td>{printer.condition}</td>
                  <td>{printer.ip}</td>
                  <td>{printer.location}</td>
                  <td>{printer.lastUsed}</td>
                  <td>
                    <button className="action-button view">View</button>
                    <button className="action-button edit">Chỉnh sửa</button>
                    <button className="action-button delete">Xóa</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data">
                  Không tìm thấy máy in nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
