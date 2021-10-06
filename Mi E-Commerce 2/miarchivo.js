


/* SIMULADOR DE CALCULADORA DE PRECIO FINAL PARA EL USUARIO */

function precioMayorA2000( precio ){

let precioMinimo = 2000
    if( precio >= precioMinimo  ){

        return true;
    }
    else{
        return false;
    
    }

}


function descuento( cupon ){

    let cuponRegistrado = "regina";

    if( cupon == cuponRegistrado ){

        return true;
    }
    else{
        return false;
    }


}


function mostrarPrecio(){


    if( precio == true && cupon == true){
        return true;
    }
}




let precio = parseInt (prompt("Ingrese el precio de lista del producto;"));
let cupon = prompt("Ingrese su cupón de descuento:");



if( mostrarPrecio){

    alert("El precio a abonar es de: $");

}
else{

    alert("No aplican descuentos")
}

