// import React, { useState, useEffect } from "react";
// import AxiosInstance from "../Axios";
// import { Link } from "react-router-dom"; // Import Link

// export default function PrinterTable() {
//   const [allPrinters, setAllPrinters] = useState([]);
//   const [filteredPrinters, setFilteredPrinters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");

//   const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
//   const itemsPerPage = 4; // Số lượng máy in mỗi trang

//   useEffect(() => {
//     AxiosInstance.get(`printers/`)
//       .then((res) => {
//         setAllPrinters(res.data);
//         setFilteredPrinters(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const updateFilteredPrinters = () => {
//     let updatedPrinters = [...allPrinters];

//     if (searchTerm) {
//       updatedPrinters = updatedPrinters.filter((printer) =>
//         printer.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (filterStatus === "active") {
//       updatedPrinters = updatedPrinters.filter((printer) => printer.statusClass === "active");
//     } else if (filterStatus === "inactive") {
//       updatedPrinters = updatedPrinters.filter((printer) => printer.statusClass === "inactive");
//     }

//     setFilteredPrinters(updatedPrinters);
//     setCurrentPage(1); // Reset về trang đầu tiên khi lọc
//   };

//   const handleSearch = () => {
//     updateFilteredPrinters();
//   };

//   const handleFilterChange = (e) => {
//     setFilterStatus(e.target.value);
//     updateFilteredPrinters();
//   };

//   const getPaginatedPrinters = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredPrinters.slice(startIndex, endIndex);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPagination = () => {
//     const totalPages = Math.ceil(filteredPrinters.length / itemsPerPage);
//     const pages = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <button
//           key={i}
//           className={`pagination-button ${i === currentPage ? "active" : ""}`}
//           onClick={() => handlePageChange(i)}
//         >
//           {i}
//         </button>
//       );
//     }

//     return pages;
//   };

//   return (
//     <div className="printer-management">
//       <div className="header-actions">
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Tìm kiếm máy in..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="search-button" onClick={handleSearch}>
//             Tìm kiếm
//           </button>
//         </div>
//         <select className="mode-select" value={filterStatus} onChange={handleFilterChange}>
//           <option value="all">Tất cả máy in</option>
//           <option value="active">Máy in đang hoạt động</option>
//           <option value="inactive">Máy in không hoạt động</option>
//         </select>
//       </div>

//       <div className="table-container">
//         <table className="printer-table">
//           <thead>
//             <tr>
//               <th>Tên máy in</th>
//               <th>Trạng thái</th>
//               <th>Tình trạng</th>
//               <th>Địa chỉ IP</th>
//               <th>Vị trí</th>
//               <th>Sử dụng gần nhất</th>
//               <th>Thao tác</th>
//             </tr>
//           </thead>
//           <tbody>
//             {getPaginatedPrinters().length > 0 ? (
//               getPaginatedPrinters().map((printer, index) => (
//                 <tr key={index}>
//                   <td>{printer.name}</td>
//                   <td className={printer.statusClass}>{printer.status}</td>
//                   <td>{printer.condition}</td>
//                   <td>{printer.ip}</td>
//                   <td>{printer.location}</td>
//                   <td>{printer.lastUsed}</td>
//                   <td>
//                     {/* /Users/voduyhieu/Documents/final_cnpm/SSPS/Frontend/SSPS/src/component/Printer/edit.jsx */}
//                     <button className="action-button view">View</button>
//                     <Link to={`/printer/edit/${printer.id}`} className="action-button edit">Chỉnh sửa</Link>
//                     <button className="action-button delete">Xóa</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="no-data">
//                   Không tìm thấy máy in nào.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="pagination">{renderPagination()}</div>
//     </div>
//   );
// }


import AxiosInstance from "../Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sort from "../Sort";
import { toast } from "react-toastify";
import Search from "../Search";
import styled from 'styled-components';

export default function PrinterTable() {

  //GET--------------------------------------------------------
  const [data, setData] = useState([])
  useEffect(() => {
      AxiosInstance.get(`printers/`)
          .then(res => 
            setData(res.data))
          .catch(err => console.log(err));
  }, [])
  //-----------------------------------------------------------

  //DELETE-----------------------------------------------------
  const handleDelete = async (id) => {
      const confirm = window.confirm("Would you like to Delete?");
      if (confirm) {
          try {
              await AxiosInstance.delete(`printers/${id}`);
              toast.success('Deleted Success!');
              setData(prevData => prevData.filter(data => data.id !== id));
              setFilteredData(prevFilteredData => prevFilteredData.filter(data => data.id !== id));
              setSearchData(prevSearchData => prevSearchData.filter(item => item.id !== id));
              // Cập nhật các biến state khác nếu cần
              if (currentData.length === 1 && currentPage !== 1) {
                  paginate(currentPage - 1); // Chuyển đến trang trước nếu currentData rỗng và không phải là trang đầu tiên
              } else if (currentData.length === 1 && currentPage === 1) {
                  paginate(1); // Nếu currentData rỗng và đang ở trang đầu tiên, vẫn paginate trang đầu tiên
              }
          } catch (error) {
              console.log(error);
              toast.error('An error occurred!');
          }
      }
  }
  //-----------------------------------------------------------

  //SEARCHING--------------------------------------------------
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => { setFilteredData(data); }, [data]);
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  const handleSearchChange = (searchValue) => {
      setSearchValue(searchValue.trim());
      if (searchValue === "") {
        setSearchData(filteredData);
        setCurrentPage(1);
      }
      else if (!searchValue.trim()) {
          setFilteredData([]);
      } else {
          const filtered = filteredData.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
          setSearchData(filtered);
          setCurrentPage(1);
      }
  };
  //-----------------------------------------------------------

  //SORTING----------------------------------------------------
  const [sortDirections, setSortDirections] = useState({
    name: null,
    status: null,
    condition: null,
    lastUsed: null,
    ip: null,
    location: null,
  });
  const handleSortChange = (type) => {
    const isAscending = sortDirections[type] === 'asc';
    if (searchValue.length > 0) {
      const sorted = [...searchData].sort((a, b) => {
        if (type === 'name') {
          return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (type === 'status') {
          return isAscending ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
        } else if (type === 'condition') {
          return isAscending ? a.condition.localeCompare(b.condition) : b.condition.localeCompare(a.condition);
        } else if (type === 'lastUsed') {
          return isAscending ? new Date(a.lastUsed) - new Date(b.lastUsed) : new Date(b.lastUsed) - new Date(a.lastUsed);
        } else if (type === 'ip') {
          return isAscending ? a.ip.localeCompare(b.ip) : b.ip.localeCompare(a.ip);
        } else if (type === 'location') {
          return isAscending ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location);
        }
        return 0; // Default sorting
      });
      setSearchData(sorted);
    } else {
      const sorted = [...filteredData].sort((a, b) => {
        if (type === 'name') {
          return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (type === 'status') {
          return isAscending ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
        } else if (type === 'condition') {
          return isAscending ? a.condition.localeCompare(b.condition) : b.condition.localeCompare(a.condition);
        } else if (type === 'lastUsed') {
          return isAscending ? new Date(a.lastUsed) - new Date(b.lastUsed) : new Date(b.lastUsed) - new Date(a.lastUsed);
        } else if (type === 'ip') {
          return isAscending ? a.ip.localeCompare(b.ip) : b.ip.localeCompare(a.ip);
        } else if (type === 'location') {
          return isAscending ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location);
        }
        return 0; // Default sorting
      });
      setFilteredData(sorted);
    }
    
    setSortDirections(prevState => ({
        ...prevState,
        [type]: isAscending ? 'desc' : 'asc'
    }));
  } 
  //-----------------------------------------------------------

  //PAGGING----------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5; // Số lượng dữ liệu trên mỗi trang
  const totalData = searchValue.length > 0 ? searchData.length : filteredData.length
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData =searchValue.length > 0 ? searchData.slice(indexOfFirstData, indexOfLastData) : filteredData.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //-----------------------------------------------------------

  //MODE-------------------------------------------------------
  const [mode, setMode] = useState('N');
  const handleMode = (event) => { 
    setMode(event.target.value)
    setSearchValue('');
    if (event.target.value !== "N") {
      const filtered = data.filter(item => item.status === event.target.value);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
      window.location.reload();
    }
    setCurrentPage(1);
  }
  //-----------------------------------------------------------

  //CHANGE MODE------------------------------------------------
  const [currentItem, setCurrentItem] = useState(null);
  const handleChange = (d) => {
    const newStatus = d.status === "E" ? "D" : "E"; 
    const updatedValue = { 
      name: d.name, 
      ip: d.ip, 
      location: d.location, 
      description: d.description, 
      status: newStatus, 
      lastUsed: d.lastUsed, 
      id: d.id, 
      condition: d.condition
    };
    AxiosInstance.put(`printers/${d.id}/`, updatedValue) 
      .then(res => { 
        // console.log(res); 
        if (res.status === 200) { 
          toast.success('Updated Success'); 
        } else if (res.status === 400) { 
          toast.error('Please fill full'); 
        } else { 
          toast.error('An error occurred'); 
        } 
      })
      .catch(error => {
        console.error(error);
        toast.error(`${error}, Please try again!`);
      });
    
    
    setSearchData(searchData.map(data => data.id === d.id ? updatedValue : data));
    setFilteredData(filteredData.map(data => data.id === d.id ? updatedValue : data)); 
    setFilteredData(prevFilteredData => prevFilteredData.filter(data => data.id !== d.id));
  }
  //-----------------------------------------------------------

  return (
    <PrinterList>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex flex-grow-1"><Search onSearchChange={handleSearchChange} searchData={data} /></div>
        <div className="">
          <select className="form-select bg-primary text-white fw-medium" aria-label="Default select example" onChange={handleMode}>
            <option disabled>Chọn một chế độ</option>
            <option value="N">Chế độ thường</option>
            <option value="D">Chế độ kích hoạt</option>
            <option value="E">Chế độ vô hiệu hóa</option>
          </select>
        </div>
      </div>
      <div className="mt-4" style={{}}>  
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>Tên máy in <Sort handleSortChange={handleSortChange} type="name" sortDirection={sortDirections.name} /></th>
              <th>Trạng thái<Sort handleSortChange={handleSortChange} type="status" sortDirection={sortDirections.status} /></th>
              <th>Tình trạng<Sort handleSortChange={handleSortChange} type="condition" sortDirection={sortDirections.condition} /></th>
              <th>Địa chỉ IP<Sort handleSortChange={handleSortChange} type="ip" sortDirection={sortDirections.ip} /></th>
              <th>Vị trí<Sort handleSortChange={handleSortChange} type="location" sortDirection={sortDirections.location} /></th>
              <th>Sử dụng gần nhất<Sort handleSortChange={handleSortChange} type="lastUsed" sortDirection={sortDirections.lastUsed} /></th>
              <th style={{ paddingBottom: 14 }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map(d => (
              <tr key={d.id}>
                <td style={{ textTransform: 'uppercase' }} >{d.name}</td>
                <td>{d.status==="D"? <div style={{ color: "red"}}> Chưa kích hoạt</div>: <div style={{color: "blue"}}>Đã kích hoạt</div>}</td>
                <td>{d.condition==="R"?"Sẵn sàng":d.condition==="B"?"Đang chạy":d.condition==="M"?"Bảo trì":"Không sử dụng"}</td>
                <td>{d.ip}</td>
                <td>{d.location}</td>
                <td>{d.lastUsed}</td>
                {mode==="N"? 
                  <td>
                    <Link to={`info/${d.id}`} className='btn btn-sm btn-info me-2'><i className="bi bi-info-square"></i></Link>
                    <Link to={`edit/${d.id}`} className="btn btn-sm btn-primary me-2"><i className="bi bi-pencil-square"></i></Link>
                    <button onClick={() => handleDelete(d.id)} className="btn btn-sm btn-danger"><i className="bi bi-trash3"></i></button>
                  </td>
                :
                  <td>
                    <div className="form-check form-switch">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        id={d.name} 
                        checked={d.status === "E"} 
                        onClick={() => setCurrentItem(d)}
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        readOnly
                      />
                    </div>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Xác nhận</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            Bạn có chắc chắn muốn thực hiện thao tác này không?
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleChange(currentItem)}>Xác nhận</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredData.length === 0 ? "" : (
        <nav aria-label="Page navigation example">
          <ul className="pagination mx-3 justify-content-end">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>Trước</a>
            </li>
            {Array.from({ length: Math.ceil(totalData / dataPerPage) }, (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); paginate(index + 1); }}>{index + 1}</a>
              </li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(totalData / dataPerPage) ? 'disabled' : ''}`}>
              <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>Tiếp theo</a>
            </li>
          </ul>
        </nav>
      )}
    </PrinterList>
  )
}

const PrinterList = styled.div`
  padding: 0px 24px 10px 24px;
`;