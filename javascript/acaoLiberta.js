function empateLiberta() {
  let stg = $('#meuModalB')
  stg.css({
    "visibility": "visible"
  })
}
/* ================================================ */
/* ============= APOSTAR LIBERTADORES ============= */
/* ================================================ */
function apostarLibertadores() {

  // ============= EST x CAP =============
  let fla1 = document.querySelector("#FLA-C")
  let fla = parseInt(fla1.value)
  let cap1 = document.querySelector("#CAP-F")
  let cap = parseInt(cap1.value)



  let sou = document.querySelector("button")
  sou.setAttribute("data-target", "#meuModal")

  if (fla == cap) {
    $(document).ready(function () {
      $('#helloa').append(`<p style="text-align: center;"> FLA ${fla} X ${cap} CAP <br>Campeão: ${camp} </p>`);
    });
  } else {
    $(document).ready(function () {
      $('#helloa').append(`<p style="text-align: center;"> FLA ${fla} X ${cap} CAP <br> </p>`);
    });
  }

  let stg = $('#meuModalA')
  stg.css({
    "visibility": "visible"
  })
}


/* ================================================ */
/* ==================== POP-UP'S  ================= */
/* ================================================ */
// var x = document.querySelectorAll('input')
function habilitarBotao() {

  var x = document.querySelectorAll('input')

  for (let i = 0; i < 4; i++) {
    if (x[i].checked) {
      console.log(`Flegado`)
      let stg = $('#botaoConf')
      stg.css({
        "visibility": "visible"
      })

      // console.log(`Flegado: ${x[i].value}`)
      // camp = x[i].value
    }
  }
}


/* ================================================ */
/* =============== CAPTURAR CAMPEÃO =============== */
/* ================================================ */
function capturaCampeao() {

  var x = document.querySelectorAll('input')

  for (let i = 0; i < 4; i++) {
    if (x[i].checked) {
      console.log(`Flegado: ${x[i].value}`)
      camp = x[i].value
    }
  }

  let stg = $('#botaoConf')
  stg.css({
    "visibility": "hidden"
  })

  let stgb = $('#meuModalB')
  stgb.css({
    "visibility": "hidden"
  })

  apostarLibertadores()
}



/* ================================================ */
/* ================ ACIONAR MODAL ================= */
/* ================================================ */
function acionarModal() {

  let fla1 = document.querySelector("#FLA-C")
  let fla = parseInt(fla1.value)

  let cap1 = document.querySelector("#CAP-F")
  let cap = parseInt(cap1.value)



  if (isNaN(fla) || isNaN(cap)) {
    alert("Favor Inserir um placar válido!")
  } else if (fla == cap) {
    empateLiberta()
    // apostarLibertadores()

  } else {
    apostarLibertadores()
  }
}



/* ================================================ */
/* ==================== WHATSAPP ================== */
/* ================================================ */
function whatsapp() {
  // $(location).attr('href', "https://wa.me/55019992481225")
  // ============= EST x CAP =============
  let fla1 = document.querySelector("#FLA-C")
  let fla = parseInt(fla1.value)
  let cap1 = document.querySelector("#CAP-F")
  let cap = parseInt(cap1.value)

  // alert(`O Campeão será: ${camp}`)
  // ============= FIM =============

  if (fla == cap) {
    alert("NÃO SE ESQUECA DE FAZER O PIX: (19)992481225 \nValor: R$ 5,00")
    let text = `APOSTA *FUTBR* - FINAL DA COPA LIBERTADORES 2022%0A%0A*FLA* ${fla} X ${cap} *CAP*%0A*Campeão:* ${camp}%0APix: 19992481225`
    window.open(`https://wa.me/5519992481225?text=${text}`)
    paginaLiberta()
  }
  alert("NÃO SE ESQUECA DE FAZER O PIX: (19)992481225 \nValor: R$ 5,00\nA msg precisa ser enviada para o Whatsapp para validação.")
  let text = `APOSTA *FUTBR* - FINAL DA COPA LIBERTADORES 2022%0A%0A*FLA* ${fla} X ${cap} *CAP*%0APix: 19992481225`

  window.open(`https://wa.me/5519992481225?text=${text}`)
  paginaLiberta()
}


/* ================================================ */
/* ================= PÁGINA LIBERTA =============== */
/* ================================================ */
function paginaLiberta() {
  $(location).attr('href', '../html/libertadores.html')
}


/* ================================================ */
/* ==================== POP-UP'S  ================= */
/* ================================================ */
function popUP() {
  alert("Em Breve...")
}

function popUP2() {
  alert("Encerrado!")
}