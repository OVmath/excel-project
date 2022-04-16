var listid;
function dangki(){
    var id = document.getElementById('tendangki').value;    
    var mk1 = document.getElementById('mk1').value;   
    var mk2 = document.getElementById('mk2').value;    
    if(localStorage.getItem('listid')){
        listid = JSON.parse(localStorage.getItem('listid'));
    }else{
        listid = [];
    }  
        if(mk1 !== mk2){
            alert('Mật khẩu không khớp!\nVui lòng kiểm tra lại mật khẩu!')
        }
        if(checkdk() !== ""){
            alert(checkdk())
        }
        if(checkdk()==="" && mk1 === mk2){
            window.location="../page/login.html";
            alert('Đăng kí thành công!');
            adduser(id,mk2); 
            addlist(id);
            addlistuser(id);
            ghils(id,Date(),'Đăng kí tài khoản');
            
        }       
    }
function doimatkhau(){
        var id = document.getElementById('tendangki').value;    
        var mk1 = document.getElementById('mk1').value;   
        var mk2 = document.getElementById('mk2').value;   
        var mk = document.getElementById('mkdangnhap').value;
        var mkdadangki = localStorage.getItem(id); 
        if(localStorage.getItem('listid')){
            listid = JSON.parse(localStorage.getItem('listid'));
        }else{
            listid = [];
        }  
        if(mk !== mkdadangki){
            alert('Mật khẩu không đúng!\nVui lòng kiểm tra lại mật khẩu!')
        }
        if(mk1 !== mk2){
                alert('Mật khẩu mới không khớp!\nVui lòng kiểm tra lại mật khẩu!')
        }
        if(mk1 === mk2 && mk === mkdadangki){
                window.location="../page/login.html";
                alert('Đổi mật khẩu thành công!');
                adduser(id,mk2); 
                ghils(id,Date(),'Đổi mật khẩu')
        }
                
                 
    }
function adduser(id,mk){    
            localStorage.setItem(id,mk);    
}
function addlist(id){
    listid.push(id);
            localStorage.setItem('listid',JSON.stringify(listid));  
}
function addlistuser(id){
    var listuser;
    if(localStorage.getItem('listuser')){
        listuser = JSON.parse(localStorage.getItem('listuser'));
    }else{
        listuser = [];
    }
    listuser.push(id);
            localStorage.setItem('listuser',JSON.stringify(listuser));  
}
function dangnhap(){
    var id = document.getElementById('iddangnhap').value;
    var mk = document.getElementById('mkdangnhap').value;
    var mkdadangki = localStorage.getItem(id);
    if(id === 'Admin' && mk === 'nghia@123'|| mkdadangki === mk){
        window.location="../page/trang_ca_nhan.html";
        alert('Đăng nhập thành công!');
        localStorage.setItem('phiendangnhap',id)
        ghils(id,Date(),'Đăng nhập tài khoản');
    }else{
        alert('Đăng nhập không thành công!\nVui lòng kiểm tra lại thông tin đăng nhập!')
    }
}
function thoat(){
    localStorage.removeItem('phiendangnhap');
}
function checkdk(){
    var id = document.getElementById('tendangki').value;  
    var mk1 = document.getElementById('mk1').value;   
    var mk2 = document.getElementById('mk2').value; 
    if(localStorage.getItem('listid')){
        listid = JSON.parse(localStorage.getItem('listid'));
    }else{
        listid = [];
    }
    var checkid = "";
    if(id=="" || mk1 == "" || mk2 == ""){
        checkid = "Yêu cầu nhập đủ thông tin!!"
    }
    for(var i = 0; i < listid.length;i++){
        if(id === listid[i]){
           checkid = "Tên đăng nhập đã tồn tại!\nVui lòng nhập tên khác!";
        } 
    } 
    return checkid;
}
function test(){
    alert('hello')
}
