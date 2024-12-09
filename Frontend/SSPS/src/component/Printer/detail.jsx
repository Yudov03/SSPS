import { useState, useEffect } from "react";
import { useNavigate, useParams,  useLocation} from "react-router-dom";
import AxiosInstance from "../Axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function AddPrinter() {
    const { id } = useParams();
    const [values, setValues] = useState({
        name: '',
        ip: '',
        location: '',
        status: "D",
        lastUsed: '',
        condition: '',
        description: ''
    })
    useEffect(() => {
        AxiosInstance.get(`printers/${id}/`)
        .then(res => {
            setValues(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    const navigate = useNavigate();
    const location = useLocation();
    const handleBackButton = () => {
        if (location.state?.from === `/edit/${id}`) { 
            navigate('/printers'); 
        } else { 
            navigate(-1); // Go back to the previous page if it's not /edit 
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <StyledPrinterList>
        <StyledHeader>
            <Title>Thông tin chi tiết</Title>
            <>
            <button type="button" className="btn btn-light" onClick={handleBackButton}>Thoát</button>
            </>
        </StyledHeader>
        <hr />
        <div className="mx-5" style={{}}>
            <div>
            <div className="row">
                <div className="col-5">
                  <div className = "d-flex justify-content-center mt-3">
                    <img className="" src= '/src/assets/p.png' alt="Preview" style={{ width: '240px', height: '240px',border: "5px solid yellow", borderRadius: '20px', borderColor:values.status==="E"?"#1976d2":'#e75d5d'}} /> 
                    </div>
                    <div className="d-flex justify-content-center mt-2" >
                        <div>
                            {/* <div className="form-check form-switch me-3 " style={{ display: 'inline-block' }}>
                                < input 
                                    disabled 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    role="switch" 
                                    id="statusid" 
                                    checked={values.status==="E"} 
                                    onClick={e => setValues({ ...values, status: values.status==="E"?"D":"E" })} readOnly 
                                />
                            </div> */}
                            <b style={{color:values.status==="E"?"#1976d2":'#e75d5d'}}>{values.status==="E"?"ĐÃ KÍCH HOẠT":"CHƯA KÍCH HOẠT"}</b>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4" >
                        <div className="fw-bold">{values.condition==="R"?
                            <div >
                                <i className="bi bi-check-square"></i> Máy in sẵn sàng 
                            </div>:values.condition==="B"?<div >
                                <i className="bi bi-printer"></i> Máy in đang chạy
                            </div>:values.condition==="M"?<div >
                                <i className="bi bi-tools"></i> Máy in đang bảo trì
                            </div>:<div >
                                <i className="bi bi-x-octagon"></i> Máy in không được sử dụng
                            </div>}</div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <div>
                        <label style={{ fontWeight: 'bold' }} htmlFor="nameid">Tên:</label>
                        <input 
                            disabled 
                            type="text" 
                            className="form-control" 
                            id="nameid" 
                            placeholder="Nhập tên máy in" 
                            value={values.name} 
                            onChange={e => setValues({ ...values, name: e.target.value })} 
                        />
                    </div>
                    <div className="mt-2">
                        <label style={{ fontWeight: 'bold' }} htmlFor="ipid">Địa chỉ IP:</label>
                        <input 
                            disabled 
                            type="text" 
                            className="form-control" 
                            id="ipid" 
                            placeholder="Nhập ip máy in" 
                            value={values.ip} 
                            onChange={e => setValues({ ...values, ip: e.target.value })} 
                        />
                    </div>
                <div className="mt-2">
                    <label style={{ fontWeight: 'bold' }} htmlFor="positionid">Vị trí:</label>
                    <select 
                        disabled 
                        className="form-control" 
                        id="positionid" 
                        value={values.location} 
                        onChange={(event) => setValues({ ...values, location: event.target.value })}
                    >
                        <option value="" disabled>Chọn vị trí</option>
                        <option value="B1.203">B1.203</option>
                        <option value="H6.501">H6.501</option>
                        <option value="A4.402">A4.402</option>
                    </select>
                </div>
                <div className="mt-2">
                    <label style={{ fontWeight: 'bold' }} htmlFor="descriptionid">Mô tả:</label>
                    <textarea 
                        disabled 
                        style={{ height: 100 }} 
                        id="descriptionid" 
                        type="text" 
                        className="form-control" 
                        placeholder="Nhập mô tả chi tiết" 
                        value={values.description} 
                        onChange={e => setValues({ ...values, description: e.target.value })} 
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="d-grid gap-2 col-3 mx-auto pt-4 pb-5">
                {values.condition==="B"?
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Không thể chỉnh sửa khi máy in đang hoạt động!</Tooltip>}>
                        <div className="w-100">
                        <button className="btn btn-primary me-2 w-100" disabled>Chỉnh sửa</button>
                        </div>
                    </OverlayTrigger>
                :<>
                <button 
                    className="btn btn-primary me-2"
                    onClick={() => handleShow()} 
                >Chỉnh sửa</button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Bạn có chắc chắn muốn chỉnh sửa thông tin của máy in này?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Hủy</Button>
                    <Link to={`/printers/edit/${id}`} className="btn btn-primary"  onClick={handleClose}>Xác nhận</Link>
                    </Modal.Footer>
                </Modal>
                </>}
            </div>
        </div>
        </StyledPrinterList>
    );
};
  
const StyledPrinterList = styled.section`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 0px 24px;
`;

const Title = styled.h2`
  color: #242222;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0px;
`;