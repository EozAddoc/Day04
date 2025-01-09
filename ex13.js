// ### **Exercice 13 : Calculatrice avec des fonctions**

// - Écrivez une fonction `calculer` qui prend en paramètres trois arguments :
//     - Un premier nombre.
//     - Un second nombre.
//     - Une opération (`"+", "-", "*", "/"`).
// - La fonction doit retourner le résultat de l’opération.
// - Affichez le résultat dans la console.
// - Gérez les cas où une division par zéro est demandée en affichant un message d'erreur.

operations = ["+", "-", "*", "/"]
function calculer(a,b,op){
    if(!(Number.isInteger(a)) || !(Number.isInteger(b)) || !(operations.includes(op)) ){
        return "error cannot calculate with those values or error in operation"
    }
    res = 0
    switch (op) {
        case "+":
            res = a+b;
            break;
        case "-":
            res = a-b;
            break;
        case "*":
            res =1
            res = a*b;
            break;
        case "/":
            res =1
            if (b ==0){
                return "error cannot divide by 0"
            }
            res = a/b;
            break;
        }
    return res
}

console.log(calculer(20,15,"+"))
console.log(calculer(20,15,"-"))
console.log(calculer(20,15,"*"))
console.log(calculer(20,15,"/"))