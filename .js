// ETIQUETA: CONTAR PALABRAS
function contarPalabras(texto) {
    let palabras = 0;
    let dentroPalabra = false;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " " && texto[i] !== "\n") {
            if (!dentroPalabra) {
                palabras++;
                dentroPalabra = true;
            }
        } else {
            dentroPalabra = false;
        }
    }
    return palabras;
}

// ETIQUETA: CONTAR SIGNOS DE PUNTUACIÓN
function contarSignos(texto) {
    let signos = ".,;:!?¿¡\"";
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < signos.length; j++) {
            if (texto[i] === signos[j]) total++;
        }
    }
    return total;
}

// ETIQUETA: CONTAR VOCALES
function contarVocales(texto) {
    let vocales = "aeiouAEIOU";
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (texto[i] === vocales[j]) total++;
        }
    }
    return total;
}

// ETIQUETA: CONTAR CONSONANTES
function contarConsonantes(texto) {
    let vocales = "aeiouAEIOU";
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];
        if ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z")) {
            let esVocal = false;
            for (let j = 0; j < vocales.length; j++) {
                if (c === vocales[j]) esVocal = true;
            }
            if (!esVocal) total++;
        }
    }
    return total;
}

// ETIQUETA: CONTAR DÍGITOS
function contarDigitos(texto) {
    let total = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= "0" && texto[i] <= "9") total++;
    }
    return total;
}

// ETIQUETA: PALABRAS QUE EMPIEZAN EN MAYÚSCULA
function palabrasMayuscula(texto) {
    let total = 0;
    let inicio = true;

    for (let i = 0; i < texto.length; i++) {
        if (inicio && texto[i] >= "A" && texto[i] <= "Z") total++;
        inicio = (texto[i] === " " || texto[i] === "\n");
    }
    return total;
}

// ETIQUETA: PALABRAS QUE EMPIEZAN EN MINÚSCULA
function palabrasMinuscula(texto) {
    let total = 0;
    let inicio = true;

    for (let i = 0; i < texto.length; i++) {
        if (inicio && texto[i] >= "a" && texto[i] <= "z") total++;
        inicio = (texto[i] === " " || texto[i] === "\n");
    }
    return total;
}

// ETIQUETA: CONTAR PÁRRAFOS
function contarParrafos(texto) {
    if (texto.length === 0) return 0;

    let total = 1;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "\n") total++;
    }
    return total;
}

// ETIQUETA: INVERTIR TEXTO COMPLETO
function invertirTexto(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) invertido += texto[i];
    return invertido;
}

// ETIQUETA: CONTAR TODOS LOS CARACTERES
// ETIQUETA: CONTAR UN CARÁCTER ESPECÍFICO
function contarCaracteres(texto) {
    return texto.length;
}

// ETIQUETA: BUSCAR PALABRA EN EL TEXTO
function buscarPalabra(texto, palabra) {
    let actual = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " " && texto[i] !== "\n") {
            actual += texto[i];
        } else {
            if (actual === palabra) return true;
            actual = "";
        }
    }
    return actual === palabra;
}

function contarCaracter(texto, caracter) {
    let total = 0;
    for (let i = 0; i < texto.length; i++) if (texto[i] === caracter) total++;
    return total;
}

// ETIQUETA: CONTAR CARACTERES EN POSICIONES PARES
function contarPares(texto) {
    let total = 0;
    for (let i = 0; i < texto.length; i += 2) total++;
    return total;
}

// ETIQUETA: CONTAR CARACTERES EN POSICIONES IMPARES
function contarImpares(texto) {
    let total = 0;
    for (let i = 1; i < texto.length; i += 2) total++;
    return total;
}

// ETIQUETA: AGREGAR TEXTO AL INICIO Y AL FINAL
function agregarInicioFinal(texto, fragmento) {
    return {
        inicio: fragmento + " " + texto,
        final: texto + " " + fragmento
    };
}
// ---------------- MOSTRAR RESULTADOS ----------------function procesar() {    let texto = document.getElementById("texto").value;    let palabra = document.getElementById("buscar").value;    let caracter = document.getElementById("caracter").value;    let fragmento = document.getElementById("fragmento").value;    let res = "";        res += "Palabras: " + contarPalabras(texto) + "\n";    res += "Signos de puntuación: " + contarSignos(texto) + "\n";    res += "Vocales: " + contarVocales(texto) + "\n";    res += "Consonantes: " + contarConsonantes(texto) + "\n";    res += "Dígitos: " + contarDigitos(texto) + "\n";    res += "Palabras con mayúscula inicial: " + palabrasMayuscula(texto) + "\n";    res += "Palabras con minúscula inicial: " + palabrasMinuscula(texto) + "\n";    res += "Párrafos: " + contarParrafos(texto) + "\n";    res += "Texto invertido: " + invertirTexto(texto) + "\n";    res += "Total de caracteres: " + contarCaracteres(texto) + "\n";    if (palabra !== "") res += "Buscar palabra: " + (buscarPalabra(texto, palabra) ? "Sí está" : "No está") + "\n";    if (caracter !== "") res += "El carácter '" + caracter + "' aparece: " + contarCaracter(texto, caracter) + " veces\n";    if (fragmento !== "") {        let agregado = agregarInicioFinal(texto, fragmento);        res += "\nTexto con fragmento al inicio:\n" + agregado.inicio + "\n";        res += "Texto con fragmento al final:\n" + agregado.final + "\n";    }    document.getElementById("resultado").textContent = res;}</script></body></html>