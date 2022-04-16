function thongtincanhan(){ 
    var tb ;
    var ten = localStorage.getItem('phiendangnhap');
    var id = '<td>Tên đăng nhập</td><td>'+ten+'</td>'
    var mk = '<td>Mật khẩu</td><td>'+localStorage.getItem(ten)+'</td>'
    var dadoc = '<td>Khóa học</td><td></td>'
    var level = '<td>Level</td><td></td>'
    var doitt = '<td><button onclick="chuyentrangdoimatkhau()">Đổi thông tin</button></td><td></td>'
    tb = '<tr>'+id+'</tr>'+'<tr>'+mk+'</tr>'+'<tr>'+dadoc+'</tr>'+'<tr>'+level+'</tr>'+'<tr>'+doitt+'</tr>'
    return tb;

}
function chuyentrangdoimatkhau(){
    window.location="/page/doimatkhau.html"
}
var lichsu = {
    user : "",
    thoigian : "",
    hanhdong : ""
};
function ghils(user,thoigian,hanhdong){
    var user = localStorage.getItem("phiendangnhap");
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
    localStorage.setItem('ls' + user,JSON.stringify(log))
}
// ghils(1,'fsdsdfs','sdfsdf')
// ghils(1,'fsdsdfs','sdfsdttttf')

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