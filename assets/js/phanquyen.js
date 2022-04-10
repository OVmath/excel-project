
function listadmin(){
    
}
function listuser(){ 
    if(localStorage.getItem('listid')){
        listid = JSON.parse(localStorage.getItem('listid'));
    }else{
        listid = [];
    }
    var tb = "<tr><td>STT</td><td>Tên đăng nhập</td></tr>";
    for(var i = 0; i < listid.length;i++){
       var row = "<tr><td>"+i+"</td><td>"+listid[i]+"</td></tr>";
       tb += row;
    } 
    return tb;

}
