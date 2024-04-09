function valid(){
        v1=document.getElementById("i1");
        e1=document.getElementById("er1");
        exp1=/^[a-zA-Z]{2,20}$/;
        if(v1.value=="")
        {
            e1.innerText="*";
            v1.focus();
            return false;
        }
        else if(exp1.test(v1.value)==false)
        {    
            e1.innerText="!";
            v1.focus();
            return false;
        }
        else
        {
            e1.innerText="";
        }
        v2=document.getElementById("i2");
        e2=document.getElementById("er2");
        exp2=/^[a-zA-Z]{3,20}$/;
        if(v2.value=="")
        {
            e2.innerText="*";
            v2.focus();
            return false;
        }
        else if(exp2.test(v2.value)==false)
        {    
            e2.innerText="!";
            v2.focus();
            return false;
        }
        else
        {
            e2.innerText="";
        }
        v3=document.getElementById("i3");
        e3=document.getElementById("er3");
        exp3=/^[a-z0-9]{3,20}[@]{1}[a-z]{3,6}[.]{1}[a-z]{2,5}$/;
        if(v3.value==""){
            e3.innerText="*";
            v3.focus();
            return false;
        }
        else if(exp3.test(v3.value)==false){
            e3.innerText="!";
            v3.focus();
            return false;

        }
        else{
            e3.innerText="";
        }
        v4=document.getElementById("i4");
        e4=document.getElementById("er4");
        exp4=/^[6-9]{1}[0-9]{9}$/;
        if(v4.value==""){
            e4.innerText="*";
            v4.focus();
            return false;
        }
        else if(exp4.test(v4.value)==false){
            e4.innerText="!";
             v4.focus();
             return false;
            }
            else{
                e4.innerText="";
            }
        v5=document.getElementById("i5");
        e5=document.getElementById("er5");
        sel=v5.selectedIndex;
        if(sel==0)
        {
            e5.innerText="*";
            return false;
        }
        else
        {
            e5.innerText="";
        }
        v6=document.getElementsByName("gender");
        e6=document.getElementById("er6");
        if(v6[0].checked==false && v6[1].checked==false && v6[2].checked==false)
        {
            e6.innerText="*";
            return false;
        }
        else
        {
            e6.innerText="";
        }
        v7=document.getElementById("i6");
        e7=document.getElementById("er7");
        exp5=/^[a-zA-Z\s]{3,100}$/;
        if(v7.value==""){
            e7.innerText="*";
            v7.focus();
            return false;
        }
        else if(exp5.test(v7.value)==false){
            e7.innerText="!";
            v7.focus();
            return false;

        }else{
            e7.innerText=""
        }
    }
