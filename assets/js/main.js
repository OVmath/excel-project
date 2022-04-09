function dangki(){
    var id = document.getElementById('tendangki').value;
    
    var mk1 = document.getElementById('mk1').value;
   
    var mk2 = document.getElementById('mk2').value;
   
    if(mk1 !== mk2){
        alert('Mật khẩu không khớp!\nVui lòng kiểm tra lại mật khẩu!')
    }else{
        localStorage.setItem(id, mk2);
        window.location="/page/login.html";
        alert('Đăng kí thành công!');
    
    } 
}
function dangnhap(){
    var id = document.getElementById('iddangnhap').value;
    var mk = document.getElementById('mkdangnhap').value;
    var mkdadangki = localStorage.getItem(id);
    if( mkdadangki !== mk){
        alert('Đăng nhập không thành công!\nVui lòng kiểm tra lại thông tin đăng nhập!')
    }
    else{
        window.location="/page/trang_ca_nhan.html";
        alert('Đăng nhập thành công!');
        localStorage.setItem('phiendangnhap',id)
    }
}
function thoat(){
    localStorage.removeItem('phiendangnhap');
}
