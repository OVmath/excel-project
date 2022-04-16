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
