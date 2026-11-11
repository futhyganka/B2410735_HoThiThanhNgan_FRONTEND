import axios from 'axios';

const commonConfig = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

export default (baseURL) => {
    // baseURL là địa chỉ gốc của Backend API
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};

/**
Hàm	Chức năng	
axios.get()	Lấy dữ liệu	
axios.post()	Gửi dữ liệu mới	
axios.put()	Cập nhật toàn bộ dữ liệu	
axios.patch()	Cập nhật một phần dữ liệu	
axios.delete()	Xóa dữ liệu	Xóa một sinh viên
axios.request()	Gửi request với cấu hình tùy chỉnh
axios.head()	Lấy thông tin header của response
axios.options()	Kiểm tra các phương thức HTTP được hỗ trợ	
 */
