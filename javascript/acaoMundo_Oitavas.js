function acionarModal() {

  let inpsA = document.getElementsByClassName('placar')
  let inps = document.querySelectorAll('input')

  let notAnumber = 0

  for (i = 0; i < inpsA.length; i++) {
    console.log('Placar ' + i + ' = ' + inpsA[i].id + ' -> ' + inpsA[i].value)
    if (i === 16) {
      console.log(`Jogo Inválido ${i} - ${inpsA[i]}`)
    } else {
      if (isNaN(parseInt(inpsA[i].value))) {
        notAnumber++
      }
    }
  }
  /*
  console.log(`Quantidade de Placar: ${inpsA.length}`)
  console.log(`Quantidade de Inputs: ${inps.length}`)
  */
  if (notAnumber === 0) {
    apostarCopaDoMundo()
  } else {
    alert("Preencher todos os jogos com placares VÁLIDOS!")
    console.log(notAnumber)
  }

}

function apostarCopaDoMundo() {

  const elmnto = document.getElementById('helloa');
  elmnto.innerHTML = ''

  let inpsB = document.getElementsByClassName('placar')

  let sou = document.querySelectorAll('button')[1]
  sou.setAttribute("data-target", "#meuModal")
  // sou.forEach(e => {
  //   console.log(e)
  // });

  // console.log(sou)

  $(document).ready(function () {

    let inpsB = document.getElementsByClassName('placar')
    // let inps1 = document.querySelectorAll('input')
    const plac = []

    for (let i = 0; i < inpsB.length; i++) {
      plac[i] = parseInt(inpsB[i].value)
    }



    $('#helloa').append(`<p style="text-align: center;"> 
    --------------------------- <br>
    Oitavas de Final <br>
    --------------------------- <br>
    Palmeiras ${plac[0]} X ${plac[1]} Botafogo <br> 
    Benfica ${plac[2]} X ${plac[3]} Chelsea <br>

    Inter de Milão ${plac[4]} X ${plac[5]} Fluminense <br>
    Manchester City ${plac[6]} X ${plac[7]} Al-Hilal <br>

    PSG ${plac[8]} X ${plac[9]} Inter Miami <br>
    Flamengo ${plac[10]} X ${plac[11]} Bayern de Munique <br>

    Borussia Dortmund ${plac[12]} X ${plac[13]} Monterrey <br>
    Real Madrid ${plac[14]} X ${plac[15]} Juventus <br>
    <br>

    </p>`);
  });


  let stg = $('#meuModal')
  stg.css({
    "visibility": "visible"
  })

}

function vaiDarCerto() {
  // let paragrafos = document.querySelectorAll('p')

  // paragrafos.forEach(e => {
  //   console.log(e)

  // });

  // let campeao1 = document.getElementById('inputGroupSelect01')
  // let campeao2 = document.getElementById('inputGroupSelect02')


  // console.log(campeao1.value)
  // console.log(campeao2.value)

  // let artilheiro = document.getElementsByClassName('form-control')

  // for (i = 0; i < artilheiro.length; i++) {
  //   console.log(artilheiro[i].value)
  // }

  // jogadorArt1 = artilheiro[0].value
  // jogadorArt2 = artilheiro[1].value
  // console.log(artilheiro2.value)

}

function whatsapp() {

  let inpsC = document.getElementsByClassName('placar')
  // let inps2 = document.querySelectorAll('input')

  const plac = []

  for (let i = 0; i < inpsC.length; i++) {
    plac[i] = parseInt(inpsC[i].value)
  }

  let userName = prompt("Digite o seu Nome: ");
  let cellPhone = prompt("Digite o número do seu Celular com DDD: ");

  alert("AINDA NÃO FINALIZOU.. \nA aposta só será validada quando a mensagem chegar no Whatsapp!!!")


  let text = `NOME: ${userName} %0AContato: ${cellPhone} %0A%0AAPOSTA *FUTBR* %0AMUNDIAL DE CLUBES FIFA-2025%0A%0A--------------------------- %0AOitavas de Final%0A--------------------------- %0APalmeiras ${plac[0]} X ${plac[1]} Botafogo %0ABenfica ${plac[2]} X ${plac[3]} Chelsea %0AInter de Milão ${plac[4]} X ${plac[5]} Fluminense %0AManchester City ${plac[6]} X ${plac[7]} Al-Hilal %0APSG ${plac[8]} X ${plac[9]} Inter Miami %0AFlamengo ${plac[10]} X ${plac[11]} Bayern de Munique %0ABorussia Dortmund ${plac[12]} X ${plac[13]} Monterrey %0AReal Madrid ${plac[14]} X ${plac[15]} Juventus%0A`


  // salvarEmArquivo()

  window.open(`https://wa.me/5519992481225?text=${text}`)
  paginaCopaDoMundo()
}

function paginaCopaDoMundo() {
  $(location).attr('href', '../html/oitavasDeFinal.html')
}

// fs.appendFile()

// salvarEmArquivo() {

//   const fs = require('fs');

//   function salvarDadosNoTxtNode(caminhoArquivo, dados) {
//     fs.writeFile(caminhoArquivo, dados, (err) => {
//       if (err) {
//         console.error("Erro ao escrever no arquivo:", err);
//       } else {
//         console.log("Dados salvos com sucesso!");
//       }
//     })
//   }

//   // Exemplo de uso
//   const dadosParaSalvar = "Este é o texto a ser salvo no arquivo."
//   salvarDadosNoTxtNode('./meuArquivo.txt', dadosParaSalvar);
// }
