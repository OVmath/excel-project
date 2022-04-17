// var listbv;
// var listnd;
// var listha;
// var listcs;
// var lancs = {
//     noidung: "",
//     user: "",
//     thoigian: "",
// }
// var listcongkhai;
// // function t(){
// //     var check = '';
// //     if(localStorage.getItem('listbv')){
// //         listbv = JSON.parse(localStorage.getItem('listbv'));
// //     }else{
// //         listbv = [];
// //     }
// //     if(localStorage.getItem('listcongkhai')){
// //         listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
// //     }else{
// //         listcongkhai = [];
// //     }
// //     alert(listbv[0] +listbvcongkhai[0])
// //     for(var a = 0; a < listbvcongkhai.length; a++){
// //         if (localStorage.getItem(listbv[0]) === listbvcongkhai[a]) {
// //             check = 'Công khai';
// //             alert(check)
// //         }
// //     }
    
// // }
// var cb = {
//     user : "",
//     tieude: "",
//     noidung: "",
//     logo: "",
// }
// var nc = {
//     user : "",
//     tieude: "",
//     noidung: "",
//     logo: "",
// }
// function ghicb(user,tieude,noidung,logo){
//         if(localStorage.getItem('cb')){
//             listcb = JSON.parse(localStorage.getItem('cb'));
//         }else{
//             listcb = [];
//         }
//         cb.user=user
//         cb.tieude=tieude
//         cb.noidung=noidung
//         cb.logo=logo
//         listcb.push(cb);
//         localStorage.setItem('cb',JSON.stringify(listcb));
// }
// function ghinc(user,tieude,noidung,logo){
//     if(localStorage.getItem('nc')){
//         listnc = JSON.parse(localStorage.getItem('nc'));
//     }else{
//         listnc = [];
//     }
//     nc.user=user
//     nc.tieude=tieude
//     nc.noidung=noidung
//     nc.logo=logo
//     listnc.push(nc);
//     localStorage.setItem('nc',JSON.stringify(listnc));
// }
// function thuockhoahoc(i){
//     var check = '';
//     if(localStorage.getItem('listbv')){
//         listbv = JSON.parse(localStorage.getItem('listbv'));
//     }else{
//         listbv = [];
//     }
//     if(localStorage.getItem('listcongkhai')){
//         listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
//     }else{
//         listcongkhai = [];
//     }
//     for(var a = 0; a < listcongkhai.length; a++){
//         if (listbv[i] === listcongkhai[a]) {
//             check = 'Công khai';
//         }
//     }
//     if(localStorage.getItem('listcb')){
//         listcb = JSON.parse(localStorage.getItem('listcb'));
//     }else{
//         listcb = [];
//     }
//     for(var a = 0; a < listcb.length; a++){
//         if (listbv[i] === listcb[a]) {
//             check = 'Cơ bản';
//         }
//     }
//     if(localStorage.getItem('listnc')){
//         listnc = JSON.parse(localStorage.getItem('listnc'));
//     }else{
//         listnc = [];
//     }
//     for(var d = 0; d < listnc.length; d++){
//         if (listbv[i] === listnc[d]) {
//             check = 'Nâng cao';
//         }
//     }
//     return check;
// }
// function bvmd(){
//     var b1 = 'Cách Ẩn cột, dòng và Group cột, dòng trong excel nhanh nhất';
//     var b2 = '4 cách làm tròn số trong excel';
//     var b3 = '3 cách tính tổng thường dùng trong excel';
//     var b4 = 'Cách dùng hàm MIN, MAX trong Excel';
//     var b5 = 'Các hàm dò tìm trong excel (vlookup, match, index …)';
//     var b6 = 'Các hàm xử lý chuỗi ký tự trong excel';
//     var b7 = 'Tự học Excel cơ bản từ A đến Z – Full tài liệu, video hướng dẫn';
//     var b8 = 'Cách dùng hàm SUMIFS tính tổng với nhiều điều kiện trong excel';
//     var b9 = 'Cách dùng hàm SUMIF tính tổng có điều kiện trong excel';
//     var b10 = 'Cách dùng hàm SUM để tính tổng trong Excel';
//     var nd1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';    
//     var nd2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var nd3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var nd4 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var nd5 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var nd6 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var nd7 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var nd8 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var nd9 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var nd10 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
//     var ha1 = 'ava-an-group-700x465.jpg'; 
//     var ha2 = 'ava-4-cach-lam-tron-700x465.jpg'; 
//     var ha3 = 'ava-3-cach-tinh-tong-700x465.jpg'; 
//     var ha4 = 'ava-ham-minmax-700x465.jpg'; 
//     var ha5 = 'ham-do-tim-700x465.jpg'; 
//     var ha6 = 'ava-ham-chuoi-700x465.jpg'; 
//     var ha7 = 'ava-ham-can-ban-700x465.jpg'; 
//     var ha8 = 'ava-ham-sumifs-700x465.jpg'; 
//     var ha9 = 'ava-ham-sumif-700x465.jpg'; 
//     var ha10 = 'ava-ham-sum-700x465.jpg';    
//     if(localStorage.getItem('listha')){
//         listha = JSON.parse(localStorage.getItem('listha'));
//     }else{
//         listha = [];
//     }

//     if(localStorage.getItem('listbv')){
//         listbv = JSON.parse(localStorage.getItem('listbv'));
//     }else{
//         listbv = [];
//     }
//     if(localStorage.getItem('listcongkhai')){
//         listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
//     }else{
//         listcongkhai = [];
//     }
//     var ktha = 0;
//     var ktall = 0;
//     var ktck = 0;
//     for(var i = 0; i < listha.length; i++){
//         if(listha[i]===b1 || listha[i]===b2 || listha[i]===b3 || listha[i]===b4 || listha[i]===b5 || listha[i]===b6 || listha[i]===b7 || listha[i]===b8 || listha[i]===b9 || listha[i]===b10){
//             ktha++;
//         }
//      }
//     for(var i = 0; i < listbv.length; i++){
//        if(listbv[i]===b1 || listbv[i]===b2 || listbv[i]===b3 || listbv[i]===b4 || listbv[i]===b5 || listbv[i]===b6 || listbv[i]===b7 || listbv[i]===b8 || listbv[i]===b9 || listbv[i]===b10){
//            ktall++;
//        }
//     }
//     for(var i = 0; i < listcongkhai.length; i++){
//         if(listcongkhai[i]===b1 || listcongkhai[i]===b2 || listcongkhai[i]===b3 || listcongkhai[i]===b4 || listcongkhai[i]===b5 || listcongkhai[i]===b6 || listcongkhai[i]===b7 || listcongkhai[i]===b8 || listcongkhai[i]===b9 || listcongkhai[i]===b10){
//             ktck++;
//         }
//      }
//     if(ktall>0){
//         false;
//     }else{
//         listbv.push(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10);
//         localStorage.setItem('listbv',JSON.stringify(listbv)); 
//         localStorage.setItem(b1,nd1);   
//         localStorage.setItem(b2,nd2); 
//         localStorage.setItem(b3,nd3); 
//         localStorage.setItem(b4,nd4); 
//         localStorage.setItem(b5,nd5); 
//         localStorage.setItem(b6,nd6); 
//         localStorage.setItem(b7,nd7); 
//         localStorage.setItem(b8,nd8); 
//         localStorage.setItem(b9,nd9); 
//         localStorage.setItem(b10,nd10); 
//     }
//     if(ktck>0){
//         false;
//     }else{
//         listcongkhai.push(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10);
//         localStorage.setItem('listcongkhai',JSON.stringify(listcongkhai));  

//     }
//     if(ktha>0){
//         false;
//     }else{
//         listha.push(ha1,ha2,ha3, ha4, ha5,ha6,ha7,ha8,ha9,ha10);
//         localStorage.setItem(b1+'a',ha1);   
//         localStorage.setItem(b2+'a',ha2); 
//         localStorage.setItem(b3+'a',ha3); 
//         localStorage.setItem(b4+'a',ha4); 
//         localStorage.setItem(b5+'a',ha5); 
//         localStorage.setItem(b6+'a',ha6); 
//         localStorage.setItem(b7+'a',ha7); 
//         localStorage.setItem(b8+'a',ha8); 
//         localStorage.setItem(b9+'a',ha9); 
//         localStorage.setItem(b10+'a',ha10);  
//     }
//     // alert(listbv.length)
// }
// bvmd()
// function thembaiviet(){
//     var tieude = document.getElementById('tieude').value;  
//     var noidung = document.getElementById('noidung').value;     
//     if(localStorage.getItem('listbv')){
//         listbv = JSON.parse(localStorage.getItem('listbv'));
//     }else{
//         listbv = [];
//     }   
//     var kq = true;
    
//     if(checkdb() !== ""){
//          kq =confirm(checkdb());
//     }
//     if(kq == true && tieude !== "" && noidung !== ""){
    
//     if(checkdb()!== ""){
//         setTimeout(function(){document.location.href = "trangdangbaiviet.html"},500);
//         addbv(tieude,noidung);
//         ghilscs(localStorage.getItem('phiendangnhap'),Date(),'Chỉnh sửa bài viết '+tieude,tieude);
//     alert("Chỉnh sửa bài viết thành công")        
//     }else{
//         setTimeout(function(){document.location.href = "trangdangbaiviet.html"},500);
//         addlistbv(tieude);
//         addbv(tieude,noidung);
//         listhinhanhbv(hinhanh,tieude);
//         listbvcongkhai(tieude);
//         ghils(localStorage.getItem('phiendangnhap'),Date(),'Thêm bài viết '+tieude) 
//         alert("Đăng bài viết thành công")   
        
//     }    
//     }else{
//         alert('Đăng bài thất bại!')
//     }
    
// }

// function listbvcongkhai(id){
    
//     if(localStorage.getItem('listcongkhai')){
//         listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
//     }else{
//         listcongkhai = [];
//     }
//     alert('ok')
//     listcongkhai.push(id);
//             localStorage.setItem('listcongkhai',JSON.stringify(listcongkhai));  
// }
// function listhinhanhbv(id,a){
    
//     if(localStorage.getItem('listha')){
//         listha = JSON.parse(localStorage.getItem('listha'));
//     }else{
//         listha = [];
//     }
//     listha.push(id);
//             localStorage.setItem(a+'a',JSON.stringify(listha));  
// }
 
     
             
// function addbv(id,mk){    
//             localStorage.setItem(id,mk);    
// }
// function addlistbv(noidung){
//     listbv.push(noidung);
//             localStorage.setItem('listbv',JSON.stringify(listbv));  
// }

// function dsbv(){
//     if(localStorage.getItem('listbv')){
//         listbv = JSON.parse(localStorage.getItem('listbv'));
//     }else{
//         listbv = [];
//     } 
//     var tb = "<tr><td colspan="+5+">Danh sách Bài viết ("+listbv.length+" bài)</td></tr><tr><td>STT</td><td>Tiêu đề</td><td>Hình ảnh</td><td>Nội dung</td><td>Hành động</td><td>Thuộc khóa học</td></tr>";
//     for(var i = 0; i < listbv.length;i++){
//         var anh = listbv[i] + 'a';
//        var row = '<tr><td>'+(i+1)+'</td><td>'+listbv[i]+'</td><td><img src="'+hienthi(anh)+'" style="width: 50px" alt="Preview" id="imgPreview" ></td><td>'+localStorage.getItem(listbv[i])+'</td><td><div id=\'l'+i+'\' onchange=\'chinhsua('+i+')\'>'+sapxepaction(i)+'</div></td><td>'+thuockhoahoc(i)+'</td></tr>';
//        tb += row;
//     }
//     return tb;

// }
// function checkdb(){
//     var id = document.getElementById('tieude').value;  
//     if(localStorage.getItem('listbv')){
//         listbv = JSON.parse(localStorage.getItem('listbv'));
//     }else{
//         listbv = [];
//     }
//     var checkid = "";
//     for(var i = 0; i < listbv.length;i++){
//         if(id === listbv[i]){
//            checkid = "Tiêu đề đã tồn tại!\nBạn có muốn chỉnh sửa bài viết đó không?";
//         } 
//     } 
//     return checkid;
// }
// function hienthibaivietck(){
//     if(localStorage.getItem('listcongkhai')){
//         listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
//     }else{
//         listcongkhai = [];
//     }
//     var tb = "";
//     for(var i = 0; i < listcongkhai.length;i++){
//         var anh = listcongkhai[i] + 'a';
//         var row = '<tr onclick="xemchitietbv('+i+')"><td class="baiviet" width="100px" height="100px"><img src="'+hienthi(anh)+'" style="width: 400px" alt="Preview" id="imgPreview" ></td><td class="baiviet"><h2>'+listcongkhai[i]+'</h2><br><p style="font-size: 20px;">'+localStorage.getItem(listcongkhai[i])+'</p></td></tr>';
//         tb += row;
//      }
//      return tb;
 
// }
// function xemchitietbv(i){
//     listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
//     var td = listcongkhai[i];
//     var nd = localStorage.getItem(listcongkhai[i]);
//     ghils(localStorage.getItem('phiendangnhap'),Date(),'Xem bài viết '+listcongkhai[i])
//     localStorage.setItem('phienbaiviet',td);
//     location.href='chitietbaiviet.html'
// }
// function chitietbaiviet(){
//     listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
//     var td = localStorage.getItem('phienbaiviet');
//     var nd = localStorage.getItem(td);
//     var anh = td + 'a';
//     var body = '<h1 style="font-size: 40px" class="cttieude">'+td+'</h1>'+'<br>' + '<div class="cttieude"><img src="'+hienthi(anh)+'" alt="Preview" id="imgPreview class="cttieude" ></div>'+'<br>' + '<div class="cttieude" style="font-size: 30px">'+nd+'</div>';
//     return body;
// }
// function hienanh(event) {
//     var output = document.getElementById('output');
//     output.src = URL.createObjectURL(event.target.files[0]);
//     a = document.getElementById('myFileInput');
//     // output.src='/image/'+a.files[0].name;
//     output.style.width ='100px'
//     output.style.height ='50px'
//   };
//   function hienthi(i){
//     recent = localStorage.getItem(i);
//     if(recent){
//         var a = recent;
//     }
//     return a;
// }
// // function luuanh(){
// //     var tieude = document.getElementById('tieude').value;
// //     a = document.getElementById('myFileInput')
// //     console.log('/image/'+a.files[0].name);
// //     localStorage.setItem(tieude+'a','/image/'+a.files[0].name)
    
// // }
// function sapxepaction(i){
//     var lc = '';
//     var o1 = '<button type="button" onclick="chinhsua(\''+i+'\')">Chỉnh sửa</button>';
//     var o2 = '<button type="button" onclick="xoa(\''+i+'\')">Xóa</button>';
//         lc = o1 + o2;
//     return lc;    
// }

// function chinhsua(i){
//     if(localStorage.getItem('listbv')){
//         listbv = JSON.parse(localStorage.getItem('listbv'));
//     }else{
//         listbv = [];
//     } 
//         document.getElementById('tieude').value=listbv[i];
//         document.getElementById('noidung').value=localStorage.getItem(listbv[i]);
//         document.getElementById('formbv').innerText='Chỉnh sửa bài viết';
//         location.href="#formbv"
//         ghics(localStorage.getItem('phiendangnhap'),Date(),localStorage.getItem(listbv[i]))
// } 

// function ghics(user,thoigian,noidung){
//     if(localStorage.getItem('lcs')){
//         listcs = JSON.parse(localStorage.getItem('lcs'));
//     }else{
//         listcs = [];
//     }
//     lancs.user = user; 
//     lancs.noidung = noidung;
//     lancs.thoigian = thoigian;
//     listcs.push(lancs);
//     localStorage.setItem('lcs',JSON.stringify(listcs));
//     }
    
// function khoiphuc(tieude){
//     if(localStorage.getItem('lcs')){
//         listcs = JSON.parse(localStorage.getItem('lcs'));
//     }else{
//         listcs = [];
//     }
//     if(tieude !== ""){
//         alert('Khôi phục bài viết thành công!')
//     }
//     var vt = listcs.length -1;
//     // alert(listcs[vt].noidung)
//     addbv(tieude,listcs[vt].noidung)
// }
// function xoa(i){
//     if(localStorage.getItem('listha')){
//         listha = JSON.parse(localStorage.getItem('listha'));
//     }else{
//         listha = [];
//     }

//     xoalistbv(i);
//     window.location="trangdangbaiviet.html";
// }
// function xoalistbv(i){
//     if(localStorage.getItem('listbv')){
//         listbv = JSON.parse(localStorage.getItem('listbv'));
//     }else{
//         listbv = [];
//     }
//         var idremove = listbv[i];
//         listbv = listbv.filter(item => item !== idremove);
//         localStorage.setItem('listbv',JSON.stringify(listbv)); 
//         ghils(localStorage.getItem('phiendangnhap'),Date(),'Xóa bài viết '+listbv[i])
//         alert('Đã xóa');
        
// }
// function xoalistck(i){
//     if(localStorage.getItem('listcongkhai')){
//         listcongkhai = JSON.parse(localStorage.getItem('listcongkhai'));
//     }else{
//         listcongkhai = [];
//     }
//         var idremove = listcongkhai[i];
//         listcongkhai = listcongkhai.filter(item => item !== idremove);
//         localStorage.setItem('listcongkhai',JSON.stringify(listcongkhai)); 
//         ghils(localStorage.getItem('phiendangnhap'),Date(),'Xóa bài viết '+idremove)
//         alert('Đã xóa');        
// }
// var phanhoi = {
//     user : "",
//     thoigian : "",
//     ykien : ""
// };
// function ghiph(user,thoigian,baiviet,ykien){
//     if(localStorage.getItem('phanhoi')){
//         phoi = JSON.parse(localStorage.getItem('phanhoi'));
//     }else{
//         phoi = [];
//     }
//     phanhoi.user = user; 
//     phanhoi.thoigian = thoigian; 
//     phanhoi.baiviet = baiviet;
//     phanhoi.ykien = ykien;
//     if(user === "" || thoigian === "" || baiviet ==="" || ykien ===""){
//         alert('Nhập chưa đủ thông tin!\nVui lòng điền thêm giá trị!')
//     }else{
//         phoi.push(phanhoi);
//     alert('Gửi phản hồi thành công!!')
//     ghils(user,Date(),'Phản hồi bài viết '+phanhoi.baiviet);
//     localStorage.setItem('phanhoi',JSON.stringify(phoi))
//     }
    
// }
// function guiykien(){
//     var noidung = document.getElementById('phanhoi').value;
//     ghiph(localStorage.getItem('phiendangnhap'),Date(),localStorage.getItem('phienbaiviet'),noidung);
// }



var listbv;
var listnd;
var listha;
var listcs;
var lancs = {
    noidung: "",
    user: "",
    thoigian: "",
}
var cb = {
    user : "",
    tieude: "",
    noidung: "",
    logo: "",
}
var nc = {
    user : "",
    tieude: "",
    noidung: "",
    logo: "",
}
function ghicb(user,tieude,noidung,logo){
        if(localStorage.getItem('cb')){
            listcb = JSON.parse(localStorage.getItem('cb'));
        }else{
            listcb = [];
        }
        cb.user=user
        cb.tieude=tieude
        cb.noidung=noidung
        cb.logo=logo
        listcb.push(cb);
        localStorage.setItem('cb',JSON.stringify(listcb));
}
function ghinc(user,tieude,noidung,logo){
    if(localStorage.getItem('nc')){
        listnc = JSON.parse(localStorage.getItem('nc'));
    }else{
        listnc = [];
    }
    nc.user=user
    nc.tieude=tieude
    nc.noidung=noidung
    nc.logo=logo
    listnc.push(nc);
    localStorage.setItem('nc',JSON.stringify(listnc));
}
function thuockhoahoc(i){
    var check = '';
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
    for(var a = 0; a < listcongkhai.length; a++){
        if (listbv[i] === listcongkhai[a]) {
            check = 'Công khai';
        }
    }
    if(localStorage.getItem('bcb')){
        listb = JSON.parse(localStorage.getItem('bcb'));
    }else{
        listb = [];
    }
    for(var a = 0; a < listb.length; a++){
        if (listbv[i] === listb[a]) {
            check = 'Cơ bản';
        }
    }
    if(localStorage.getItem('bnc')){
        listc = JSON.parse(localStorage.getItem('bnc'));
    }else{
        listc = [];
    }
    for(var a = 0; a < listc.length; a++){
        if (listbv[i] === listc[a]) {
            check = 'Nâng cao';
        }
    }
    if(localStorage.getItem('listcb')){
        listcb = JSON.parse(localStorage.getItem('listcb'));
    }else{
        listcb = [];
    }
    for(var a = 0; a < listcb.length; a++){
        if (listbv[i] === listcb[a]) {
            check = 'Cơ bản';
        }
    }
    if(localStorage.getItem('listnc')){
        listnc = JSON.parse(localStorage.getItem('listnc'));
    }else{
        listnc = [];
    }
    for(var d = 0; d < listnc.length; d++){
        if (listbv[i] === listnc[d]) {
            check = 'Nâng cao';
        }
    }
    return check;
}
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
    var b11 = 'Cách Ẩn cột, dòng và Group cột, dòng trong excel nhanh nhất';
    var b12 = 'Tự học Pivottable trong excel từ cơ bản đến nâng cao (từ A đến Z) – Phần 3: Vẽ biểu đồ pivottable chart';
    var b13 = 'Tự học Pivottable trong excel từ cơ bản đến nâng cao (từ A đến Z) – Phần 2: Nâng cao';
    var b14 = 'Kết hợp Hàm INDEX và MATCH để Lookup dữ liệu trong excel';
    var b15 = 'Tự học Pivottable trong excel từ cơ bản đến nâng cao (từ A đến Z) – Phần 1: cơ bản';
    var b16 = 'Hàm LEN kết hợp hàm LEFT và RIGHT để cắt ký tự';
    var b17 = 'Các hàm dò tìm trong excel (vlookup, match, index …)';   
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
    var nd11 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd12 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd13 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd14 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd15 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd16 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!';
    var nd17 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti doloremque eum suscipit vel sint iure placeat tempora nihil doloribus et, mollitia eligendi, ullam maxime veniam reprehenderit ad possimus!'; 
    var ha1 = 'ava-an-group-700x465.jpg'; 
    var ha2 = 'ava-4-cach-lam-tron-700x465.jpg'; 
    var ha3 = 'ava-3-cach-tinh-tong-700x465.jpg'; 
    var ha4 = 'ava-ham-minmax-700x465.jpg'; 
    var ha5 = 'ham-do-tim-700x465.jpg'; 
    var ha6 = 'ava-ham-chuoi-700x465.jpg'; 
    var ha7 = 'ava-ham-can-ban-700x465.jpg'; 
    var ha8 = 'ava-ham-sumifs-700x465.jpg'; 
    var ha9 = 'ava-ham-sumif-700x465.jpg'; 
    var ha10 = 'ava-ham-sum-700x465.jpg';  
    var ha11 = 'image-54-700x465.png';
    var ha12 = 'image-53-700x465.png';   
    var ha13 = 'ava-pivottable-chart-700x465.jpg';
    var ha14 = 'ava-muc-luc-tu-dong-1-700x465.jpg';
    var ha15 = 'ava-ham-roundup-700x465.jpg';
    var ha16 = 'ava-ham-rounddown-700x465.jpg';
    var ha17 = 'ava-ham-minmax-700x465.jpg';
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
    if(localStorage.getItem('bcb')){
        cb = JSON.parse(localStorage.getItem('bcb'));
    }else{
        cb = [];
    }
    if(localStorage.getItem('bnc')){
        nc = JSON.parse(localStorage.getItem('bnc'));
    }else{
        nc = [];
    }
    var ktha = 0;
    var ktall = 0;
    var ktck = 0;
    var ktcb = 0;
    var ktnc = 0;
    for(var i = 0; i < listha.length; i++){
        if(listha[i]===b1 || listha[i]===b2 || listha[i]===b3 || listha[i]===b4 || listha[i]===b5 || listha[i]===b6){
            ktha++;
        }
     }
    for(var i = 0; i < listbv.length; i++){
       if(listbv[i]===b1 || listbv[i]===b2 || listbv[i]===b3 || listbv[i]===b4 || listbv[i]===b5 || listbv[i]===b6 || listbv[i]===b7 || listbv[i]===b8 || listbv[i]===b9 || listbv[i]===b10 || listbv[i]===b11 || listbv[i]===b12 || listbv[i]===b13 || listbv[i]===b14 || listbv[i]===b15 || listbv[i]===b16 || listbv[i]===b17){
           ktall++;
       }
    }
    for(var i = 0; i < listcongkhai.length; i++){
        if(listcongkhai[i]===b1 || listcongkhai[i]===b2 || listcongkhai[i]===b3 || listcongkhai[i]===b4 || listcongkhai[i]===b5 || listcongkhai[i]===b6 ){
            ktck++;
        }
     }
     for(var i = 0; i < cb.length; i++){
        if(bcb[i]===b11 || bcb[i]===b12 || bcb[i]===b13 || bcb[i]===b14 || bcb[i]===b15 ){
            ktcb++;
        }
     }
     for(var i = 0; i < nc.length; i++){
        if(bnc[i]===b7 || bnc[i]===b8 || bnc[i]===b9 || bnc[i]===b10 || bnc[i]===b16 || bnc[i]===b17){
            ktnc++;
        }
     }
    if(ktall>0){
        false;
    }else{
        listbv.push(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17);
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
        localStorage.setItem(b11,nd11); 
        localStorage.setItem(b12,nd12); 
        localStorage.setItem(b13,nd13); 
        localStorage.setItem(b14,nd14); 
        localStorage.setItem(b15,nd15);  
        localStorage.setItem(b16,nd16); 
        localStorage.setItem(b17,nd17); 
    }
    if(ktck>0){
        false;
    }else{
        listcongkhai.push(b1,b2,b3,b4,b5,b6);
        localStorage.setItem('listcongkhai',JSON.stringify(listcongkhai));  

    }
    if(ktcb>0){
        false;
    }else{
        cb.push(b11,b12,b13,b14,b15);
        localStorage.setItem('bcb',JSON.stringify(cb));  

    }
    if(ktnc>0){
        false;
    }else{
        nc.push(b8,b9,b10,b11,b7,b16);
        localStorage.setItem('bnc',JSON.stringify(nc));  

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
        localStorage.setItem(b11+'a',ha11);   
        localStorage.setItem(b12+'a',ha12); 
        localStorage.setItem(b13+'a',ha13); 
        localStorage.setItem(b14+'a',ha14); 
        localStorage.setItem(b15+'a',ha15); 
        localStorage.setItem(b16+'a',ha16); 
        localStorage.setItem(b17+'a',ha17);
    }
}  
var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
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
    
    if(checkdb()!== ""){
        // window.location="trangdangbaiviet.html"
        setTimeout(function(){document.location.href = "trangdangbaiviet.html"},2000);  
        addbv(tieude,noidung);
        ghilscs(localStorage.getItem('phiendangnhap'),Date(),'Chỉnh sửa bài viết '+tieude,tieude);
    alert("Chỉnh sửa bài viết thành công")     
     
    }else{
        setTimeout(function(){document.location.href = "trangdangbaiviet.html"},2000);
        alert("Đăng bài viết thành công") 
        addlistbv(tieude);
        addbv(tieude,noidung);
        listbvcongkhai(tieude);
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
    var tb = "<tr><td colspan="+6+">Danh sách Bài viết ("+listbv.length+" bài)</td></tr><tr><td>STT</td><td>Tiêu đề</td><td>Hình ảnh</td><td>Nội dung</td><td>Hành động</td><td>Thuộc khóa học</td></tr>";
    for(var i = 0; i < listbv.length;i++){
        var anh = listbv[i] + 'a';
       var row = '<tr><td>'+(i+1)+'</td><td>'+listbv[i]+'</td><td><img src="'+hienthi(anh)+'" style="width: 50px" alt="Preview" id="imgPreview" ></td><td>'+localStorage.getItem(listbv[i])+'</td><td><div id=\'l'+i+'\' onchange=\'chinhsua('+i+')\'>'+sapxepaction(i)+'</div></td><td>'+thuockhoahoc(i)+'</td></tr>';
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
    ghils(localStorage.getItem('phiendangnhap'),Date(),'Xem bài viết '+listcongkhai[i])
    localStorage.setItem('phienbaiviet',td);
    location.href='chitietbaiviet.html'
}
function hienthibaivietcb(){
    if(localStorage.getItem('bcb')){
        listcongkhai = JSON.parse(localStorage.getItem('bcb'));
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
function hienthibaivietnc(){
    if(localStorage.getItem('bnc')){
        listcongkhai = JSON.parse(localStorage.getItem('bnc'));
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
function chitietbaiviet(){
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
        ghics(localStorage.getItem('phiendangnhap'),Date(),localStorage.getItem(listbv[i]))
} 

function ghics(user,thoigian,noidung){
    if(localStorage.getItem('lcs')){
        listcs = JSON.parse(localStorage.getItem('lcs'));
    }else{
        listcs = [];
    }
    lancs.user = user; 
    lancs.noidung = noidung;
    lancs.thoigian = thoigian;
    listcs.push(lancs);
    localStorage.setItem('lcs',JSON.stringify(listcs));
    }
    
function khoiphuc(tieude){
    if(localStorage.getItem('lcs')){
        listcs = JSON.parse(localStorage.getItem('lcs'));
    }else{
        listcs = [];
    }
    if(tieude !== ""){
        alert('Khôi phục bài viết thành công!')
    }
    var vt = listcs.length -1;
    // alert(listcs[vt].noidung)
    addbv(tieude,listcs[vt].noidung)
}
function xoa(i){
    if(localStorage.getItem('listha')){
        listha = JSON.parse(localStorage.getItem('listha'));
    }else{
        listha = [];
    }

    xoalistbv(i);
    window.location="trangdangbaiviet.html";
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
    ghils(user,Date(),'Phản hồi bài viết '+phanhoi.baiviet);
    localStorage.setItem('phanhoi',JSON.stringify(phoi))
    }
    
}
function guiykien(){
    var noidung = document.getElementById('phanhoi').value;
    ghiph(localStorage.getItem('phiendangnhap'),Date(),localStorage.getItem('phienbaiviet'),noidung);
}



