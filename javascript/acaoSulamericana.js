function apostarCopaBrasil() {
  // ============= COR x ACG =============
  // let cor1 = document.querySelector("#COR-F")
  // let corf = parseInt(cor1.value)
  // let acg1 = document.querySelector("#ACG-C")
  // let acgc = parseInt(acg1.value)

  let cor2 = document.querySelector("#COR-C")
  let corc = parseInt(cor2.value)
  let acg2 = document.querySelector("#ACG-F")
  let acgf = parseInt(acg2.value)

  // ============= FLU x FOR =============

  let flu1 = document.querySelector("#FLU-C")
  let fluc = parseInt(flu1.value)
  let for1 = document.querySelector("#FOR-F")
  let forf = parseInt(for1.value)

  let flu2 = document.querySelector("#FLU-F")
  let fluf = parseInt(flu2.value)
  let for2 = document.querySelector("#FOR-C")
  let forc = parseInt(for2.value)

  // ============= AMG x SAO =============

  let amg1 = document.querySelector("#AMG-F")
  let amgf = parseInt(amg1.value)
  let sao1 = document.querySelector("#SAO-C")
  let saoc = parseInt(sao1.value)

  let amg2 = document.querySelector("#AMG-C")
  let amgc = parseInt(amg2.value)
  let sao2 = document.querySelector("#SAO-F")
  let saof = parseInt(sao2.value)

  // ============= FLA x CAP =============

  // let fla2 = document.querySelector("#FLA-C")
  // let flac = parseInt(fla2.value)
  // let cap2 = document.querySelector("#CAP-F")
  // let capf = parseInt(cap2.value)

  let fla1 = document.querySelector("#FLA-F")
  let flaf = parseInt(fla1.value)
  let cap1 = document.querySelector("#CAP-C")
  let capc = parseInt(cap1.value)

  // ============= FIM =============

  let sou = document.querySelector("button")
  sou.setAttribute("data-target", "#meuModal")

  // let nome = prompt("Informe seu nome: ")

  $(document).ready(function () {
    $('#helloa').append(`<p style="text-align: center;"> ACG 2 X 0 COR <br> COR ${corc} X ${acgf} ACG <br> FOR ${forc} X ${fluf} FLU <br> FLU ${fluc} X ${forf} FOR <br> SAO ${saoc} X ${amgf} AMG <br> AMG ${amgc} X ${saof} SAO <br> FLA 0 X 0 CAP <br> CAP ${capc} X ${flaf} FLA <br> </p>`);

  });

  let stg = $('.modal')
  stg.css({
    "visibility": "visible"
  })
}

function acionarModal() {
  // ============= COR x ACG =============
  //  let cor1 = document.querySelector("#COR-F")
  //  let corf = parseInt(cor1.value)
  //  let acg1 = document.querySelector("#ACG-C")
  //  let acgc = parseInt(acg1.value)

  let cor2 = document.querySelector("#COR-C")
  let corc = parseInt(cor2.value)
  let acg2 = document.querySelector("#ACG-F")
  let acgf = parseInt(acg2.value)

  // ============= FLU x FOR =============

  let flu1 = document.querySelector("#FLU-C")
  let fluc = parseInt(flu1.value)
  let for1 = document.querySelector("#FOR-F")
  let forf = parseInt(for1.value)

  let flu2 = document.querySelector("#FLU-F")
  let fluf = parseInt(flu2.value)
  let for2 = document.querySelector("#FOR-C")
  let forc = parseInt(for2.value)

  // ============= AMG x SAO =============

  let amg1 = document.querySelector("#AMG-F")
  let amgf = parseInt(amg1.value)
  let sao1 = document.querySelector("#SAO-C")
  let saoc = parseInt(sao1.value)

  let amg2 = document.querySelector("#AMG-C")
  let amgc = parseInt(amg2.value)
  let sao2 = document.querySelector("#SAO-F")
  let saof = parseInt(sao2.value)

  // ============= FLA x CAP =============

  // let fla1 = document.querySelector("#FLA-F")
  // let flaf = parseInt(fla1.value)
  // let cap1 = document.querySelector("#CAP-C")
  // let capc = parseInt(cap1.value)

  let fla2 = document.querySelector("#FLA-C")
  let flac = parseInt(fla2.value)
  let cap2 = document.querySelector("#CAP-F")
  let capf = parseInt(cap2.value)

  // ============= FIM =============

  if (isNaN(corc) || isNaN(acgf) ||
    isNaN(forc) || isNaN(fluf) || isNaN(fluc) || isNaN(forf) ||
    isNaN(saoc) || isNaN(amgf) || isNaN(amgc) || isNaN(saof) ||
    isNaN(capc) || isNaN(flaf)) {
    alert("Favor preencher todos os resultados!")
  } else {
    apostarCopaBrasil()
  }
}


function whatsapp() {
  // $(location).attr('href', "https://wa.me/55019992481225")
  // ============= COR x ACG =============
  // let cor1 = document.querySelector("#COR-F")
  // let corf = parseInt(cor1.value)
  // let acg1 = document.querySelector("#ACG-C")
  // let acgc = parseInt(acg1.value)

  let cor2 = document.querySelector("#COR-C")
  let corc = parseInt(cor2.value)
  let acg2 = document.querySelector("#ACG-F")
  let acgf = parseInt(acg2.value)

  // ============= FLU x FOR =============

  let flu1 = document.querySelector("#FLU-C")
  let fluc = parseInt(flu1.value)
  let for1 = document.querySelector("#FOR-F")
  let forf = parseInt(for1.value)

  let flu2 = document.querySelector("#FLU-F")
  let fluf = parseInt(flu2.value)
  let for2 = document.querySelector("#FOR-C")
  let forc = parseInt(for2.value)

  // ============= AMG x SAO =============

  let amg1 = document.querySelector("#AMG-F")
  let amgf = parseInt(amg1.value)
  let sao1 = document.querySelector("#SAO-C")
  let saoc = parseInt(sao1.value)

  let amg2 = document.querySelector("#AMG-C")
  let amgc = parseInt(amg2.value)
  let sao2 = document.querySelector("#SAO-F")
  let saof = parseInt(sao2.value)

  // ============= FLA x CAP =============

  //  let fla2 = document.querySelector("#FLA-C")
  //  let flac = parseInt(fla2.value)
  //  let cap2 = document.querySelector("#CAP-F")
  //  let capf = parseInt(cap2.value)

  let fla1 = document.querySelector("#FLA-F")
  let flaf = parseInt(fla1.value)
  let cap1 = document.querySelector("#CAP-C")
  let capc = parseInt(cap1.value)

  // ================= FIM =================

  alert("NÃO SE ESQUECA DE FAZER O PIX: (19)992481225 \n Valor: R$ 5,00")
  let s = `APOSTA *FUTBR* - COPA DO BRASIL 2022%0A%0AACG 2 X 0 COR%0ACOR ${corc} X ${acgf} ACG%0AFOR ${forc} X ${fluf} FLU%0AFLU ${fluc} X ${forf} FOR%0ASAO ${saoc} X ${amgf} AMG%0AAMG ${amgc} X ${saof} SAO%0AFLA 0 X 0 CAP%0ACAP ${capc} X ${flaf} FLA`
  // window.open(`https://api.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  // window.open(`https://web.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  // window.open(`https://web.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  window.open(`https://wa.me/send?phone=55019992481225&text=${s}`)
}

function paginaBrasil() {
  $(location).attr('href', '../html/copaBrasil.html')
}

function popUP() {
  alert("Em construção...")
}