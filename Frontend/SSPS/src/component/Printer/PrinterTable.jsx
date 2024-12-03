import React from "react";
// import "./index.css"; // Import CSS

export default function PrinterTable() {
  const printers = [
    {
      name: "DeskJet 2734e",
      status: "Đã kích hoạt",
      condition: "Đang chạy",
      ip: "10.0.1.202",
      location: "B4.402",
      lastUsed: "18/10/2024 6:15 CH",
      statusClass: "active",
    },
    {
      name: "MAXIFY GX5070",
      status: "Đã kích hoạt",
      condition: "Sẵn sàng",
      ip: "10.0.0.163",
      location: "A4.302",
      lastUsed: "18/10/2024 11:52 SA",
      statusClass: "active",
    },
    {
      name: "Sawgrass SG500",
      status: "Chưa kích hoạt",
      condition: "Bảo trì",
      ip: "10.0.1.132",
      location: "C6.104",
      lastUsed: "16/10/2024 8:01 CH",
      statusClass: "inactive",
    },
    {
      name: "Smart Tank 5101",
      status: "Chưa kích hoạt",
      condition: "Không sử dụng",
      ip: "10.0.1.837",
      location: "A5.101",
      lastUsed: "05/10/2024 11:32 SA",
      statusClass: "inactive",
    },
  ];

  return (
    <div className="printer-management">
      {/* Header: Tìm kiếm và chế độ */}
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm máy in..." />
          <button className="search-button">Tìm kiếm</button>
        </div>
        <select className="mode-select">
          <option value="all">Tất cả máy in</option>
          <option value="active">Máy in đang hoạt động</option>
          <option value="inactive">Máy in không hoạt động</option>
        </select>
        <button className="add-printer-button">+ Thêm máy in</button>
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
            {printers.map((printer, index) => (
              <tr key={index}>
                <td>{printer.name}</td>
                <td className={printer.statusClass}>{printer.status}</td>
                <td>{printer.condition}</td>
                <td>{printer.ip}</td>
                <td>{printer.location}</td>
                <td>{printer.lastUsed}</td>
                <td>
                  <button className="action-button">Sửa</button>
                  <button className="action-button delete">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
