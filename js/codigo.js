function onload(){
    let fecha =new Date();
    document.getElementById("fecha").innerText=fecha;
    document.getElementById("diaSem").innerText= fecha.getDay();
    document.getElementById("ano").innerText= fecha.getFullYear();
    document.getElementById("mes").innerText= fecha.getMonth();
    document.getElementById("dia").innerText= fecha.getDate();
    document.getElementById("hora").innerText= fecha.getHours();
    document.getElementById("minutos").innerText= fecha.getMinutes();
    document.getElementById("segundos").innerText= fecha.getSeconds();
    document.getElementById("miliseg").innerText= fecha.getMilliseconds();
    document.getElementById("unix").innerText= fecha.getTime();
    document.getElementById("dif").innerText= fecha.getTimezoneOffset();
}

function send_name(){
    let name_one=document.getElementById("name_one").value;
    let name_two=document.getElementById("name_two").value;
    let search_var=document.getElementById("search_var").value;

    let name_com=(name_one+" "+name_two).toUpperCase();

    // Swal.fire(name_com);

    let variable1=name_com.indexOf("I");
    let variable2=name_com.lastIndexOf("I");
    let variable3=name_com.charAt(3);

    console.log(variable1);
    console.log(variable2);
    console.log(variable3);

    // console.log(1+1);

    let variable=name_com.charAt(search_var);

    if((name_one.length ==0) || (name_two.length==0)){
        
        if(name_one.length ==0){
            document.getElementById('name_one').style.borderColor= "red";
            Swal.fire({icon:"error",title: "Campo vacio", text: "xx"});
            if(name_two.length==0){
                document.getElementById('name_two').style.borderColor= "red";
                Swal.fire({icon:"error",title: "Campos vacios", text: "xx"});
            }else{
                document.getElementById('name_two').style.borderColor= "red";
                Swal.fire({icon:"error",title: "Campo vacio", text: "xx"});
                if(name_one.length==0){
                    document.getElementById('name_one').style.borderColor= "red";
                    Swal.fire({icon:"error",title: "Campos vacios", text: "xx"});
                }
            }
        }
    }else if(search_var==""){
        Swal.fire({icon:"error",title: "Campo numero vacio", text: "xx"});
    }
    else if(search_var<=name_com.length-1){
        document.getElementById("print_name").innerText="la letra correspondiente al #"+search_var+" es:"+variable;
    }else if(isNaN(search_var)){
        document.getElementById("print_name").innerText="";
        Swal.fire({
            icon: "error",
            tittle:"Error",
            text:"Te equivocas bro, ingresaste una letra"
        });
    }
    else{
        document.getElementById("print_name").innerText="";
        Swal.fire({
            icon: "error",
            tittle:"Error",
            text:"Te equivocas bro, la cantidad de letras es superior"
        });

    }
}