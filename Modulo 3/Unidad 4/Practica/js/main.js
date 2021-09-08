let cant_letras = 0;

var alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    }, {
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, {
      nombre: 'Roxana García',
      nota: 8
    }, {
      nombre: 'Luciano Lopez',
      nota: 5
    }, {
      nombre: 'Fernanda Gimenez',
      nota: 6
    }, {
      nombre: 'Florencia Martinez',
      nota: 10
    }, {
      nombre: 'Raul Sanchez',
      nota: 7
    }, {
      nombre: 'Sandra Figueroa',
      nota: 8
    }
];

// Inicio

$('.ejercicio').hide();

$('header').click(function(){
    $('header').removeClass('transparencia')
    $('body').removeAttr("style");
 });


$('nav.menu-ejercicios a').click(function(){
    $('.ejercicio').hide();
    $('nav.menu-ejercicios a').removeClass('active');
    $(this).addClass('active');

    ejercicio = $(this).attr('href');
    $(ejercicio).show();

});

// Funciones para Ejercicio 1

function cambiarFondoBody(color) {
    $('header').addClass('transparencia')
    document.body.style.background = color;

}

// Funciones para Ejercicio 2

function borrarTexto(){
    document.getElementById("texto").value = "";
    cant_letras = 0;
    $('#cantidad').text(cant_letras);
}

function contadorCaracteres(textarea){
    const max = 200;
    cant_letras = textarea.value.length;
    if (cant_letras > max){
        textarea.value = textarea.value.substring(0,max);
    } else {
        $('#cantidad').text(cant_letras);
    }
}


// Funciones para Ejercicio 3

// Lista completa de alumnos
alumnos.forEach(a => {
    cargarTablaAlumnos(a.nombre,a.nota);
    if (a.nota >= 7){
        tablaAlumnosAprobados(a.nombre,a.nota);
    }
});

// Ingreso manual de alumnos

$('span.aceptar').click(function(){
    alumno = document.getElementById('alumno').value;
    nota = parseInt(document.getElementById('nota').value,10);
    
    if (alumno != '' && (nota >= 0 && nota <= 10)){
        cargarTablaAlumnos(alumno,nota);
        if (nota >= 7){
            tablaAlumnosAprobados(alumno,nota);
        }
    }
    document.getElementById('alumno').value = '';
    document.getElementById('nota').value = '';
});

function cargarTablaAlumnos (alumno_aux, nota_aux){
    let tablaAlumnos = document.getElementById('lista-alumnos');

    cargarAlumnos(alumno_aux, nota_aux, tablaAlumnos);
    
};

function tablaAlumnosAprobados(alumno_aux, nota_aux){
    let tablaAlumnos = document.getElementById('alumnos-aprobados');
    cargarAlumnos(alumno_aux, nota_aux, tablaAlumnos);

};

function cargarAlumnos (alumno_aux, nota_aux, tabla){
    let fila = tabla.insertRow(-1);
    let alumno = fila.insertCell(0);
    let nota = fila.insertCell(1);

    alumno.innerText = alumno_aux;
    nota.innerText = nota_aux;

}