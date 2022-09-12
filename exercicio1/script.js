// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.
let simOuNao = prompt("Vai querer comer alguma coxinha?: S/N").toLowerCase()
let conta = Number()
if (simOuNao === "s"){
    conta += 2.50
    console.log(`R$${conta}`)
}else if ("n"){
    alert("Ok até outro dia então")
}
while(simOuNao !== "n"){
    simOuNao = prompt("Deseja comer mais coxinhas?: S/N").toLowerCase()
    if(simOuNao === "s"){
        console.log(`RS${conta} + R$2.5`)
        conta += 2.50
        console.log(`R$${conta}`)
    }else if(simOuNao === "n"){
        alert(`O valor da sua conta é R$${conta}`)
    }
}
// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.