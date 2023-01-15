
/**
 * se envia el mazo de cartas, como arreglo de string para que se recoja la ultima carta del mazo
 * @param {Array<string>} deck un arreglo de strings
 * @returns {string} retorna la ultima carta del mazo
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
