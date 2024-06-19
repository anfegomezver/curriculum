// alert("Hola")
// console.log("hola")
// Swal.fire("SweetAlert2 is working!");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "warning",
//     iconColor:"#000",
//     showConfirmButton: true,
//     confirmButtonColor: "#3085d6",
//     timer:1500
/*

 */
//   });

//   function load_page(){
//     Swal.fire({
//         imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
//         // imageHeight: 1500,
//         imageAlt: "A tall image",   showConfirmButton: false
//       });
//   }

function send_info() {
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat_password").value;

    if (name.length == 0 || last_name.length == 0) {
        Swal.fire({
            title: "Campos vacíos",
            text: "Rellene los campos",
            icon: "error",
            showConfirmButton: true,
            confirmButtonColor: "#3085d6",
            timer: 1500
        });
        if (name.length == 0) {
            document.getElementById("name").style.border = "2px solid red";
        } else if (last_name.length == 0) {
            document.getElementById("last_name").style.border = "2px solid red";
        }
        } else if (repeat_password != password) {
        Swal.fire({
            title: "Verifica contraseña",
            text: "Las contraseñas no son iguales",
            showConfirmButton: true,
            icon: "error",
        });
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("repeat_password").style.border = "2px solid red";
    } else {
        document.getElementById("name").style.border = "2px solid green";
        document.getElementById("last_name").style.border = "2px solid green";
        document.getElementById("password").style.border = "2px solid green";
        document.getElementById("repeat_password").style.border = "2px solid green";
        Swal.fire({
            title: "¡Bien!",
            text: "Se mandó correctamente la información",
            icon: "success"
        });
        document.getElementById("print").innerText = name + " " + last_name;
    }
}

//array

var dias_sem= ["Lunes","Martes","Miercoles","Jueves", "Viernes","Sabado","Domingo"];
var array_num=[1,2,3,4,5,6,7,8,9];
var array_mix=[1,2.5,"abc"];
var array_mul=[
    {name: "Wilder",age:32,color:"green"},
    {name: "Anyi",age:33,color:"white"},
    {name: "Celeste",age:3,color:"black"},
    {name: "Antonella",age:2,color:"gray"}
];

var json_ejm={
    name:"Wilder",
    lastname:"Duarte",
    phone:"3168667751",
    email:"waduarte@ufpso.edu.co"
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for(let i =0; i<dias_sem.length;i++){
    console.log(dias_sem[i]);
}

let acum=0;

for(let j =0; j<array_num.length;j++){
    acum+=array_num[j];
}
console.log(acum);

let acum2=0;
for(let k =0; k<array_mul.length;k++){
    acum2+=array_mul[k].age;
}
console.log(acum2);

// document.getElementById("print_age").innerText="El total de la suma es "+acum2;

var array_num2=[1,2,3,4,5,6,7,8,9];

document.getElementById("valor").value = array_num2;

function agregar(){

    let valor = document.getElementById("valorAdd").value;
    array_num2.push(valor);
    document.getElementById("valor").value = array_num2;
}

function eliminar(){
    array_num2.pop();
    document.getElementById("valor").value = array_num2;
}

function agregarPrincipio(){
    let valor = document.getElementById("valorAdd").value;
    array_num2.unshift(valor);
    document.getElementById("valor").value = array_num2;
}

function eliminarPrincipio(){
    array_num2.shift();
    document.getElementById("valor").value = array_num2;
}

function limpiar(){
    
    document.getElementById("valor").value = "";
    document.getElementById("valorAdd").value="";
}

function reverse(){
    array_num2.reverse();
    document.getElementById("valor").value = array_num2;
}