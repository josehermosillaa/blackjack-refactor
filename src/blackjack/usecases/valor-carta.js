/**
 * dependiendo del valor de string que se ingrese, se obtiene el valor numerico de la carta
 * @param {string} carta 
 * @returns {int}
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}