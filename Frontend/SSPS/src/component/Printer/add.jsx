import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function AddPrinter() {
  // State cho các trường thông tin máy in
  const [printerName, setPrinterName] = useState('');
  const [printerIP, setPrinterIP] = useState('');
  const [printerLocation, setPrinterLocation] = useState('');
  const [printerImage, setPrinterImage] = useState(null);

  // Hàm xử lý thay đổi ảnh máy in
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPrinterImage(URL.createObjectURL(file));
    }
  };

  // Hàm xử lý lưu máy in
  const handleSavePrinter = () => {
    // Ở đây bạn có thể gửi dữ liệu máy in tới API hoặc thêm vào danh sách máy in
    console.log({
      printerName,
      printerIP,
      printerLocation,
      printerImage,
    });
    // Sau khi lưu, chuyển về trang PrinterTable
    alert('Máy in đã được thêm thành công!');
  };

  return (
    <StyledPrinterList>
      <StyledHeader>
        <Title>Thông tin chi tiết</Title>
        <Link to={`/printer`} className="btn btn-secondary">x hủy</Link>
      </StyledHeader>
      <hr />
      <StyledForm>
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

        <div className="form-group">
          <label>Thêm ảnh máy in:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {printerImage && (
            <img src={printerImage} alt="Printer Preview" className="printer-image-preview" />
          )}
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" onClick={handleSavePrinter}>
            Lưu máy in
          </button>
        </div>
      </StyledForm>
    </StyledPrinterList>
  );
}

const StyledPrinterList = styled.section`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #242222;
  font-size: 16px;
  font-weight: 600;
`;

const StyledForm = styled.div`
  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    .printer-image-preview {
      margin-top: 10px;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }

  .form-actions {
    margin-top: 20px;

    button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
