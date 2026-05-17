let actual_index = 0
let word_list = [
  "sagaz", "amago", "negro", "exito", "termo", "nobre", "senso", "afeto", "algoz", "plena",
  "fazer", "vicio", "audaz", "casal", "obice", "inato", "vigor", "aquem", "secao", "visao",
  "poder", "ideia", "creme", "assim", "sobre", "forma", "lugar", "mundo", "jovem", "tempo",
  "ordem", "corpo", "uniao", "texto", "geral", "causa", "autor", "grupo", "linha", "campo",
  "ponto", "valor", "forca", "porta", "noite", "vapor", "justo", "certo", "unido", "claro",
  "breve", "longe", "grato", "falso", "cheio", "digno", "banco", "preco", "festa", "chuva",
  "vento", "terra", "pedra", "fruta", "bicho", "carro", "navio", "aviao", "porto", "ponte",
  "carta", "livro", "folha", "papel", "bacia", "garfo", "fogao", "porta", "grito", "porra",
  "pardo", "verde", "peixe", "peito", "preto", "praia", "areia", "morro", "serra", "valer",
  "gruta", "firme", "largo", "bravo", "solto", "tarde", "gordo", "magro", "fundo", "baixo"
]
let random = Math.floor(Math.random() * word_list.length);
let actual_word = word_list[random]
let win_fail = ""


function input_text() {
    word_inputed = document.getElementById('input_text').value.toLowerCase()

    if (word_inputed.length == 5) {
        for (let i = 0; i<5; i++) {
            index = document.getElementById(`word_box_${actual_index}`).innerText = `${word_inputed[i].toUpperCase()}`

            if (word_inputed[i] == actual_word[i]) {
                document.getElementById(`word_box_${actual_index}`).style.backgroundColor = `green`
            } else if (actual_word.includes(word_inputed[i])) {
                document.getElementById(`word_box_${actual_index}`).style.backgroundColor = `yellow`
            }

            actual_index++
        }

        if (word_inputed == actual_word) {
                win_fail = "WIN"
                alert(`Corret awnser is: ${actual_word}\nYOU ${win_fail}`)
                actual_index = 0
                end_game()
            }

        if (actual_index >= 29) {
            if (word_inputed == actual_word) {
                win_fail = "WIN"
            } else {
                win_fail = "FAIL"
            }

            alert(`Corret awnser is: ${actual_word}\nYOU ${win_fail}`)
            actual_index = 0
            end_game()
        }
    }
}

function start_game() {
    random = Math.floor(Math.random() * word_list.length);
    actual_word = word_list[random]
    
    let game_screen = document.getElementById('game_section').innerHTML = `<section class="game_section_1">
                <div class="word_box" id="word_box_0"></div>
                <div class="word_box" id="word_box_1"></div>
                <div class="word_box" id="word_box_2"></div>
                <div class="word_box" id="word_box_3"></div>
                <div class="word_box" id="word_box_4"></div>
            </section>

            
            <section class="game_section_1">
                <div class="word_box" id="word_box_5"></div>
                <div class="word_box" id="word_box_6"></div>
                <div class="word_box" id="word_box_7"></div>
                <div class="word_box" id="word_box_8"></div>
                <div class="word_box" id="word_box_9"></div>
            </section>


            <section class="game_section_1">
                <div class="word_box" id="word_box_10"></div>
                <div class="word_box" id="word_box_11"></div>
                <div class="word_box" id="word_box_12"></div>
                <div class="word_box" id="word_box_13"></div>
                <div class="word_box" id="word_box_14"></div>
            </section>

            <section class="game_section_1">
                <div class="word_box" id="word_box_15"></div>
                <div class="word_box" id="word_box_16"></div>
                <div class="word_box" id="word_box_17"></div>
                <div class="word_box" id="word_box_18"></div>
                <div class="word_box" id="word_box_19"></div>
            </section>

            <section class="game_section_1">
                <div class="word_box" id="word_box_20"></div>
                <div class="word_box" id="word_box_21"></div>
                <div class="word_box" id="word_box_22"></div>
                <div class="word_box" id="word_box_23"></div>
                <div class="word_box" id="word_box_24"></div>
            </section>

            <section class="game_section_1">
                <div class="word_box" id="word_box_25"></div>
                <div class="word_box" id="word_box_26"></div>
                <div class="word_box" id="word_box_27"></div>
                <div class="word_box" id="word_box_28"></div>
                <div class="word_box" id="word_box_29"></div>
            </section>`
    
}

function end_game() {
    start_game()
}
