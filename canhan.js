function thongtincanhan(){ 
    var tb ;
    var ten = localStorage.getItem('phiendangnhap');
    var id = '<td>Tên đăng nhập</td><td>'+ten+'</td>'
    var mk = '<td>Mật khẩu</td><td>'+localStorage.getItem(ten)+'</td>'
    var dadoc = '<td>Khóa học</td><td></td>'
    var level = '<td>Level</td><td></td>'
    var vaitro = '<td>Vai trò trên trang</td><td>'+vattro()+'</td>'
    var doitt = '<td><button onclick="chuyentrangdoimatkhau()">Đổi thông tin</button></td><td></td>'
    tb = '<tr>'+id+'</tr>'+'<tr>'+mk+'</tr>'+'<tr>'+dadoc+'</tr>'+'<tr>'+level+'</tr>'+'<tr>'+vaitro+'</tr>'+'<tr>'+doitt+'</tr>'
    return tb;

}
function vattro(){
    var vt = ''
    if(ktraadmin()=='1' || localStorage.getItem("phiendangnhap")=='Admin' ){
        vt = 'Admin'
    }
    if(ktrabtv()=='1'){
        vt = 'Biên tập viên'
    }
    if(ktrauser()=='1'){
        vt = 'User'
    }
    return vt;
}
function chuyentrangdoimatkhau(){
    window.location="doimatkhau.html"
}
var lichsu = {
    user : "",
    thoigian : "",
    hanhdong : "",
    doituong : ""
};
function ghils(user,thoigian,hanhdong){
    var ls = 'ls'+user;
    if(localStorage.getItem(ls)){
        log = JSON.parse(localStorage.getItem(ls));
    }else{
        log = [];
    }
    lichsu.user = user; 
    lichsu.thoigian = thoigian; 
    lichsu.hanhdong = hanhdong;
    log.push(lichsu);
    localStorage.setItem('ls' + user,JSON.stringify(log));
    tonghopls(lichsu);
}
function ghilscs(user,thoigian,hanhdong,doituong){
    var ls = 'ls'+user;
    if(localStorage.getItem(ls)){
        log = JSON.parse(localStorage.getItem(ls));
    }else{
        log = [];
    }
    lichsu.user = user; 
    lichsu.thoigian = thoigian; 
    lichsu.hanhdong = hanhdong;
    lichsu.doituong = doituong;
    log.push(lichsu);
    localStorage.setItem('ls' + user,JSON.stringify(log));
    tonghopls(lichsu);
}
// ghils(1,'fsdsdfs','sdfsdf')
// ghils(1,'fsdsdfs','sdfsdttttf')
function tonghopls(i){
    if(localStorage.getItem('ls')){
        tonghop = JSON.parse(localStorage.getItem('ls'));
    }else{
        tonghop = [];
    }
    tonghop.push(i)
    localStorage.setItem('ls',JSON.stringify(tonghop))
}
function xemls(user){
    var user = localStorage.getItem("phiendangnhap");
    var ls = 'ls'+user;
    if(localStorage.getItem(ls)){
        log = JSON.parse(localStorage.getItem(ls));
    }else{
        log = [];
    }
    var tb = "<tr><td colspan="+4+">Hoạt động của "+user+" ("+log.length+" hoạt động)</td></tr> <tr><td>Dấu thời gian</td><td>Hành động</td></tr>";
    for(var i = 0; i < log.length;i++){
       row = "<tr><td>"+log[i].thoigian+"</td><td>"+log[i].hanhdong+"</td></tr>"
       tb+=row;
    }
    return tb;
}
function xemcb(){
    var user = localStorage.getItem("phiendangnhap");
    if(localStorage.getItem('cb')){
        kh = JSON.parse(localStorage.getItem('cb'));
    }else{
        kh = [];
    }
    var tb ="";
    
    for(var i = 0; i < kh.length;i++){
        var anh = kh[i].logo;
        var row = '<tr><td class="baiviet" width="100px" height="100px"><img src="'+anh+'" style="width: 400px" alt="Preview" id="imgPreview" ></td><td class="baiviet"><h2>'+kh[i].tieude+'</h2><br><p style="font-size: 20px;">'+kh[i].noidung+'</p></td></tr>';
       tb+=row;
    }
    return tb;
}
function xemnc(){
    var user = localStorage.getItem("phiendangnhap");
    if(localStorage.getItem('nc')){
        kh = JSON.parse(localStorage.getItem('nc'));
    }else{
        kh = [];
    }
    var tb ="";
    
    for(var i = 0; i < kh.length;i++){
        var anh = kh[i].logo;
        var row = '<tr><td class="baiviet" width="100px" height="100px"><img src="'+anh+'" style="width: 400px" alt="Preview" id="imgPreview" ></td><td class="baiviet"><h2>'+kh[i].tieude+'</h2><br><p style="font-size: 20px;">'+kh[i].noidung+'</p></td></tr>';
       tb+=row;
    }
    return tb;
}
// function ctcb(i){
//     ghils(localStorage.getItem('phiendangnhap'),Date(),'Xem bài viết '+i)
//     localStorage.setItem('phienbaiviet',i);
// }
function xemph(){
    if(localStorage.getItem('phanhoi')){
        phoi = JSON.parse(localStorage.getItem('phanhoi'));
    }else{
        phoi = [];
    }
    var tb = "<tr><td colspan="+4+">Phản hồi của người dùng ("+phoi.length+" phản hồi)</td></tr> <tr><td>Dấu thời gian</td><td>Ý kiến</td><td>Phản hồi bài viết</td><td>Người phản hồi</td></tr>";
    for(var i = 0; i < phoi.length;i++){
       row = "<tr><td>"+phoi[i].thoigian+"</td><td>"+phoi[i].ykien+"</td><td>"+phoi[i].baiviet+"</td><td>"+phoi[i].user+"</td></tr>"
       tb+=row;
    }
    return tb;
}
function t(){
    var user = localStorage.getItem("phiendangnhap");
    var ls = 'ls'+user;
    alert(ls)
}
function xemlscacuser(){
    if(localStorage.getItem('ls')){
        tonghop = JSON.parse(localStorage.getItem('ls'));
    }else{
        tonghop = [];
    }
    var tb = "<tr><td colspan="+4+">Hoạt động của người dùng ("+tonghop.length+" hoạt động)</td></tr> <tr><td>Dấu thời gian</td><td>Hành động</td><td>Người dùng</td></tr>";
    for(var i = 0; i < tonghop.length;i++){
       row = "<tr><td>"+tonghop[i].thoigian+"</td><td>"+tonghop[i].hanhdong+"</td><td>"+tonghop[i].user+"</td><td>"+nutkp(tonghop[i].doituong)+"</td></tr>"
       tb+=row;
    }
    return tb;
}
function nutkp(i){
    var lc = '';
    var o1 = '<button type="button" onclick="khoiphuc(\''+i+'\')">Khôi phục</button>';
        lc = o1;
    return lc;    
}
