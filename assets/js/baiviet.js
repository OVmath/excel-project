var listbv;
var listnd;
function bvmd(){
    var b1 = 'Cách Ẩn cột, dòng và Group cột, dòng trong excel nhanh nhất';
    var b2 = '4 cách làm tròn số trong excel';
    var b3 = '3 cách tính tổng thường dùng trong excel';
    var b4 = 'Cách dùng hàm MIN, MAX trong Excel';
    var b5 = 'Các hàm dò tìm trong excel (vlookup, match, index …)';
    var b6 = 'Các hàm xử lý chuỗi ký tự trong excel';
    var b7 = 'Tự học Excel cơ bản từ A đến Z – Full tài liệu, video hướng dẫn';
    var b8 = 'Cách dùng hàm SUMIFS tính tổng với nhiều điều kiện trong excel';
    var b9 = 'Cách dùng hàm SUMIF tính tổng có điều kiện trong excel';
    var b10 = 'Cách dùng hàm SUM để tính tổng trong Excel';
    var nd1 = 'Trong bài viết này, mình sẽ hướng dẫn các bạn cách ẩn cột/dòng hoặc cách group cột/dòng trong excel nhanh chóng và thuận tiện<br>1. Cách ẩn cột/dòng và bỏ ẩn cột/dòng trong excel:<br>2. Cách group cột và dòng trong excel';    
    var nd2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd4 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd5 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd6 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd7 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd8 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd9 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd10 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';

    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    }
    if(localStorage.getItem('listcongkhai')){
        listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
    }else{
        listcongkhai = [];
    }
    var ktall = 0;
    var ktck = 0;
    for(var i = 0; i < listbv.length; i++){
       if(listbv[i]===b1 || listbv[i]===b2 || listbv[i]===b3 || listbv[i]===b4 || listbv[i]===b5 || listbv[i]===b6 || listbv[i]===b7 || listbv[i]===b8 || listbv[i]===b9 || listbv[i]===b10){
           ktall++;
       }
    }
    for(var i = 0; i < listcongkhai.length; i++){
        if(listcongkhai[i]===b1 || listcongkhai[i]===b2 || listcongkhai[i]===b3 || listcongkhai[i]===b4 || listcongkhai[i]===b5 || listcongkhai[i]===b6 || listcongkhai[i]===b7 || listcongkhai[i]===b8 || listcongkhai[i]===b9 || listcongkhai[i]===b10){
            ktck++;
        }
     }
    if(ktall>0){
        false;
    }else{
        listbv.push(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10);
        localStorage.setItem('listbv',JSON.stringify(listbv)); 
        localStorage.setItem(b1,nd1);   
        localStorage.setItem(b2,nd2); 
        localStorage.setItem(b3,nd3); 
        localStorage.setItem(b4,nd4); 
        localStorage.setItem(b5,nd5); 
        localStorage.setItem(b6,nd6); 
        localStorage.setItem(b7,nd7); 
        localStorage.setItem(b8,nd8); 
        localStorage.setItem(b9,nd9); 
        localStorage.setItem(b10,nd10); 
    }
    if(ktck>0){
        false;
    }else{
        listcongkhai.push(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10);
        localStorage.setItem('listcongkhai',JSON.stringify(listcongkhai));  

    }
    // alert(listbv.length)
}
bvmd()
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
        listbvcongkhai(tieude);
        listhinhanhbv(hinhanh,tieude);
    }    
    }else{
        alert('Đăng bài thất bại!')
    }
}
var listcongkhai;
function listbvcongkhai(id){
    
    if(localStorage.getItem('listcongkhai')){
        listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
    }else{
        listcongkhai = [];
    }
    listcongkhai.push(id);
            localStorage.setItem('listcongkhai',JSON.stringify(listcongkhai));  
}
var listha;
function listhinhanhbv(id,a){
    
    if(localStorage.getItem('listha')){
        listha = JSON.parse(localStorage.getItem('listha'));
    }else{
        listha = [];
    }
    listha.push(id);
            localStorage.setItem(a+'a',JSON.stringify(listha));  
}
 
     
             
function addbv(id,mk){    
            localStorage.setItem(id,mk);    
}
function addlistbv(noidung){
    listbv.push(noidung);
            localStorage.setItem('listbv',JSON.stringify(listbv));  
}

function dsbv(){
    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    } 
    var tb = "<tr><td colspan="+4+">Danh sách Bài viết ("+listbv.length+" bài)</td></tr><tr><td>STT</td><td>Tiêu đề</td><td>Hình ảnh</td><td>Nội dung</td></tr>";
    for(var i = 0; i < listbv.length;i++){
        var anh = listbv[i] + 'a';
       var row = '<tr><td>'+(i+1)+'</td><td>'+listbv[i]+'</td><td><img src="'+hienthi(anh)+'" style="width: 50px" alt="Preview" id="imgPreview" ></td><td>'+localStorage.getItem(listbv[i])+'</td></tr>';
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
function hienthibaivietck(){
    if(localStorage.getItem('listcongkhai')){
        listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
    }else{
        listcongkhai = [];
    }
    var tb = "";
    for(var i = 0; i < listcongkhai.length;i++){
        var anh = listcongkhai[i] + 'a';
        var row = '<tr onclick="xemchitietbv('+i+')"><td class="baiviet" width="100px" height="100px"><img src="'+hienthi(anh)+'" style="width: 50px" alt="Preview" id="imgPreview" ></td><td class="baiviet">'+listcongkhai[i]+'<br>'+localStorage.getItem(listcongkhai[i])+'</td></tr>';
        tb += row;
     }
     return tb;
 
}
function xemchitietbv(i){
    listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
    var td = listcongkhai[i];
    var nd = localStorage.getItem(listcongkhai[i]);
    
    localStorage.setItem('phienbaiviet',td);
    location.href='../page/chitietbaiviet.html'
}
function chitietbaiviet(){
    listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
    var td = localStorage.getItem('phienbaiviet');
    var nd = localStorage.getItem(td);
    var anh = td + 'a';
    var body = td +'<br>' + '<td><img src="'+hienthi(anh)+'" alt="Preview" id="imgPreview" ></td>'+'<br>' + nd;
    return body;
}
function hienanh(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.width ='50px'
    output.style.height ='50px'
  };
  function hienthi(i){
    recent = localStorage.getItem(i);
    if(recent){
        var a = recent;
    }
    return a;
}
