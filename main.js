function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localname ==='audio') {
        elemento.play();
    }

    else {
         //alert ('Elemento nao encontrado);
        console.log('Elemento não encontrado ou seletor invalido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let  contador = 0; 

// while = enquanto | laço de repetição
// while (contador < listaDeTeclas.length) {

for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`; // template string
    
    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    //contador = contador + 1; 

    // console.log(contador);

    tecla.onkeydown = function (e) {

        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {

        tecla.classList.remove('ativa');
    }
}
