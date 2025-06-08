
function acionarModal() {

  let inpsA = document.getElementsByClassName('placar')
  let inps = document.querySelectorAll('input')

  let notAnumber = 0

  for (i = 0; i < inpsA.length; i++) {
    console.log('Placar ' + i + ' = ' + inpsA[i].id + ' -> ' + inpsA[i].value)
    if (i === 0 || i === 1 || i == 2 || i == 3 || i === 12 || i === 13 || i === 14 || i === 15) {
      console.log(`Jogo Inválido ${i} - ${inpsA[i]}`)
    } else {
      if (isNaN(parseInt(inpsA[i].value))) {
        notAnumber++
      }
    }
  }

  console.log(`Quantidade de Placar: ${inpsA.length}`)
  console.log(`Quantidade de Inputs: ${inps.length}`)

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

    let campeao1 = document.getElementById('inputGroupSelect01').value
    let campeao2 = document.getElementById('inputGroupSelect02').value

    let artilheiro = document.getElementsByClassName('form-control')
    jogadorArt1 = artilheiro[0].value
    jogadorArt2 = artilheiro[1].value

    $('#helloa').append(`<p style="text-align: center;"> 
    -------------------- <br>
    Grupo A <br>
    -------------------- <br>
    Catar ${plac[0]} X ${plac[1]} Equador <br> 
    Senegal ${plac[2]} X ${plac[3]} Holanda <br>

    Catar ${plac[4]} X ${plac[5]} Senegal <br>
    Holanda ${plac[6]} X ${plac[7]} Equador <br>

    Holanda ${plac[8]} X ${plac[9]} Catar <br>
    Equador ${plac[10]} X ${plac[11]} Senegal <br>
    <br>


    -------------------- <br>
    Grupo B <br>
    -------------------- <br>
    Inglaterra ${plac[12]} X ${plac[13]} Irã <br> 
    EUA ${plac[14]} X ${plac[15]} Gales <br>

    Gales ${plac[16]} X ${plac[17]} Irã <br>
    Inglaterra ${plac[18]} X ${plac[19]} EUA <br>

    Irã ${plac[20]} X ${plac[21]} EUA <br>
    Gales ${plac[22]} X ${plac[23]} Inglaterra <br>
    <br>


    -------------------- <br>
    Grupo C <br>
    -------------------- <br>
    Argentina ${plac[24]} X ${plac[25]} Arábia Saudita <br> 
    México ${plac[26]} X ${plac[27]} Polônia <br>

    Polônia ${plac[28]} X ${plac[29]} Arábia Saudita <br>
    Argentina ${plac[30]} X ${plac[31]} México <br>

    Polônia ${plac[32]} X ${plac[33]} Argentina <br>
    Arábia Saudita ${plac[34]} X ${plac[35]} México <br>
    <br>


    -------------------- <br>
    Grupo D <br>
    -------------------- <br>
    Dinamarca ${plac[36]} X ${plac[37]} Tunísia <br> 
    França ${plac[38]} X ${plac[39]} Austrália <br>

    Tunísia ${plac[40]} X ${plac[41]} Austrália <br>
    França ${plac[42]} X ${plac[43]} Dinamarca <br>

    Tunísia ${plac[44]} X ${plac[45]} França <br>
    Austrália ${plac[46]} X ${plac[47]} Dinamarca <br>
    <br>


    -------------------- <br>
    Grupo E <br>
    -------------------- <br>
    Alemanha ${plac[48]} X ${plac[49]} Japão <br> 
    Espanha ${plac[50]} X ${plac[51]} Costa Rica <br>

    Japão ${plac[52]} X ${plac[53]} Costa Rica <br>
    Espanha ${plac[54]} X ${plac[55]} Alemanha <br>

    Japão ${plac[56]} X ${plac[57]} Espanha <br>
    Costa Rica ${plac[58]} X ${plac[59]} Alemanha <br>
    <br>


    -------------------- <br>
    Grupo F <br>
    -------------------- <br>
    Marrocos ${plac[60]} X ${plac[61]} Croácia <br> 
    Bélgica ${plac[62]} X ${plac[63]} Canadá <br>

    Bélgica ${plac[64]} X ${plac[65]} Marrocos <br>
    Croácia ${plac[66]} X ${plac[67]} Canadá <br>

    Croácia ${plac[68]} X ${plac[69]} Bélgica <br>
    Canadá ${plac[70]} X ${plac[71]} Marrocos <br>
    <br>


    -------------------- <br>
    Grupo G <br>
    -------------------- <br>
    Suíça ${plac[72]} X ${plac[73]} Camarões <br> 
    Brasil ${plac[74]} X ${plac[75]} Sérvia <br>

    Camarões ${plac[76]} X ${plac[77]} Sérvia <br>
    Brasil ${plac[78]} X ${plac[79]} Suíça <br>

    Camarões ${plac[80]} X ${plac[81]} Brasil <br>
    Sérvia ${plac[82]} X ${plac[83]} Suíça <br>
    <br>


    -------------------- <br>
    Grupo H <br>
    -------------------- <br>
    Uruguai ${plac[84]} X ${plac[85]} Coreia do Sul <br> 
    Portugal ${plac[86]} X ${plac[87]} Gana <br>

    Coreia do Sul ${plac[88]} X ${plac[89]} Gana <br>
    Portugal ${plac[90]} X ${plac[91]} Uruguai <br>

    Coreia do Sul ${plac[92]} X ${plac[93]} Portugal <br>
    Gana ${plac[94]} X ${plac[95]} Uruguai <br>
    <br><br>

    1º Campeão: ${campeao1} <br>
    2º Campeão: ${campeao2}

    <br><br>

    1º Artilheiro: ${jogadorArt1}<br>
    2º Artilheiro: ${jogadorArt2}<br>


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

  let campeao1 = document.getElementById('inputGroupSelect01').value
  let campeao2 = document.getElementById('inputGroupSelect02').value

  let artilheiro = document.getElementsByClassName('form-control')
  jogadorArt1 = artilheiro[0].value
  jogadorArt2 = artilheiro[1].value

  alert("NÃO SE ESQUECA DE FAZER O PIX: (19)992481225 \nValor: R$ 10,00")

  let text = `APOSTA *FUTBR* %0ACOPA DO MUNDO CATAR-2022%0A%0A-------------------- %0AGrupo A%0A-------------------- %0ACatar ${plac[0]} X ${plac[1]} Equador %0ASenegal ${plac[2]} X ${plac[3]} Holanda %0ACatar ${plac[4]} X ${plac[5]} Senegal %0AHolanda ${plac[6]} X ${plac[7]} Equador %0AHolanda ${plac[8]} X ${plac[9]} Catar%0AEquador ${plac[10]} X ${plac[11]} Senegal%0A%0A-------------------- %0AGrupo B%0A-------------------- %0AInglaterra ${plac[12]} X ${plac[13]} Irã%0AEUA ${plac[14]} X ${plac[15]} Gales %0AGales ${plac[16]} X ${plac[17]} Irã %0AInglaterra ${plac[18]} X ${plac[19]} EUA %0AIrã ${plac[20]} X ${plac[21]} EUA %0AGales ${plac[22]} X ${plac[23]} Inglaterra%0A%0A-------------------- %0AGrupo C%0A-------------------- %0AArgentina ${plac[24]} X ${plac[25]} Arábia Saudita%0AMéxico ${plac[26]} X ${plac[27]} Polônia %0APolônia ${plac[28]} X ${plac[29]} Arábia Saudita%0AArgentina ${plac[30]} X ${plac[31]} México %0APolônia ${plac[32]} X ${plac[33]} Argentina%0AArábia Saudita ${plac[34]} X ${plac[35]} México%0A%0A-------------------- %0AGrupo D%0A-------------------- %0ADinamarca ${plac[36]} X ${plac[37]} Tunísia%0AFrança ${plac[38]} X ${plac[39]} Austrália%0ATunísia ${plac[40]} X ${plac[41]} Austrália%0AFrança ${plac[42]} X ${plac[43]} Dinamarca %0ATunísia ${plac[44]} X ${plac[45]} França %0AAustrália ${plac[46]} X ${plac[47]} Dinamarca %0A%0A-------------------- %0AGrupo E %0A-------------------- %0AAlemanha ${plac[48]} X ${plac[49]} Japão %0AEspanha ${plac[50]} X ${plac[51]} Costa Rica %0AJapão ${plac[52]} X ${plac[53]} Costa Rica %0AEspanha ${plac[54]} X ${plac[55]} Alemanha %0AJapão ${plac[56]} X ${plac[57]} Espanha %0ACosta Rica ${plac[58]} X ${plac[59]} Alemanha %0A%0A-------------------- %0AGrupo F %0A-------------------- %0AMarrocos ${plac[60]} X ${plac[61]} Croácia %0ABélgica ${plac[62]} X ${plac[63]} Canadá %0ABélgica ${plac[64]} X ${plac[65]} Marrocos %0ACroácia ${plac[66]} X ${plac[67]} Canadá %0ACroácia ${plac[68]} X ${plac[69]} Bélgica %0ACanadá ${plac[70]} X ${plac[71]} Marrocos %0A%0A-------------------- %0AGrupo G %0A-------------------- %0ASuíça ${plac[72]} X ${plac[73]} Camarões %0ABrasil ${plac[74]} X ${plac[75]} Sérvia %0ACamarões ${plac[76]} X ${plac[77]} Sérvia %0ABrasil ${plac[78]} X ${plac[79]} Suíça %0ACamarões ${plac[80]} X ${plac[81]} Brasil %0ASérvia ${plac[82]} X ${plac[83]} Suíça %0A%0A-------------------- %0AGrupo H %0A-------------------- %0AUruguai ${plac[84]} X ${plac[85]} Coreia do Sul %0A`
  let text2 = `Portugal ${plac[86]} X ${plac[87]} Gana %0ACoreia do Sul ${plac[88]} X ${plac[89]} Gana %0APortugal ${plac[90]} X ${plac[91]} Uruguai %0ACoreia do Sul ${plac[92]} X ${plac[93]} Portugal %0AGana ${plac[94]} X ${plac[95]} Uruguai %0A%0A*1º Campeão:* ${campeao1} %0A*2º Campeão:* ${campeao2} %0A%0A*1º Artilheiro:* ${jogadorArt1}%0A*2º Artilheiro:* ${jogadorArt2}%0A%0A%0APix R$10: 19992481225`

  window.open(`https://wa.me/5519992481225?text=${text}${text2}`)
  paginaCopaDoMundo()
}

function paginaCopaDoMundo() {
  $(location).attr('href', '../html/copaMundo.html')
}

