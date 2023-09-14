// kiểm tra validation
function valiatetion1(){
    validateLuongCoBan();
    validateUserName();
    validateName();
    validateEmail();
    validatePass();
    validateGioLam();
    validateChucVu();
    validateChucVu();
    validateMDY();
    if(validateLuongCoBan() == true
        && validateUserName() == true
        && validateName() == true    
        && validateEmail() == true    
        && validatePass() == true
        && validateGioLam() == true   
        && validateChucVu() == true
        && validateMDY() == true 
    ){
        return true;
    }
    else{
        return false;
    }
}
