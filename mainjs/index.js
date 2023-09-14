var tepNV = [];
// ------------------------
function getElement(selector) {
    return document.querySelector(selector);
}


// ------------------------
// thêm nhân viên mới
function themNhanVien() {
    if(valiatetion1() == true
    ){
    var taiKhoan = +getElement("#tknv").value;
    var hoVaTen = getElement("#name").value;
    var email = getElement("#email").value;
    var matKhau = getElement("#password").value;
    var ngayLam = getElement("#datepicker").value;
    var luongCoBan = getElement("#luongCB").value;
    var chucVu = getElement("#chucvu").value;
    var gioLam = getElement("#gioLam").value;

    var NV = new nhanVien(
        taiKhoan,
        hoVaTen,
        email,
        matKhau,
        ngayLam,
        luongCoBan,
        chucVu,
        gioLam
    );
    tepNV.push(NV)
    var HTMLstring = "";
    for (var i = 0; i < tepNV.length; i++) {
        var nhanVienDisplay = tepNV[i];
        HTMLstring += `
        <tr>
		<th class="nowrap">
		<span class="mr-1">${nhanVienDisplay.taiKhoan}</span>
		</th>
		<th>${nhanVienDisplay.hoVaTen}</th>
		<th>${nhanVienDisplay.email}</th>
		<th>${nhanVienDisplay.ngayLam}</th>
		<th>${nhanVienDisplay.chucVu}</th>									
		<th>${nhanVienDisplay.tinhLuong()}</th>
		<th>${nhanVienDisplay.xepLoai()}</th>
		<th><button class="btn-danger" onclick = "xoaNV('${nhanVienDisplay.taiKhoan}')"  >Delete</button></th>
		</tr>
        `
    };
    getElement("#tableDanhSach").innerHTML = HTMLstring;
}
else{
    // getElement("#tbLuongCB").innerHTML= 'Tài khoản gồm 4-6 chữ số từ 0-9';
    alert("kiểm tra lại thông tin")
}
};

// cập nhật nhân viên
// tạo funtion duyệt mảng lấy obj nhân viên
// so sánh tài khoản nv so với tài khoản nv nhập vào
function xoaNV(taiKhoan){
    var index = -1;
    for(var i = 0; i < tepNV.length; i++){
        var nvInfor = tepNV[i];
        if(nvInfor.taiKhoan == taiKhoan){
            index = i;
            break;
        };
    };
    tepNV.splice(index,1);
    var HTMLstring = "";
    for (var i = 0; i < tepNV.length; i++) {
        var nhanVienDisplay = tepNV[i];
        HTMLstring += `
        <tr>
		<th class="nowrap">
		<span class="mr-1">${nhanVienDisplay.taiKhoan}</span>
		</th>
		<th>${nhanVienDisplay.hoVaTen}</th>
		<th>${nhanVienDisplay.email}</th>
		<th>${nhanVienDisplay.ngayLam}</th>
		<th>${nhanVienDisplay.chucVu}</th>									
		<th>${nhanVienDisplay.tinhLuong()}</th>
		<th>${nhanVienDisplay.xepLoai()}</th>
		<th><button class="btn-danger" onclick = "xoaNV('${nhanVienDisplay.taiKhoan}')"  >Delete</button></th>
		</tr>
        `
    };
    getElement("#tableDanhSach").innerHTML = HTMLstring;
};


// lấy thông tin nhân viên
function layThongTinNhanVien(){
    if(valiatetion1() == true)
    {
    var nvSearch = +getElement("#tknv").value;

    for(var i = 0; i < tepNV.length; i++){
        var nvInfor = tepNV[i];
        if(nvSearch == nvInfor.taiKhoan){
            index = i;
            var taiKhoan = +getElement("#tknv").value;
            var hoVaTen = getElement("#name").value;
            var email = getElement("#email").value;
            var matKhau = getElement("#password").value;
            var ngayLam = getElement("#datepicker").value;
            var luongCoBan = getElement("#luongCB").value;
            var chucVu = getElement("#chucvu").value;
            var gioLam = getElement("#gioLam").value;
        
            var NV = new nhanVien(
                taiKhoan,
                hoVaTen,
                email,
                matKhau,
                ngayLam,
                luongCoBan,
                chucVu,
                gioLam
            );
            tepNV[index] = NV;
            var HTMLstring = "";
            for (var i = 0; i < tepNV.length; i++) {
                var nhanVienDisplay = tepNV[i];
                HTMLstring += `
                <tr>
                <th class="nowrap">
                <span class="mr-1">${nhanVienDisplay.taiKhoan}</span>
                </th>
                <th>${nhanVienDisplay.hoVaTen}</th>
                <th>${nhanVienDisplay.email}</th>
                <th>${nhanVienDisplay.ngayLam}</th>
                <th>${nhanVienDisplay.chucVu}</th>									
                <th>${nhanVienDisplay.tinhLuong()}</th>
                <th>${nhanVienDisplay.xepLoai()}</th>
                <th><button class="btn-danger" onclick = "xoaNV('${nhanVienDisplay.taiKhoan}')"  >Delete</button></th>
                </tr>
                `
            };
            alert("Thay đổi thông tin thành công")
            getElement("#tableDanhSach").innerHTML = HTMLstring;
            break;
    }    
    }
};
};

// tìm nhân viên
function timLoaiNV(){
    var searchLoaiNV = getElement("#searchName").value;
    var loaiNVObj = [];
    for(var i = 0; i < tepNV.length ; i++){
        var tepNVSearch = tepNV[i];
        if(searchLoaiNV == tepNVSearch.xepLoai()){
            loaiNVObj.push(tepNV[i])
        }
    }
    var HTMLstring = "";
    for(var i = 0; i < loaiNVObj.length; i++){
        var xepLoaiNVDisplay = loaiNVObj[i];
        HTMLstring += `
        <tr>
        <th class="nowrap">
        <span class="mr-1">${xepLoaiNVDisplay.taiKhoan}</span>
        </th>
        <th>${xepLoaiNVDisplay.hoVaTen}</th>
        <th>${xepLoaiNVDisplay.email}</th>
        <th>${xepLoaiNVDisplay.ngayLam}</th>
        <th>${xepLoaiNVDisplay.chucVu}</th>									
        <th>${xepLoaiNVDisplay.tinhLuong()}</th>
        <th>${xepLoaiNVDisplay.xepLoai()}</th>
        <th><button class="btn-danger" onclick = "xoaNV('${xepLoaiNVDisplay.taiKhoan}')"  >Delete</button></th>
        </tr>`
    };
    getElement("#tableDanhSach").innerHTML = HTMLstring;
};