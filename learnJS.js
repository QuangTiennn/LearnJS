// KTSNT 
function ktnt(){
    var n=document.getElementById("snhap").value;
    var flag=true;
    if(n<2){
        flag=false;
    }
    else if(n==2){
        flag=true;
    }
    else if(n%2==0){
        flag=false;
    }
    else{
        for(var i=3;i<n-1;i+=2)
        {
            if(n%i==0){
            flag=false;
            }
        }
    }
    if(flag==true){
        document.getElementById("kqsnt").value = "đây là số nguyên tố";
    }
    else{
        document.getElementById("kqsnt").value= "đây không phải là số nguyên tố";
    }
}


// + - * /

function phepcong(){
    var a = document.getElementById("sA").value;
    var b = document.getElementById("sB").value;
    var tong= parseInt(a) + parseInt(b);
    document.getElementById("kq").value =parseInt(tong);
}

function pheptru(){
    var a = document.getElementById("sA").value;
    var b = document.getElementById("sB").value; 
    var hieu = parseInt(a)-parseInt(b);
    document.getElementById("kq").value=parseInt(hieu);
}

function phepnhan(){
    var a = document.getElementById("sA").value;
    var b = document.getElementById("sB").value;
    var tich = parseInt(a)*parseInt(b);
    document.getElementById("kq").value = parseInt(tich);
}

function phepchia(){
    var a = document.getElementById("sA").value;
    var b = document.getElementById("sB").value;
    var thuong = parseInt(a)/parseInt(b);
    document.getElementById("kq").value = parseInt(thuong);
}





 

