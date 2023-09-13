// Định dạng giá trị tài khoản
function validateUserName()
{
var inputValue = document.getElementById("tknv").value;
var regexPattern = /^[0-9]{4,6}$/;
if(regexPattern.test(inputValue))
  {
    getElement("#tbTKNV").innerHTML= '';
return true;
  }
else
  {
    getElement("#tbTKNV").innerHTML= 'Tài khoản gồm 4-6 chữ số từ 0-9';
return false;
  }
}
// Định dạng giá trị tên nhân viên
function validateName()
{
var inputValue = document.getElementById("name").value;
var regexPattern = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm;
if(regexPattern.test(inputValue))
  {
    getElement("#tbTen").innerHTML= '';
return true;
  }
else
  {
    getElement("#tbTen").innerHTML= 'Tên là tiếng việt có dấu "Nguyễn Văn A"';
return false;
  }
}
// Định dạng giá trị email
function validateEmail()
{
var inputValue = document.getElementById("email").value;
var regexPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
if(regexPattern.test(inputValue))
  {
    getElement("#tbEmail").innerHTML= '';
return true;
  }
else
  {
    getElement("#tbEmail").innerHTML= 'Vui lòng nhập đúng định dạng email "nguyenva@email.com.vn"';
return false;
  }
}
// Định dạng giá trị MM/DD/YYYY
function validateMDY()
{
var inputValue = document.getElementById("datepicker").value;
var regexPattern =/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s(\d\d?)(st|nd|rd|th)?,?\s(\d{4})|(\d\d?)[\.\/-](\d\d?)[\.\/-](\d{4})/gm;
if(regexPattern.test(inputValue))
  {
    getElement("#tbNgay").innerHTML= '';
return true;
  }
else
  {
    getElement("#tbNgay").innerHTML= 'Vui lòng nhập ngày làm việc';
return false;
  }
}
// Định dạng giá trị mật khẩu
function validatePass()
{
var inputValue = document.getElementById("password").value;
var regexPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,6}$/;
if(regexPattern.test(inputValue))
  {
    getElement("#tbMatKhau").innerHTML= '';
return true;
  }
else
  {
    getElement("#tbMatKhau").innerHTML= 'Mật khẩu gồm 4-6 ký tự. bao gồm ít nhất 1 chữ hoa, 1 chữ số';
return false;
  }
}
// Định dạng giá trị quy định lương cơ bản
function validateLuongCoBan()
{
var inputValue =+document.getElementById("luongCB").value;
if(inputValue > 99999 && inputValue < 20000001)
  {
    getElement("#tbLuongCB").innerHTML= '';
return true;
  }
else
  {
    getElement("#tbLuongCB").innerHTML= 'Nhập mức lương từ 1.000.000 - 20.000.000';
return false;
  }
}
// Định dạng giá trị quy định giờ làm
function validateGioLam()
{
var inputValue =+document.getElementById("gioLam").value;
if(inputValue > 79 && inputValue < 201)
  {
    getElement("#tbGiolam").innerHTML= '';
return true;
  }
else
  {
    getElement("#tbGiolam").innerHTML= 'Nhập số giờ làm từ 80 - 200 giờ / tháng';
return false;
  }
}
// Định dạng giá trị chức vụ
function validateChucVu()
{
var inputValue = document.getElementById("chucvu").value;
var option1 = 'Sếp';
var option2 = 'Trưởng phòng';
var option3 = 'Nhân viên';
if(inputValue == option1 || inputValue == option2 || inputValue == option3)
  {
    getElement("#tbChucVu").innerHTML= '';
return true;
  }
else
  {
    getElement("#tbChucVu").innerHTML= 'Vui lòng chọn chức vụ : sếp, trưởng phòng, nhân viên';
return false;
  }
}