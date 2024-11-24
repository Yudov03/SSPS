import React from "react";

export default function PrinterTable() {
    const data = [
        { name: "DeshJet 2734e", status: "Đã kích hoạt", state: "Đang chạy", ip: "10.0.1.202", location: "B4.402", lastUsed: "18/10/2024 6:15 CH" },
        { name: "MAXIFY GX5070", status: "Đã kích hoạt", state: "Sẵn sàng", ip: "10.0.0.163", location: "A4.302", lastUsed: "18/10/2024 11:52 SA" },
        { name: "Sawgrass SG500", status: "Chưa kích hoạt", state: "Bảo trì", ip: "10.0.1.132", location: "C6.104", lastUsed: "16/10/2024 8:01 CH" },
        { name: "ENVY Inspire 7955e", status: "Đã kích hoạt", state: "Sẵn sàng", ip: "10.0.0.629", location: "H6.601", lastUsed: "17/10/2024 8:37 SA" },
        { name: "F8 Panda DTF", status: "Đã kích hoạt", state: "Sẵn sàng", ip: "10.0.0.026", location: "B2.202", lastUsed: "18/10/2024 3:02 CH" },
        { name: "PIXMA TS8870", status: "Đã kích hoạt", state: "Đang chạy", ip: "10.0.1.981", location: "C4.506", lastUsed: "18/10/2024 6:15 CH" },
        { name: "Smart Tank 5101", status: "Chưa kích hoạt", state: "Không sử dụng", ip: "10.0.1.837", location: "A5.101", lastUsed: "05/10/2024 11:32 SA" },
    ];

    return (
        <div className="printer-table-container">
            <h1 className="title">Quản lý máy in</h1>
            <div className="table-wrapper">
                <div className="table-header">
                    <input type="text" placeholder="Tìm kiếm" className="search-input" />
                    <button className="filter-button">Lọc</button>
                    <button className="add-printer-button">+ Thêm máy in</button>
                </div>
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
                        {data.map((printer, index) => (
                            <tr key={index}>
                                <td>{printer.name}</td>
                                <td className={printer.status === "Đã kích hoạt" ? "active" : "inactive"}>{printer.status}</td>
                                <td>{printer.state}</td>
                                <td>{printer.ip}</td>
                                <td>{printer.location}</td>
                                <td>{printer.lastUsed}</td>
                                <td>
                                    <button className="action-button add">+</button>
                                    <button className="action-button delete">🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button>Trước</button>
                    <button className="active-page">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>Tiếp theo</button>
                </div>
            </div>
        </div>
    );
}
