var listbv;
var listnd;
var listha;
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
    var nd1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';    
    var nd2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd4 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd5 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd6 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd7 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd8 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd9 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd10 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var ha1 = '/Image/ava-an-group-700x465.jpg'; 
    var ha2 = '/Image/ava-4-cach-lam-tron-700x465.jpg'; 
    var ha3 = '/Image/ava-3-cach-tinh-tong-700x465.jpg'; 
    var ha4 = '/Image/ava-ham-minmax-700x465.jpg'; 
    var ha5 = '/Image/ham-do-tim-700x465.jpg'; 
    var ha6 = '/Image/ava-ham-chuoi-700x465.jpg'; 
    var ha7 = '/Image/ava-ham-can-ban-700x465.jpg'; 
    var ha8 = '/Image/ava-ham-sumifs-700x465.jpg'; 
    var ha9 = '/Image/ava-ham-sumif-700x465.jpg'; 
    var ha10 = '/Image/ava-ham-sum-700x465.jpg';    
    if(localStorage.getItem('listha')){
        listha = JSON.parse(localStorage.getItem('listha'));
    }else{
        listha = [];
    }

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
    var ktha = 0;
    var ktall = 0;
    var ktck = 0;
    for(var i = 0; i < listha.length; i++){
        if(listha[i]===b1 || listha[i]===b2 || listha[i]===b3 || listha[i]===b4 || listha[i]===b5 || listha[i]===b6 || listha[i]===b7 || listha[i]===b8 || listha[i]===b9 || listha[i]===b10){
            ktha++;
        }
     }
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
    if(ktha>0){
        false;
    }else{
        listha.push(ha1,ha2,ha3, ha4, ha5,ha6,ha7,ha8,ha9,ha10);
        localStorage.setItem(b1+'a',ha1);   
        localStorage.setItem(b2+'a',ha2); 
        localStorage.setItem(b3+'a',ha3); 
        localStorage.setItem(b4+'a',ha4); 
        localStorage.setItem(b5+'a',ha5); 
        localStorage.setItem(b6+'a',ha6); 
        localStorage.setItem(b7+'a',ha7); 
        localStorage.setItem(b8+'a',ha8); 
        localStorage.setItem(b9+'a',ha9); 
        localStorage.setItem(b10+'a',ha10);  

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
        ghils(localStorage.getItem('phiendangnhap'),Date(),'Chỉnh sửa bài viết '+tieude)
    }else{
        addlistbv(tieude);
        addbv(tieude,noidung);
        listbvcongkhai(tieude);
        listhinhanhbv(hinhanh,tieude);
        ghils(localStorage.getItem('phiendangnhap'),Date(),'Thêm bài viết '+tieude)
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
    var tb = "<tr><td colspan="+5+">Danh sách Bài viết ("+listbv.length+" bài)</td></tr><tr><td>STT</td><td>Tiêu đề</td><td>Hình ảnh</td><td>Nội dung</td><td>Hành động</td></tr>";
    for(var i = 0; i < listbv.length;i++){
        var anh = listbv[i] + 'a';
       var row = '<tr><td>'+(i+1)+'</td><td>'+listbv[i]+'</td><td><img src="'+hienthi(anh)+'" style="width: 50px" alt="Preview" id="imgPreview" ></td><td>'+localStorage.getItem(listbv[i])+'</td><td><div id=\'l'+i+'\' onchange=\'chinhsua('+i+')\'>'+sapxepaction(i)+'</div></td></tr>';
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
        var row = '<tr onclick="xemchitietbv('+i+')"><td class="baiviet" width="100px" height="100px"><img src="'+hienthi(anh)+'" style="width: 400px" alt="Preview" id="imgPreview" ></td><td class="baiviet"><h2>'+listcongkhai[i]+'</h2><br><p style="font-size: 20px;">'+localStorage.getItem(listcongkhai[i])+'</p></td></tr>';
        tb += row;
     }
     return tb;
 
}
function xemchitietbv(i){
    listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
    var td = listcongkhai[i];
    var nd = localStorage.getItem(listcongkhai[i]);
    ghils(localStorage.getItem('phiendangnhap'),Date(),'Xem bài viết '+listcongkhai[i])
    localStorage.setItem('phienbaiviet',td);
    location.href='../page/chitietbaiviet.html'
}
function chitietbaiviet(){
    listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
    var td = localStorage.getItem('phienbaiviet');
    var nd = localStorage.getItem(td);
    var anh = td + 'a';
    var body = '<h1 style="font-size: 40px" class="cttieude">'+td+'</h1>'+'<br>' + '<div class="cttieude"><img src="'+hienthi(anh)+'" alt="Preview" id="imgPreview class="cttieude" ></div>'+'<br>' + '<div class="cttieude" style="font-size: 30px">'+nd+'</div>';
    return body;
}
function hienanh(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    a = document.getElementById('myFileInput');
    // output.src='/image/'+a.files[0].name;
    output.style.width ='100px'
    output.style.height ='50px'
  };
  function hienthi(i){
    recent = localStorage.getItem(i);
    if(recent){
        var a = recent;
    }
    return a;
}
// function luuanh(){
//     var tieude = document.getElementById('tieude').value;
//     a = document.getElementById('myFileInput')
//     console.log('/image/'+a.files[0].name);
//     localStorage.setItem(tieude+'a','/image/'+a.files[0].name)
    
// }
function sapxepaction(i){
    var lc = '';
    var o1 = '<button type="button" onclick="chinhsua(\''+i+'\')">Chỉnh sửa</button>';
    var o2 = '<button type="button" onclick="xoa(\''+i+'\')">Xóa</button>';
        lc = o1 + o2;
    return lc;    
}
function chinhsua(i){
    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    } 
        document.getElementById('tieude').value=listbv[i];
        document.getElementById('noidung').value=localStorage.getItem(listbv[i]);
        document.getElementById('formbv').innerText='Chỉnh sửa bài viết';
        location.href="#formbv"
        
} 
function xoa(i){
    if(localStorage.getItem('listha')){
        listha = JSON.parse(localStorage.getItem('listha'));
    }else{
        listha = [];
    }

    xoalistbv(i);
    window.location="../../page/trangdangbaiviet.html";
}
function xoalistbv(i){
    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    }
        var idremove = listbv[i];
        listbv = listbv.filter(item => item !== idremove);
        localStorage.setItem('listbv',JSON.stringify(listbv)); 
        ghils(localStorage.getItem('phiendangnhap'),Date(),'Xóa bài viết '+listbv[i])
        alert('Đã xóa');
        
}
var phanhoi = {
    user : "",
    thoigian : "",
    ykien : ""
};
function ghiph(user,thoigian,baiviet,ykien){
    if(localStorage.getItem('phanhoi')){
        phoi = JSON.parse(localStorage.getItem('phanhoi'));
    }else{
        phoi = [];
    }
    phanhoi.user = user; 
    phanhoi.thoigian = thoigian; 
    phanhoi.baiviet = baiviet;
    phanhoi.ykien = ykien;
    if(user === "" || thoigian === "" || baiviet ==="" || ykien ===""){
        alert('Nhập chưa đủ thông tin!\nVui lòng điền thêm giá trị!')
    }else{
        phoi.push(phanhoi);
    alert('Gửi phản hồi thành công!!')
    localStorage.setItem('phanhoi',JSON.stringify(phoi))
    }
    
}
function guiykien(){
    var noidung = document.getElementById('phanhoi').value;
    ghiph(localStorage.getItem('phiendangnhap'),Date(),localStorage.getItem('phienbaiviet'),noidung);
    
}

