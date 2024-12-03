import React, { useState, useEffect } from "react";
import AxiosInstance from "../Axios";
//thêm dòng này để upadte git cho vui
export default function PrinterTable() {
  // State cho danh sách máy in (dữ liệu gốc) và danh sách hiển thị
  const [allPrinters, setAllPrinters] = useState([]); // Dữ liệu từ server
  const [filteredPrinters, setFilteredPrinters] = useState([]); // Dữ liệu hiển thị
  
  // State cho tìm kiếm và lọc
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // Lọc theo trạng thái

  // Lấy dữ liệu từ API khi component được mount
  useEffect(() => {
    AxiosInstance.get(`printers/`)
      .then((res) => {
        setAllPrinters(res.data);
        setFilteredPrinters(res.data); // Hiển thị tất cả ban đầu
      })
      .catch((err) => console.log(err));
  }, []);

  // Hàm cập nhật danh sách hiển thị (kết hợp tìm kiếm và lọc)
  const updateFilteredPrinters = () => {
    let updatedPrinters = [...allPrinters];

    // Tìm kiếm
    if (searchTerm) {
      updatedPrinters = updatedPrinters.filter((printer) =>
        printer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Lọc trạng thái
    if (filterStatus === "active") {
      updatedPrinters = updatedPrinters.filter((printer) => printer.statusClass === "active");
    } else if (filterStatus === "inactive") {
      updatedPrinters = updatedPrinters.filter((printer) => printer.statusClass === "inactive");
    }

    setFilteredPrinters(updatedPrinters);
  };

  // Xử lý khi người dùng nhấn nút "Tìm kiếm"
  const handleSearch = () => {
    updateFilteredPrinters();
  };

  // Xử lý khi người dùng thay đổi trạng thái lọc
  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    updateFilteredPrinters();
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
          onChange={handleFilterChange}
        >
          <option value="all">Tất cả máy in</option>
          <option value="active">Máy in đang hoạt động</option>
          <option value="inactive">Máy in không hoạt động</option>
        </select>
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
            {filteredPrinters.length > 0 ? (
              filteredPrinters.map((printer, index) => (
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
