// $('nav.solapas a:first').addClass('solapa-activa');
// $('.secciones-ejer section').hide();
let solapaActiva = '';

$('.secciones-ejer').hide();
$('.caja_numero').hide();
$('.teclado').hide();
$('.resultados').hide();
// $('.secciones-ejer section:first').show();

$('nav.solapas a').click(function(){
    $('.secciones-ejer').show();
    $('.secciones-ejer section').hide();
    $('.resultados').hide();
    
    $('nav.solapas a').removeClass('solapa-activa');
    $(this).addClass('solapa-activa');

    input_value.val('');
    document.getElementById('resultado').innerHTML='';
        
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
        $('.resultados').show();
        document.getElementById('resultado').innerHTML='Ejercicio 2: ' + input_value.val();
    }
    return false;
});

