function ktraphiendangnhap(){
    if(localStorage.getItem("phiendangnhap")=='Admin'){
        return true;  
     }  else{
         false;
     }
}
function ktraadmin(){
    if(localStorage.getItem('listadmin')){
        listadmin = JSON.parse(localStorage.getItem('listadmin'));
    }else{
        listadmin = [];
    }
    var kt =0;
    for(var n = 0; n < listadmin.length; n++){
        if (localStorage.getItem("phiendangnhap") == listadmin[n]) {
            kt +=1;
        }
    }
    return kt;
}
function ktrabtv(){
    if(localStorage.getItem('listbtv')){
        listbtv = JSON.parse(localStorage.getItem('listbtv'));
    }else{
        listbtv = [];
    }  
    var kt = 0;
    for(var m = 0; m < listbtv.length; m++){
        if (localStorage.getItem("phiendangnhap") === listbtv[m]) {
            kt +=1;
        }
    }
    return kt;
}
function ktrauser(){
    var listuser;
    if(localStorage.getItem('listuser')){
        listuser = JSON.parse(localStorage.getItem('listuser'));
    }else{
        listuser = [];
    }
    var kt = 0;
    for(var m = 0; m < listuser.length; m++){
        if (localStorage.getItem("phiendangnhap") === listuser[m]) {
            kt +=1
        }
    }
    return kt;
}

function listuser(){ 
    if(localStorage.getItem('listid')){
        listid = JSON.parse(localStorage.getItem('listid'));
    }else{
        listid = [];
    }
    var tb = "<tr><td colspan="+4+">Danh sách User ("+listid.length+" thành viên)</td></tr> <tr><td>STT</td><td>Tên đăng nhập</td><td>Phân quyền</td><td>Chức vụ hiên tại</td></tr>";
    var o1 = '<option>Admin</option>';
    var o2 = '<option>Biên tập viên</option>';
    var o3 = '<option>User</option>'
    for(var i = 0; i < listid.length;i++){
       var row = '<tr><td>'+(i+1)+'</td><td>'+listid[i]+'</td><td><select id=\'l'+i+'\' onchange=\'phanquyen('+i+')\'>'+sapxeplc(i)+'</select></td><td>'+chucvuhientai(i)+'</td></tr>';
       tb += row;
    }
    return tb;

}
function sapxeplc(i){
    var lc = '';
    var o1 = '<option>Admin</option>';
    var o2 = '<option>Biên tập viên</option>';
    var o3 = '<option>User</option>';
    if(chucvuhientai(i) == 'User'){
        lc = o3 + o2 + o1;
    }
    if(chucvuhientai(i) == 'Quản trị viên'){
        lc = o1 + o2 + o3;
    }
    if(chucvuhientai(i) == 'Biên tập viên'){
        lc = o2 + o3 + o1;
    }
    return lc;    
}
function phanquyen(i){
            phanadmin(i);      
            phanbtv(i);
            phanuser(i);    
}
function chucvuhientai(i){
    var check1 = '';
    var check2 = '';
    var check3 = '';
    if(localStorage.getItem('listadmin')){
        listadmin = JSON.parse(localStorage.getItem('listadmin'));
    }else{
        listadmin = [];
    }
    for(var n = 0; n < listadmin.length; n++){
        if (localStorage.getItem(listid[i]) === listadmin[n]) {
            check1 = 'Quản trị viên';
        }
    }
    if(localStorage.getItem('listbtv')){
        listbtv = JSON.parse(localStorage.getItem('listbtv'));
    }else{
        listbtv = [];
    }  
    for(var m = 0; m < listbtv.length; m++){
        if (localStorage.getItem(listid[i]) === listbtv[m]) {
            check2 = 'Biên tập viên';
        }
    }
    var listuser;
    if(localStorage.getItem('listuser')){
        listuser = JSON.parse(localStorage.getItem('listuser'));
    }else{
        listuser = [];
    }
    for(var m = 0; m < listuser.length; m++){
        if (localStorage.getItem(listid[i]) === listuser[m]) {
            check3 = 'User';
        }
    }
    return check1+check2+check3;
}
function phanadmin(i){
    var listadmin;
    if(localStorage.getItem('listadmin')){
        listadmin = JSON.parse(localStorage.getItem('listadmin'));
    }else{
        listadmin = [];
    }
    var kt = 0;
    var stt = 0;
    var n;
    for(n = 0; n < listadmin.length; n++){
        if (localStorage.getItem(listid[i]) === listadmin[n]) {
            stt = n;
            kt+=1;
        }
    }
    if(document.getElementById('l'+i).value === 'Admin'){
        
        if(kt<1){
            xoabtv(i);
            xoauser(i);
            listadmin.push(localStorage.getItem(listid[i]));
            localStorage.setItem('listadmin',JSON.stringify(listadmin)); 
            
            alert('Đã thêm '+localStorage.getItem(listid[i])+' làm quản trị viên')
        }else{
            var idremove = listadmin[stt];
            listadmin = listadmin.filter(item => item !== idremove);
            localStorage.setItem('listadmin',JSON.stringify(listadmin)); 
            alert('Đã loại bỏ '+ idremove + ' ra khỏi danh sách Admin');
        }
        window.location="../page/setting.html";
        
    }
    
}
function phanbtv(i){
    var listbtv;
    if(localStorage.getItem('listbtv')){
        listbtv = JSON.parse(localStorage.getItem('listbtv'));
    }else{
        listbtv = [];
    }
    var kt = 0;
    var stt = 0;
    var n;
    for(n = 0; n < listbtv.length; n++){
        if (localStorage.getItem(listid[i]) === listbtv[n]) {
            stt = n;
            kt+=1;
        }
    }
    
    if(document.getElementById('l'+i).value === 'Biên tập viên'){
        
        if(kt<1){
            xoaadmin(i);
            xoauser(i);
            listbtv.push(localStorage.getItem(listid[i]));
            localStorage.setItem('listbtv',JSON.stringify(listbtv)); 
            alert('Đã thêm '+localStorage.getItem(listid[i])+' làm Biên tập viên');
            
        }else{
            var idremove = listbtv[stt];
            listbtv = listbtv.filter(item => item !== idremove);
            localStorage.setItem('listbtv',JSON.stringify(listbtv)); 
            alert('Đã loại bỏ '+ idremove + ' ra khỏi danh sách Biên tập viên');
        }
        window.location="../page/setting.html";
        
    }
    
}
function phanuser(i){
    var listuser;
    if(localStorage.getItem('listuser')){
        listuser = JSON.parse(localStorage.getItem('listuser'));
    }else{
        listuser = [];
    }
    var kt = 0;
    var stt = 0;
    var n;
    for(n = 0; n < listuser.length; n++){
        if (localStorage.getItem(listid[i]) === listuser[n]) {
            stt = n;
            kt+=1;
        }
    }
    
    if(document.getElementById('l'+i).value === 'User'){
        
        if(kt<1){
            xoaadmin(i);
            xoabtv(i);
            listuser.push(localStorage.getItem(listid[i]));
            localStorage.setItem('listuser',JSON.stringify(listuser)); 
            
            alert('Đã thêm '+localStorage.getItem(listid[i])+' làm User')
        }else{
            var idremove = listuser[stt];
            listuser = listuser.filter(item => item !== idremove);
            localStorage.setItem('listuser',JSON.stringify(listuser)); 
            alert('Đã loại bỏ '+ idremove + ' ra khỏi danh sách User');
        }
        window.location="../page/setting.html";
        
    }
    
}
function xoabtv(i){
    var listbtv;
    if(localStorage.getItem('listbtv')){
        listbtv = JSON.parse(localStorage.getItem('listbtv'));
    }else{
        listbtv = [];
    }
    for(var m = 0; m < listbtv.length; m++){
        if (localStorage.getItem(listid[i]) === listbtv[m]) {
        var stt = m;
        var idremove = listbtv[stt];
        listbtv = listbtv.filter(item => item !== idremove);
        localStorage.setItem('listbtv',JSON.stringify(listbtv)); 
        alert('Đã loại bỏ '+ idremove + ' ra khỏi danh sách Biên tập viên');
        }
    }
}
function xoaadmin(i){
    var listadmin;
    if(localStorage.getItem('listadmin')){
        listadmin = JSON.parse(localStorage.getItem('listadmin'));
    }else{
        listadmin = [];
    }
    for(var m = 0; m < listadmin.length; m++){
        if (localStorage.getItem(listid[i]) === listadmin[m]) {
        var stt = m;
        var idremove = listadmin[stt];
        listadmin = listadmin.filter(item => item !== idremove);
        localStorage.setItem('listadmin',JSON.stringify(listadmin)); 
        alert('Đã loại bỏ '+ idremove + ' ra khỏi danh sách Admin');
        }
    }
}
function xoauser(i){
    var listuser;
    if(localStorage.getItem('listuser')){
        listuser = JSON.parse(localStorage.getItem('listuser'));
    }else{
        listuser = [];
    }
    for(var m = 0; m < listuser.length; m++){
        if (localStorage.getItem(listid[i]) === listuser[m]) {
        var stt = m;
        var idremove = listuser[stt];
        listuser = listuser.filter(item => item !== idremove);
        localStorage.setItem('listuser',JSON.stringify(listuser)); 
        alert('Đã loại bỏ '+ idremove + ' ra khỏi danh sách user');
        }
    }
}
