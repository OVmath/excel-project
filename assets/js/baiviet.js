var listbv;
var listnd;
function thembaiviet(){
    var tieude = document.getElementById('tieude').value;  
    var noidung = document.getElementById('noidung').value;    
    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    }   
    var kq = true;
    if(checkdb() !== ""){
         kq =confirm(checkdb());
    }
    if(kq == true && tieude !== "" && noidung !== ""){
    alert('Đăng bài viết thành công!');
    if(checkdb()!== ""){
        addbv(tieude,noidung);
    }else{
        addlistbv(tieude);
        addbv(tieude,noidung);
    }    
    }else{
        alert('Đăng bài thất bại!')
    }
}
    
     
             
function addbv(id,mk){    
            localStorage.setItem(id,mk);    
}
function addlistbv(noidung){
    listbv.push(noidung);
            localStorage.setItem('listbv',JSON.stringify(listbv));  
}
function dem(){
    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    }  
    var dem = 0;
    for(var i = 0; i < listbv.length; i++){
        dem+=1
    }
    return 'b'+dem;
}
function dsbv(){
    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    } 
    var tb = "<tr><td colspan="+4+">Danh sách Bài viết ("+listbv.length+" bài)</td></tr><tr><td>STT</td><td>Tiêu đề</td><td>Nội dung</td></tr>";
    for(var i = 0; i < listbv.length;i++){
       var row = '<tr><td>'+(i+1)+'</td><td>'+listbv[i]+'</td><td>'+localStorage.getItem(listbv[i])+'</td></tr>';
       tb += row;
    }
    return tb;

}
function checkdb(){
    var id = document.getElementById('tieude').value;  
    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    }
    var checkid = "";
    for(var i = 0; i < listbv.length;i++){
        if(id === listbv[i]){
           checkid = "Tiêu đề đã tồn tại!\nBạn có muốn chỉnh sửa bài viết đó không?";
        } 
    } 
    return checkid;
}