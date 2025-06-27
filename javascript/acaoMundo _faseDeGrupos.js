function acionarModal() {

  let inpsA = document.getElementsByClassName('placar')
  let inps = document.querySelectorAll('input')

  let notAnumber = 0

  for (i = 0; i < inpsA.length; i++) {
    console.log('Placar ' + i + ' = ' + inpsA[i].id + ' -> ' + inpsA[i].value)
    if (i === 0 || i === 1 || i === 2 || i === 3 || i === 12 || i === 13 || i === 14 || i === 15) {
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

    let campeao1 = document.getElementById('inputGroupSelect01').value
    let campeao2 = document.getElementById('inputGroupSelect02').value

    let artilheiro = document.getElementsByClassName('form-control')
    jogadorArt1 = artilheiro[0].value
    jogadorArt2 = artilheiro[1].value

    
    $('#helloa').append(`<p style="text-align: center;"> 
    -------------------- <br>
    Grupo A <br>
    -------------------- <br>
    Al Ahly ${plac[0]} X ${plac[1]} Inter Miami <br> 
    Palmeiras ${plac[2]} X ${plac[3]} Porto <br>

    Palmeiras ${plac[4]} X ${plac[5]} Al Ahly <br>
    Inter Miami ${plac[6]} X ${plac[7]} Porto <br>

    Inter Miami ${plac[8]} X ${plac[9]} Palmeiras <br>
    Porto ${plac[10]} X ${plac[11]} Al Ahly <br>
    <br>


    -------------------- <br>
    Grupo B <br>
    -------------------- <br>
    PSG ${plac[12]} X ${plac[13]} Atlético de Madrid <br> 
    Botafogo ${plac[14]} X ${plac[15]} Seattle Sounders <br>

    Seattle Sounders ${plac[16]} X ${plac[17]} Atlético de Madrid <br>
    PSG ${plac[18]} X ${plac[19]} Botafogo <br>

    Seattle Sounders ${plac[20]} X ${plac[21]} PSG <br>
    Atlético de Madrid ${plac[22]} X ${plac[23]} Botafogo <br>
    <br>


    -------------------- <br>
    Grupo C <br>
    -------------------- <br>
    Bayern de Munique ${plac[24]} X ${plac[25]} Auckland City <br> 
    Boca Juniors ${plac[26]} X ${plac[27]} Benfica <br>

    Benfica ${plac[28]} X ${plac[29]} Auckland City <br>
    Bayern de Munique ${plac[30]} X ${plac[31]} Boca Juniors <br>

    Benfica ${plac[32]} X ${plac[33]} Bayern de Munique <br>
    Auckland City ${plac[34]} X ${plac[35]} Boca Juniors <br>
    <br>


    -------------------- <br>
    Grupo D <br>
    -------------------- <br>
    Chelsea ${plac[36]} X ${plac[37]} Los Angeles FC <br> 
    Flamengo ${plac[38]} X ${plac[39]} Espérance <br>

    Flamengo ${plac[40]} X ${plac[41]} Chelsea <br>
    Los Angeles FC ${plac[42]} X ${plac[43]} Espérance <br>

    Espérance ${plac[44]} X ${plac[45]} Chelsea <br>
    Los Angeles FC ${plac[46]} X ${plac[47]} Flamengo <br>
    <br>


    -------------------- <br>
    Grupo E <br>
    -------------------- <br>
    River Plate ${plac[48]} X ${plac[49]} Urawa Reds <br> 
    Monterrey ${plac[50]} X ${plac[51]} Inter de Milão <br>

    Inter de Milão ${plac[52]} X ${plac[53]} Urawa Reds <br>
    River Plate ${plac[54]} X ${plac[55]} Monterrey <br>

    Inter de Milão ${plac[56]} X ${plac[57]} River Plate <br>
    Urawa Reds ${plac[58]} X ${plac[59]} Monterrey <br>
    <br>


    -------------------- <br>
    Grupo F <br>
    -------------------- <br>
    Fluminense ${plac[60]} X ${plac[61]} Borussia Dortmund <br> 
    Ulsan HD ${plac[62]} X ${plac[63]} Mamelodi Sundowns <br>

    Mamelodi Sundowns ${plac[64]} X ${plac[65]} Borussia Dortmund <br>
    Fluminense ${plac[66]} X ${plac[67]} Ulsan HD <br>

    Mamelodi Sundowns ${plac[68]} X ${plac[69]} Fluminense <br>
    Borussia Dortmund ${plac[70]} X ${plac[71]} Ulsan HD <br>
    <br>


    -------------------- <br>
    Grupo G <br>
    -------------------- <br>
    Manchester City ${plac[72]} X ${plac[73]} Wydad Casablanca <br> 
    Al-Ain ${plac[74]} X ${plac[75]} Juventus <br>

    Juventus ${plac[76]} X ${plac[77]} Wydad Casablanca <br>
    Manchester City ${plac[78]} X ${plac[79]} Al-Ain <br>

    Juventus ${plac[80]} X ${plac[81]} Manchester City <br>
    Wydad Casablanca ${plac[82]} X ${plac[83]} Al-Ain <br>
    <br>


    -------------------- <br>
    Grupo H <br>
    -------------------- <br>
    Real Madrid ${plac[84]} X ${plac[85]} Al-Hilal <br> 
    Pachuca ${plac[86]} X ${plac[87]} RB Salzburg <br>

    Real Madrid ${plac[88]} X ${plac[89]} Pachuca <br>
    RB Salzburg ${plac[90]} X ${plac[91]} Al-Hilal <br>

    RB Salzburg ${plac[92]} X ${plac[93]} Real Madrid <br>
    Al-Hilal ${plac[94]} X ${plac[95]} Pachuca <br>
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

  alert("NÃO SE ESQUECA DE FAZER O PIX: (19)992481225 \nValor: R$ 20,00")

  
  let text = `APOSTA *FUTBR* %0AMUNDIAL DE CLUBES DA FIFA-2025%0A%0A-------------------- %0A`
  let textAB = `Grupo A %0A-------------------- %0AAl Ahly ${plac[0]} X ${plac[1]} Inter Miami %0APalmeiras ${plac[2]} X ${plac[3]} Porto %0APalmeiras ${plac[4]} X ${plac[5]} Al Ahly %0AInter Miami ${plac[6]} X ${plac[7]} Porto %0AInter Miami ${plac[8]} X ${plac[9]} Palmeiras %0APorto ${plac[10]} X ${plac[11]} Al Ahly%0A%0A-------------------- %0AGrupo B%0A-------------------- %0APSG ${plac[12]} X ${plac[13]} Atlético de Madrid %0ABotafogo ${plac[14]} X ${plac[15]} Seattle Sounders %0ASeattle Sounders ${plac[16]} X ${plac[17]} Atlético de Madrid %0APSG ${plac[18]} X ${plac[19]} Botafogo %0ASeattle Sounders ${plac[20]} X ${plac[21]} PSG %0AAtlético de Madrid ${plac[22]} X ${plac[23]} Botafogo%0A%0A-------------------- %0A`
  let textCD = `Grupo C %0A-------------------- %0ABayern de Munique ${plac[24]} X ${plac[25]} Auckland City %0ABoca Juniors ${plac[26]} X ${plac[27]} Benfica %0ABenfica ${plac[28]} X ${plac[29]} Auckland City %0ABayern de Munique ${plac[30]} X ${plac[31]} Boca Juniors %0ABenfica ${plac[32]} X ${plac[33]} Bayern de Munique %0AAuckland City ${plac[34]} X ${plac[35]} Boca Juniors %0A%0A--------------------%0AGrupo D%0A-------------------- %0AChelsea ${plac[36]} X ${plac[37]} Los Angeles FC %0AFlamengo ${plac[38]} X ${plac[39]} Espérance %0AFlamengo ${plac[40]} X ${plac[41]} Chelsea %0ALos Angeles FC ${plac[42]} X ${plac[43]} Espérance %0AEspérance ${plac[44]} X ${plac[45]} Chelsea %0ALos Angeles FC ${plac[46]} X ${plac[47]} Flamengo %0A%0A-------------------- %0A`
  let textEF = `Grupo E %0A-------------------- %0ARiver Plate ${plac[48]} X ${plac[49]} Urawa Reds %0AMonterrey ${plac[50]} X ${plac[51]} Inter de Milão %0AInter de Milão ${plac[52]} X ${plac[53]} Urawa Reds %0ARiver Plate ${plac[54]} X ${plac[55]} Monterrey %0AInter de Milão ${plac[56]} X ${plac[57]} River Plate %0AUrawa Reds ${plac[58]} X ${plac[59]} Monterrey %0A%0A-------------------- %0AGrupo F %0A-------------------- %0AFluminense ${plac[60]} X ${plac[61]} Borussia Dortmund %0AUlsan HD ${plac[62]} X ${plac[63]} Mamelodi Sundowns %0AMamelodi Sundowns ${plac[64]} X ${plac[65]} Borussia Dortmund %0AFluminense ${plac[66]} X ${plac[67]} Ulsan HD %0AMamelodi Sundowns ${plac[68]} X ${plac[69]} Fluminense %0ABorussia Dortmund ${plac[70]} X ${plac[71]} Ulsan HD %0A%0A-------------------- %0A`
  let textGH = `Grupo G %0A-------------------- %0AManchester City ${plac[72]} X ${plac[73]} Wydad Casablanca %0AAl-Ain ${plac[74]} X ${plac[75]} Juventus %0AJuventus ${plac[76]} X ${plac[77]} Wydad Casablanca %0AManchester City ${plac[78]} X ${plac[79]} Al-Ain %0AJuventus ${plac[80]} X ${plac[81]} Manchester City %0AWydad Casablanca ${plac[82]} X ${plac[83]} Al-Ain %0A%0A-------------------- %0AGrupo H %0A-------------------- %0AReal Madrid ${plac[84]} X ${plac[85]} Al-Hilal %0APachuca ${plac[86]} X ${plac[87]} RB Salzburg %0AReal Madrid ${plac[88]} X ${plac[89]} Pachuca %0ARB Salzburg ${plac[90]} X ${plac[91]} Al-Hilal %0ARB Salzburg ${plac[92]} X ${plac[93]} Real Madrid %0AAl-Hilal ${plac[94]} X ${plac[95]} Pachuca%0A%0A`
  let textI = `*1º Campeão:* ${campeao1} %0A*2º Campeão:* ${campeao2} %0A%0A*1º Artilheiro:* ${jogadorArt1}%0A*2º Artilheiro:* ${jogadorArt2}%0A%0A%0APix R$20,00: 19992481225`

  window.open(`https://wa.me/5519992481225?text=${text}${textAB}${textCD}${textEF}${textGH}${textI}`)
  paginaMundialdeClubes()
}

function paginaMundialdeClubes() {
  $(location).attr('href', '../html/mundialClubes2025.html')
}

