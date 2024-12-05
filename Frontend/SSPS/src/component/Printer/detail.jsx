import { useState, useEffect } from "react";
import { useNavigate, useParams,  useLocation} from "react-router-dom";
import AxiosInstance from "../Axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
                    <svg width="150" height="150" className="p-1 border border-1 border-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="medicine"><g><path fill="#78b9eb" d="M8 10h14v6H8zM27 30v18H3V30zm-7 11v-4h-3v-3h-4v3h-3v4h3v3h4v-3zm39 2v4h-6v-4a3 3 0 0 1 6 0zm-15 5a3 3 0 0 1 0 6h-4v-6z"></path><circle cx="41" cy="36" r="6" fill="#78b9eb"></circle><circle cx="55" cy="22" r="5.996" fill="#78b9eb"></circle><path fill="#006df0" d="M44 47h-8a4 4 0 0 0 0 8h8a4 4 0 0 0 0-8zm-5 6h-3a2 2 0 0 1 0-4h3zm5 0h-3v-4h3a2 2 0 0 1 0 4zm12-14a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4zm2 12a2 2 0 0 1-4 0v-3h4zm0-5h-4v-3a2 2 0 0 1 4 0zM41 29a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5z"></path><path fill="#006df0" d="M37 35h8v2h-8zM59.949 26.95A7 7 0 1 0 55 29a6.957 6.957 0 0 0 4.949-2.05zM50 22a4.966 4.966 0 0 1 .829-2.757l1.343 1.343 1.414-1.414-1.343-1.343a5 5 0 0 1 6.928 6.928L55 20.586 53.586 22l4.171 4.171A5 5 0 0 1 50 22zm-25.63 1.21-1.19-.34A3.009 3.009 0 0 1 21 19.98V17h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v2.98a3.009 3.009 0 0 1-2.18 2.89l-1.19.34A5.022 5.022 0 0 0 2 28.02V52a3.009 3.009 0 0 0 3 3h20a3.009 3.009 0 0 0 3-3V28.02a5.022 5.022 0 0 0-3.63-4.81zM9 11h12v4H9zm17 41a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3h22zm0-5H4V31h22zm0-18H4v-.98a3.009 3.009 0 0 1 2.18-2.89l1.19-.34A5.022 5.022 0 0 0 11 19.98V17h8v2.98a5.022 5.022 0 0 0 3.63 4.81l1.19.34A3.009 3.009 0 0 1 26 28.02z"></path><path fill="#006df0" d="M10 42h2v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm1-4h2a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h2v2h-2a1 1 0 0 0-1 1v2h-2v-2a1 1 0 0 0-1-1h-2Z"></path></g></svg>      
                <div className="">
                    <label style={{ fontWeight: 'bold' }} htmlFor="statusid"></label>
                    <div className="form-check form-switch ms-2 ">
                        < input 
                            disabled 
                            className="form-check-input" 
                            type="checkbox" 
                            role="switch" 
                            id="statusid" 
                            checked={values.status==="E"} 
                            onClick={e => setValues({ ...values, status: values.status==="E"?"D":"E" })} readOnly 
                        />
                    </div>
                </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
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
                <div className="">
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
                <div className="">
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
            <div className="d-grid gap-2 col-3 mx-auto pt-5 pb-5">
                <Link to={`/printers/edit/${id}`} className="btn btn-sm btn-primary me-2">Chỉnh sửa</Link>
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