function nhanVien(
    _taiKhoan,
    _hoVaTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
) {
    this.taiKhoan = _taiKhoan;
    this.hoVaTen = _hoVaTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    //    method
    this.tinhLuong = function () {
        var tongLuong = 0;
        if (this.chucVu === "Sếp") {
            tongLuong = this.luongCoBan * 3;
        }
        if (this.chucVu === "Trưởng phòng") {
            tongLuong = this.luongCoBan * 2;
        }
        if (this.chucVu === "Nhân viên") {
            tongLuong = this.luongCoBan * 1;
        }
        return tongLuong;
    };
    this.xepLoai = function () {
        var xepLoaiNhanVien = "";
        if (+this.gioLam < 160) {
            xepLoaiNhanVien = "Trung Bình";
        }
        else if (160 <= +this.gioLam && +this.gioLam < 176) {
            xepLoaiNhanVien = "Khá";
        }
        else if (176 <= +this.gioLam && +this.gioLam < 192) {
            xepLoaiNhanVien = "Giỏi";
        }
        else if (+this.gioLam >= 192) {
            xepLoaiNhanVien = "Xuất Sắc";
        }
        return xepLoaiNhanVien;
    };
};
