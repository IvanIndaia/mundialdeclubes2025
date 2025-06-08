let listaResultado = ['HOL', 2, 1, 'BRA' ]

let listaApostaIvan = ['HOL', 2, 1, 'BRA' ]


// listaResultado.forEach(e => {
//     console.log(e)
// });

// listaApostaIvan.forEach(e => {
//     console.log(e)
// });

let A1 = listaApostaIvan[1]
let A2 = listaApostaIvan[2]

let R1 = listaResultado[1]
let R2 = listaResultado[2]

if (A1 === R1 && A2 === R2){
    console.log('Acertou o Placar!')
}
