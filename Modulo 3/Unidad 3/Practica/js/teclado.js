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

$("#aceptar").click(function () {
    alert("Numero " + input_value.val() + " agregado");
});

