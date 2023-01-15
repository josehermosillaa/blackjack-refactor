import _ from 'underscore'

// export const miNombre = 'Fernando';
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta  Ejemplo tipos = ['C', 'D', 'H', 'S'];
 * @param {Array<string>} tiposEspeciales Ejemplo especiales = ['A', 'J', 'Q', 'K'];
 * @returns {Array<string>} retorna un nuevo arreglo de cartas
 */
//los arreglos en general son genericos, debo especificar
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('Tipos de carta es obligatorio, como un arreglo de String');
    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('Tipos especiales es obligatorio, como un arreglo de String');


    let deck = []
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}
// export default crearDeck;