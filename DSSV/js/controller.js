function layThongTin(){
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var matKhau = document.getElementById("txtPass").value;
    var email = document.getElementById("txtEmail").value;
    var toan = document.getElementById("txtDiemToan").value;
    var ly = document.getElementById("txtDiemLy").value;
    var hoa = document.getElementById("txtDiemHoa").value;

    var sv = {
        ma : ma ,
        ten : ten,
        matKhau : matKhau ,
        email : email ,
        toan : toan ,
        ly : ly ,
        hoa : hoa ,
        tinhDTB: function(){
            var dtb = (this.toan + this.ly + this.hoa) / 3;
            return dtb ;
        }
    }
    return sv ;
}
function renderDSSV(){
    var contentHTML = "";
    for (let i = 0 ; i < dssv.length ; i++){
        var sv = dssv[i];
        var trString = `<tr>
                            <td>${sv.ma}</td>
                            <td>${sv.ten}</td>
                            <td>${sv.email}</td>
                            <td>0</td>

                            <td>
                                 <button onclick= "xoaSV('${sv.ma}')" class='btn btn-danger'> Xoá </button>
                                <button onclick= "suaSV('${sv.ma}')"class='btn btn-warning'> Sửa </button>
                            </td>
                        </tr>`;
          contentHTML += trString;              
    }
    document.querySelector("#tbodySinhVien").innerHTML = contentHTML ;
} 