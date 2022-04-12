var listbv;
function thembaiviet(){
    var noidung = document.getElementById('noidung').value;    
    if(localStorage.getItem('listbv')){
        listbv = JSON.parse(localStorage.getItem('listbv'));
    }else{
        listbv = [];
    }  
        
            alert('Đăng kí thành cng!'+noidung);
            
            addlistbv(noidung);
            addbv(dem(),noidung); 
            // addlistuser(id);
            
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
    var tb = "<tr><td colspan="+4+">Danh sách Bài viết ("+listbv.length+" bài)</td></tr> <tr><td>STT</td><td>Nội dung</td></tr>";
    for(var i = 0; i < listbv.length;i++){
       var row = '<tr><td>'+(i+1)+'</td><td>'+listbv[i]+'</td></tr>';
       tb += row;
    }
    return tb;

}