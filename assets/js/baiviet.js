var listbv;
var listnd;
localStorage.setItem('listbv','["1"]')
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
