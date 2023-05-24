function meuNome(){
    let nome = window.prompt('Digite sue Nome:')
    
    document.getElementById('valor').innerHTML = nome
}


function Soma(){

    let n1 = Number(window.prompt('digite o valor 1')) 
    let n2 = Number(window.prompt('digite o valor 2'))

    ValorSoma = n1 + n2

    document.getElementById('valor').innerHTML = ValorSoma
}
