let url= new URL(window.location.href);
let urlparametros = url.searchParams;
let usuario = urlparametros.get("usuario");
let nombre = document.getElementById("nombre");
nombre.innerText=usuario;
let cuenta = [
    { nombre: 'Mali', saldo: 200.00 },
    { nombre: 'Gera', saldo: 290.00 },
    { nombre: 'Ana', saldo: 67.00 }
];

function consultaSaldo(){
    //Uso para que aparezca la sección indicada
    let consultar = document.getElementById("consulta");
    let depositar = document.getElementById("depositar")
    let retirar = document.getElementById("retirar")
    consultar.style.display="block";
    depositar.style.display="none";
    retirar.style.display="none";
    //Leer el saldo
    for (i=0;i<3;i++){
        if (cuenta[i].nombre==usuario){
            console.log(cuenta[i].saldo);
            let saldo=document.getElementById("saldoActual");
            saldo.innerText= ("$"+cuenta[i].saldo);
        }
    }
}

function deposita(){
    //Uso para que aparezca la sección indicada
    let consultar = document.getElementById("consulta");
    let depositar = document.getElementById("depositar")
    let retirar = document.getElementById("retirar")
    consultar.style.display="none";
    depositar.style.display="block";
    retirar.style.display="none";
}

function ingreso(){
    let ingreso = document.getElementById("ingreso").value;
    for (i=0;i<3;i++){
        if (cuenta[i].nombre==usuario){
            console.log(cuenta[i].saldo);
           let suma =parseFloat(cuenta[i].saldo)+parseFloat(ingreso);
           if (suma>=990){
            alert("El saldo no puede ser superior a $990.00. Ingrese otra cantidad.")
           }else{
            alert("Deposito exitoso, revise su saldo.");
            cuenta[i].saldo=suma;
           }
        }
    }
}
function retira(){
    //Uso para que aparezca la sección indicada
    let consultar = document.getElementById("consulta");
    let depositar = document.getElementById("depositar")
    let retirar = document.getElementById("retirar")
    consultar.style.display="none";
    depositar.style.display="none";
    retirar.style.display="block";
}

function egreso(){
    let egreso = document.getElementById("retiro").value;
    for (i=0;i<3;i++){
        if (cuenta[i].nombre==usuario){
            console.log(cuenta[i].saldo);
           let resta = parseFloat(cuenta[i].saldo) - parseFloat(egreso);
           if (resta<=10){
            alert("El saldo no puede ser menor a $10.00. Ingrese otra cantidad.")
           }else{
            alert("Retiro exitoso, revise su saldo.");
            console.log(resta);
            cuenta[i].saldo=resta;
           }
        }
    }
}


