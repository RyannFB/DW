
function verify(a, b, c) {
    
    if (a + b > c && a + c > b && b + c > a) {
       // Identifica o tipo do triângulo
        if (a === b && b === c) {
            return "Triângulo equilátero";
        } else if (a === b || a === c || b === c) {
            return "Triângulo isósceles";
        } else {
            return "Triângulo escaleno";
        }
    } else {
        return "Os valores informados não formam um triângulo";
    }
} 


