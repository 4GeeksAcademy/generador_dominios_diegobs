//Crear un objeto que contenga arrays con TODAS las partes de la excusa: 
//  objeto --> arrayQuien --> [perro, gato, etc]
//         --> arrayAccion --> [se tropezó con, me mordió, etc]
//         --> arrayQue --> [mi coche, etc]
//         --> arrayCuando --> [mientras dormía, por la mañana, etc]                                                                 

// OBJETO que contiene ARRAYS (simplificar a arrays dentro de array?)
const objFullExcuse = {
    arrayWho: ['Un perro ', 'Una vieja ', 'Donald Trump ', 'El vecino de arriba ','Elon Musk ', 'Pedro Sánchez ','Ibai Llanos'],
    arrayAction: ['mordió ', 'se comió ', 'explotó '],
    arrayWhat: ['las Islas Canarias ','el mercado de valores, provocando así una crisis global económica ', 'mi casa ', 'mi coche ', 'la caja de Pandora '],
    arrayWhen: ['de camino al trabajo.', 'mientras dormía.']
};

// Qué funciones necesito? --> Una que genere un número aleatorio del array ------ Math.random()
//                         --> Una que genere la propia excusa recorriendo el objeto
//                         --> Una que coloque la excusa en el html

// Función index random del array
function randomArrayElement(arrayParam) {
    const index = Math.floor(Math.random() * arrayParam.length);
    return arrayParam[index];
}
/* console.log(randomArrayElement(objFullExcuse.arrayWho));
console.log(randomArrayElement(objFullExcuse.arrayAction));
console.log(randomArrayElement(objFullExcuse.arrayWhat));
console.log(randomArrayElement(objFullExcuse.arrayWhen)); */
//--------------------------------------------------------------------------------

// Función que genera la excusa, que utilice el elemento random generado por la función randomArrayElement
function generateExcuse(objParam){
    let fullPhrase ="";
    for (let key in objParam){
        let randomPart = randomArrayElement(objParam[key]);
        fullPhrase = fullPhrase + randomPart;
    }
    return fullPhrase;
}
/* let excuse = generateExcuse(objFullExcuse);
console.log(excuse); */

// Función llamar excusa creada y añadirla al html
function callExcuse(){
  const excuse = generateExcuse(objFullExcuse);
  document.getElementById("excuse").innerText = excuse;
}

window.onload = function () {
  callExcuse();
};