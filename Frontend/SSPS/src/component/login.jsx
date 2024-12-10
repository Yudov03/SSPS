import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username==="Võ Lý Đắc Duy" && password ==="123") {
      navigate("/printers");
      toast.success("Đăng nhập thành công!")
    }
    else toast.error("Tên đăng nhập hoặc mật khẩu không chính xác!")
    // console.log("Đăng nhập với", username, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-lightblue">
      <div
        className="card shadow-lg p-5 rounded animate__animated animate__zoomIn"
        style={{
          width: "500px",
          background: "linear-gradient(to bottom, #1976d2, #0d47a1)", // Xanh đậm hơn
          borderRadius: "30px",
        }}
      >
        <h1
          className="text-center text-light fw-bold mb-4 animate__animated animate__fadeInDown"
          style={{ fontSize: "2.5rem" }}
        >
          <i className="bi bi-printer-fill me-2"></i> BK SSPS
        </h1>
        <form className="needs-validation" novalidate onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="form-label text-light fw-semibold">
              <i className="bi bi-person-fill"></i> Tên người dùng
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên người dùng"
              style={{ borderRadius: "20px" }}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-light fw-semibold">
              <i className="bi bi-lock-fill"></i> Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              style={{ borderRadius: "20px" }}
              required
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-block animate__animated animate__pulse animate__infinite"
              style={{
                borderRadius: "20px",
                backgroundColor: "#0d47a1",
                border: "none",
                fontSize: "1.2rem",
              }}
            >
              <i className="bi bi-box-arrow-in-right"></i> Đăng nhập
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-light">
            <i className="bi bi-question-circle"></i> Quên mật khẩu?{" "}
            <Link to="/" className="text-warning fw-bold">
              Lấy lại mật khẩu
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
