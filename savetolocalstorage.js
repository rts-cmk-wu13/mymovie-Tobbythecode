/**
 * 
 * @typedef {string | number | boolean | object | anya[]} localStorageData - value
 */

/**
 * 
 * 
 * @param {string} key 
 * @param {string | number | boolean | object | anya[]} value 
 * @returns {string}
 */

function savetolocalstorage(key, value) {

    localStorage.setItem(key, JSON.stringify(value))
    return "Data was saved with the key" + key
}

/**
 * 
 * 
 * @param {string} key 
 * @param {string | number | boolean | object | anya[]} 
 *
 */
function readFromLocalStorage(key){

    return JSON.parse(localStorage.getItem(key))
}


function deleteFromLocalStorage(key){

    localStorage.removeItem(key)
    return " the element with key " + key + " was deleted";
}