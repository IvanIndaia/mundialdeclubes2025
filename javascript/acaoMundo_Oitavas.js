
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
    Holanda ${plac[0]} X ${plac[1]} Estados Unidos <br> 
    Argentina ${plac[2]} X ${plac[3]} Austrália <br>

    Japão ${plac[4]} X ${plac[5]} Croácia <br>
    Brasil ${plac[6]} X ${plac[7]} Coréia <br>

    Inglaterra ${plac[8]} X ${plac[9]} Senegal <br>
    França ${plac[10]} X ${plac[11]} Polônia <br>

    Marrocos ${plac[12]} X ${plac[13]} Espanha <br>
    Portugal ${plac[14]} X ${plac[15]} Suíça <br>
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

  let campeao1 = document.getElementById('inputGroupSelect01')
  let campeao2 = document.getElementById('inputGroupSelect02')


  console.log(campeao1.value)
  console.log(campeao2.value)

  let artilheiro = document.getElementsByClassName('form-control')

  for (i = 0; i < artilheiro.length; i++) {
    console.log(artilheiro[i].value)
  }

  jogadorArt1 = artilheiro[0].value
  jogadorArt2 = artilheiro[1].value
  // console.log(artilheiro2.value)

}

function whatsapp() {

  let inpsC = document.getElementsByClassName('placar')
  // let inps2 = document.querySelectorAll('input')

  const plac = []

  for (let i = 0; i < inpsC.length; i++) {
    plac[i] = parseInt(inpsC[i].value)
  }


  alert("AINDA NÃO FINALIZOU.. \nA aposta só será validada quando a mensagem chegar no Whatsapp!!!")

  /* let text = `APOSTA *FUTBR* %0ACOPA DO MUNDO CATAR-2022%0A%0A-------------------- %0AOitavas de Final%0A-------------------- %0ACatar ${plac[0]} X ${plac[1]} Equador %0ASenegal ${plac[2]} X ${plac[3]} Holanda %0ACatar ${plac[4]} X ${plac[5]} Senegal %0AHolanda ${plac[6]} X ${plac[7]} Equador %0AHolanda ${plac[8]} X ${plac[9]} Catar%0AEquador ${plac[10]} X ${plac[11]}` */
  // let text = `APOSTA *FUTBR* %0ACOPA DO MUNDO CATAR-2022%0A%0A--------------------------- %0AOitavas de Final%0A--------------------------- %0AHolanda ${plac[0]} X ${plac[1]} Estados Unidos %0APolônia ${plac[2]} X ${plac[3]} Dinamarca %0AEspanha ${plac[4]} X ${plac[5]} Bélgica %0ABrasil ${plac[6]} X ${plac[7]} Uruguai %0AInglaterra ${plac[8]} X ${plac[9]} Senegal%0AFrança ${plac[10]} X ${plac[11]} Argentina%0ACroácia ${plac[12]} X ${plac[13]} Alemanha%0APortugal ${plac[14]} X ${plac[15]} Suíça%0A`
  let text = `APOSTA *FUTBR* %0ACOPA DO MUNDO CATAR-2022%0A%0A--------------------------- %0AOitavas de Final%0A--------------------------- %0AHolanda ${plac[0]} X ${plac[1]} Estados Unidos %0AArgentina ${plac[2]} X ${plac[3]} Austrália %0AJapão ${plac[4]} X ${plac[5]} Croácia %0ABrasil ${plac[6]} X ${plac[7]} Coréia %0AInglaterra+ ${plac[8]} X ${plac[9]} Senegal%0AFrança ${plac[10]} X ${plac[11]} Polônia%0AMarrocos ${plac[12]} X ${plac[13]} Espanha%0APortugal ${plac[14]} X ${plac[15]} Suíça%0A`

  window.open(`https://wa.me/5519992481225?text=${text}`)
  paginaCopaDoMundo()
}

function paginaCopaDoMundo() {
  $(location).attr('href', '../html/copaMundo.html')
}

