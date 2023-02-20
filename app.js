var gia = document.getElementsByClassName("gia");
function tien(obj){
    var sl = obj.value;
    var giatien = gia[0].innerHTML;
    var sotien = sl*giatien;
    var thanhtien=document.getElementsByClassName("tien");
    thanhtien[0].innerHTML=sotien;
    
}