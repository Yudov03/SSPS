import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AxiosInstance from "../Axios";


export default function EditPrinter() {
  const { id } = useParams(); // Lấy ID của máy in từ URL
  const navigate = useNavigate();

  // State lưu trữ thông tin máy in
  const [printer, setPrinter] = useState({
    name: "",
    ipAddress: "",
    location: "",
    description: "",
    isActive: true, // Trạng thái kích hoạt
    image: null, // Ảnh máy in
  });

  // Lấy dữ liệu máy in dựa trên ID khi trang được tải
  useEffect(() => {
    const fetchPrinter = async () => {
        try {
          const response = await AxiosInstance.get(`/printers/${id}`);
          setPrinter({
            name: response.data.name,
            ipAddress: response.data.ip, // Địa chỉ IP
            location: response.data.location, // Vị trí máy in
            description: response.data.description || "", // Mô tả máy in
            isActive: response.data.status === "Đã kích hoạt", // Trạng thái kích hoạt
            condition: response.data.condition, // Điều kiện máy in
            statusClass: response.data.status === "Đã kích hoạt" ? "active" : "inactive", // Tính toán statusClass
            lastUsed: response.data.lastUsed, // Lưu lại ngày sử dụng cuối
            image: response.data.image, // Ảnh máy in (nếu có)
            id: response.data.id, // ID của máy in
          });
        } catch (error) {
          console.error("Lỗi khi lấy thông tin máy in:", error);
        }
      };
      

      

    fetchPrinter();
  }, [id]);

  // Xử lý khi người dùng chỉnh sửa các trường
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrinter({ ...printer, [name]: value });
  };

  // Xử lý bật/tắt trạng thái kích hoạt
  const handleStatusChange = (e) => {
    setPrinter({ ...printer, isActive: e.target.value === "true" });
  };
  

  // Xử lý khi người dùng chọn ảnh mới
  const handleImageChange = (e) => {
    setPrinter({ ...printer, image: e.target.files[0] });
  };

  // Lưu thông tin máy in sau khi chỉnh sửa
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", printer.name);
      formData.append("ip", printer.ipAddress); // Địa chỉ IP
      formData.append("location", printer.location); // Vị trí máy in
      formData.append("description", printer.description); // Mô tả máy in
      formData.append("condition", printer.condition); // Điều kiện máy in
      formData.append("status", printer.isActive ? "Đã kích hoạt" : "Chưa kích hoạt"); // Trạng thái kích hoạt
      formData.append("statusClass", printer.isActive ? "active" : "inactive"); // Tính toán statusClass
      formData.append("lastUsed", printer.lastUsed); // Giữ lại thời gian sử dụng cuối
      formData.append("id", printer.id); // ID của máy in
  
      if (printer.image) {
        formData.append("image", printer.image); // Ảnh máy in (nếu có)
      }
  
      // Gửi yêu cầu cập nhật
      await AxiosInstance.put(`/printers/${id}`, formData);
      navigate("/printer"); // Quay lại trang danh sách máy in
    } catch (error) {
      console.error("Lỗi khi lưu thông tin máy in:", error);
    }
  };
  
  
  

  // Huỷ chỉnh sửa và quay lại trang PrinterTable
  const handleCancel = () => {
    navigate("/printer");
  };

  return (
    <div className="edit-printer-container">
      <div className="edit-printer-box">
        <button className="cancel-button" onClick={handleCancel}>
       X
        </button>
        <div className="edit-printer-content">
          {/* Nửa bên trái */}
          <div className="edit-printer-left">
            <div className="image-upload">
              <label>Ảnh máy in : </label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {printer.image && (
                <img
                  src={
                    typeof printer.image === "string"
                      ? printer.image
                      : URL.createObjectURL(printer.image)
                  }
                  alt="Ảnh máy in"
                  className="printer-image-preview"
                />
              )}
            </div>
            <div className="status-dropdown">
              <label>Trạng thái kích hoạt</label>
              <select
                value={printer.isActive}
                onChange={handleStatusChange}
                name="isActive"
              >
                <option value={true}> kích hoạt</option>
                <option value={false}>Chưa kích hoạt</option>
              </select>
            </div>
          </div>

          {/* Nửa bên phải */}
          <div className="edit-printer-right">
            <div className="form-group">
              <label>Tên máy in</label>
              <input
                type="text"
                name="name"
                value={printer.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Địa chỉ IP</label>
              <input
                type="text"
                name="ipAddress"
                value={printer.ipAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Vị trí</label>
              <input
                type="text"
                name="location"
                value={printer.location}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mô tả</label>
              <textarea
                name="description"
                value={printer.description}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button className="save-button" onClick={handleSave}>
          Lưu
        </button>
      </div>
    </div>
  );
}
