var dssv = [] ;
const DSSV_LOCAL ="DSSV_LOCAL"
var dataJson = localStorage.getItem(DSSV_LOCAL,dataJson);


if(dataJson != null){
    dssv = JSON.parse(dataJson);
    renderDSSV(dssv);

}
function themSV(){
    
    var sv = layThongTin();
    dssv.push(sv);
    renderDSSV();
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem(DSSV_LOCAL,dataJson);
}
function xoaSV(id){

    var index ;
    for (var i = 0 ; i < dssv.length ; i++ ){
        if(dssv[i].ma == id) {
            index = i ;
        }
    }
    dssv.splice(index, 1);
    renderDSSV(dssv);
}
function suaSV(id){
    var index = dssv.findIndex(function(item){
        return item.ma == id ;
    });
    var sv = dssv[index];
    document.getElementById("txtMaSV").value = sv.ma;
    
}