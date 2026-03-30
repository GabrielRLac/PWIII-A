import { useState } from "react"

export default function Data(){

    // Guarda a lista d evalores digitados pelo usuário
    // Peerceba que o estado é inicializado como um Array[] vazio,
    // pois a lista começa sem nenhum valor.
    const [listaDeValores, setListaDeValores] = useState([])

    // Guarda o valor atual do campo de texto
    // O estado é guardado como uma string vazia,
    // pois o campo começa sem nenhum texto.
    const [texto, setTexto] = useState('')



    return (
        <div>
            <h1>Dados</h1>
            <input type="text"
            placeholder="Digite Algo..." 
            value={texto}
            onChange={
                (evento) => setTexto(
                    evento.target.value //pega o valor do alvo do evento que acabou de mudar
                    // (evento:setTexto; alvo:input; valor:o que foi mudado/digitado)
                )
            }
            />

            <input type="button"
            value="adicionar" />

            <p>
                Aqui estão os dados
            </p>
        </div>
    )
}