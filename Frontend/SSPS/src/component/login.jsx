import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Đăng nhập với", username, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-lightblue">
      <div
        className="card shadow-lg p-4 rounded"
        style={{
          width: "400px",
          background: "linear-gradient(to bottom, #e0f7fa, #80d8ff)",
        }}
      >
        <h2 className="text-center text-white mb-4">
          <i className="bi bi-person-circle"></i> Đăng Nhập
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white">
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
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
            />
          </div>
          <div className="d-grid">
            <Link
              to={`dashboard`}
              className="btn btn-primary btn-block"
              style={{
                borderRadius: "20px",
                backgroundColor: "#1976d2",
                border: "none",
              }}
            >
              <i className="bi bi-box-arrow-in-right"></i> Đăng nhập
            </Link>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-white">
            <i className="bi bi-question-circle"></i> Quên mật khẩu?{" "}
            <Link to="/reset-password" className="text-warning">
              Lấy lại mật khẩu
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
