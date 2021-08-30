// $('nav.solapas a:first').addClass('solapa-activa');
// $('.secciones-ejer section').hide();
let solapaActiva = '';
let listaNumeros = [];

$('.secciones-ejer').hide();
$('.caja_numero').hide();
$('.teclado').hide();
$('.listas').hide();
$('.verficar-ej2').hide();
$('.resultado-ej2').hide();
// $('.secciones-ejer section:first').show();

$('nav.solapas a').click(function(){
    $('.resultado-ej2').hide();
    $('.verficar-ej2').hide();

    $('.secciones-ejer').show();
    $('.secciones-ejer section').hide();
    $('.listas').hide();
    
    $('nav.solapas a').removeClass('solapa-activa');
    $(this).addClass('solapa-activa');

    input_value.val('');
    document.getElementById('lista').innerHTML='';
        
    solapaActiva = $(this).attr('href');
    $(solapaActiva).show();
    $('.caja_numeros').show();
    $('.teclado').show();
    
    return false;
});

// TECLADO

const input_value = $("#numeros");

$("#numeros").keypress(function () {
    return false;
});

$(".calc").click(function () {
    let value = $(this).val();
    field(value);
});

function field(value) {
    input_value.val(input_value.val() + value);
}

$("#borrar").click(function () {
    input_value.val("");
});

// RESULTADO

$("#aceptar").click(function () {
    // let distancia = input_value.val();
    
    if(solapaActiva == '#ej1'){
        $('.resultados').show();
        // document.getElementById('resultado').innerHTML='Ejercicio 1: ' + (input_value.val()*2);
        $('.resultados p').show();
        $('.resultados p').removeClass();
        if (input_value.val() >= 0 && input_value.val() < 1000){
            
            $('.resultados p').addClass('fas fa-walking');
        }
        if (input_value.val() >= 1000 && input_value.val()< 10000){
            $('.resultados p').addClass('fas fa-bicycle');
        }
        if (input_value.val() >= 10000 && input_value.val()< 30000){
            $('.resultados p').addClass('fas fa-bus-alt');
        }
        if (input_value.val() >= 30000 && input_value.val()< 100000){
            $('.resultados p').addClass('fas fa-car');
        }
        if (input_value.val() >= 100000 ){
            $('.resultados p').addClass('fas fa-plane-departure');
        }
    

    } else 
    if (solapaActiva == '#ej2'){
        $('.resultados p').removeClass();
        // let numMayor = -1;
        if(input_value.val()!=''){
            listaNumeros.push(parseInt(input_value.val(),10));
            $('.listas').show();
            if (listaNumeros.length > 1){
                $('.verficar-ej2').show();
            } else {
                $('.resultado-ej2').hide();
                $('.verficar-ej2').hide();
            }
        }
        document.getElementById('lista').innerHTML='Lista: ' + listaNumeros;
        input_value.val('');
    }
    
    return false;
});

$("#buscar-mayor").click(function () {
    $('.resultado-ej2').show();
    let numMayor = listaNumeros[0];
    // console.log(listaNumeros);
    
    for (let i = 1; i < listaNumeros.length; i++){
        // console.log(numMayor);
        if (listaNumeros[i] > numMayor){
            numMayor = listaNumeros[i];

        }
    }
    
    document.getElementById('resultado-ej2-p').innerHTML='El mayor es: ' + numMayor;
    listaNumeros.length = 0;
});

