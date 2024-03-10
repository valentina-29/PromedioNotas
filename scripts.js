function calcularPromedio() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese valores numéricos válidos.";
        return;
    }

    var promedio = (nota1 + nota2 + nota3) / 3;
    document.getElementById("resultado").innerHTML = "El promedio es: " + promedio.toFixed(2);
}