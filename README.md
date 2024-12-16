# BTL CNPM - BK SSPS

Bach Khoa Student Smart Printing Service.

## Mô tả
Dịch vụ in ấn thông minh cho sinh viên tại trường Đại học Bách Khoa nhằm cung cấp giải pháp in tài liệu cho sinh viên một cách tiện lợi và có hiệu quả. Hệ thống bao gồm các máy in được bố trí tại nhiều khu vực trong trường. Mỗi sinh viên có thể dễ dàng tải tài liệu lên hệ thống, chọn máy in mong muốn và thiết lập các tùy chọn in như kích thước giấy, số bản sao, in một hay hai mặt. Hệ thống cũng theo dõi lịch sử in ấn của sinh viên, có tính năng bảo mật tốt và có khả năng hỗ trợ sinh viên nạp thêm số trang in nếu cần thiết thông qua các hệ thống thanh toán trực tuyến. Nhân viên Dịch vụ In ấn Sinh viên (SPSO) có tính năng quản lý máy in và quản lý các cấu hình khác của hệ thống.

## Các chức năng

Ở đây nhóm chỉ phát triển module quản lí máy in cho SPSO gồm những chức năng sau:

+ Chức năng đăng nhập
+ Xem thông tin và trạng thái các máy in có trên hệ thống
+ Thêm máy in vào hệ thống
+ Chỉnh sửa thông tin và trạng thái các máy in trên hệ thống
+ Bật/tắt máy in
+ Xóa máy in khỏi hệ thống

## Kiến trúc
gồm 2 phần chính là frontend và backend được hiện thực bằng các công cụ sau:
+ Frontend:
    + ReactJS
    + Vite
    + Axios
    + Bootstrap
+ Backend:
    + NodeJS

Ngoài ra, cơ sở dữ liệu được hiện thực bằng MongoDB.

## Cài đặt

+ Clone hoặc tải file từ repository này
```c
git clone https://github.com/Yudov03/SSPS.git
```
+ Truy vấn vào thư mục của project
```c
cd SSPS
```
+ Khởi tạo cở sở dữ liệu 
    + Tạo database cho MongoDB
+ Cài đặt các dependencies
    + Đối với Frontend
    ```c
    cd Frontend
    npm i
    ```
    + Đối với Backend
    ```c
    cd Backend
    ```
+ Khởi động ứng dụng
    + Đối với Frontend
    ```c
    npm run dev
    ```
    + Đối với Backend
    ```c
    node server.js
    ```

Tuy nhiên nếu bạn không tạo mới dữ liệu, bạn có thể dùng dữ liệu trong file db.json của chúng tôi bằng cách mở một terminal mới và thực hiện (không chạy Backend):
+ cd Frontend
+ json-server --watch db.json

## Người đóng góp

Chủ biên: [Võ Lý Đắc Duy](https://github.com/Yudov03)

Back-end: [Trần Tường Khang](https://github.com/KPoca), [Trần Tuấn Kiệt](https://github.com/trankiet2004), [Võ Lý Đắc Duy](https://github.com/Yudov03)

Front-end: [Võ Lý Đắc Duy](https://github.com/Yudov03), [Võ Duy Hiệu](https://github.com/Doianhtelamem)

Viết báo cáo: [Võ Lý Đắc Duy](https://github.com/Yudov03), [Võ Duy Hiệu](https://github.com/Doianhtelamem), [Trần Tường Khang](https://github.com/KPoca), [Trần Tuấn Kiệt](https://github.com/trankiet2004), [Trần Võ Anh Kiệt]()
