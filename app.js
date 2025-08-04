// Objeto que contiene otros objetos y arrays (se ha hecho así con objetos para poder ordenar por géneros)
// Probar más adelante a hacerlo con un array que sólo contenga objetos
const mainObjDomainNameParts = {
    arrayPronoun: ["el", "la", "los", "las"],

    objNoun: {
        masc: ["ordenador", "coche", "vaso", "equipo"],
        fem: ["casa", "mesa", "silla", "compañia"],
        neutral: ["robot"],
        fluid: ["niñ", "perr", "gat"] //añadir array con vocales a concatenar 
    },

    objAdj: {
        fluid: ["pequeñ", "bonit", "fuert"],
        neutral: ["grande", "inteligente", "brillante", "naranja", "triste"]
    },

    arrayDomain: [".com", ".es", ".net", ".eu", ".info"]


};

function funRandomElement(arrayParam) {
    const index = Math.floor(Math.random() * arrayParam.length);
    return arrayParam[index];
}

function funGenerateDomainName(mainObjParam){
    let fullName ="";
    for (let key in mainObjParam){
        const value = mainObjParam[key];
            if (Array.isArray(value)){ //Método comprueba si el valor pasado es un array https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
                const random = funRandomElement(value);
                fullName = fullName + random;
            }
            else if (typeof value === 'object' && value !== null){
                const subkey = Object.keys(value);   // Método estático Object.keys() devuelve un ARRAY con las partes del objeto https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
                const randomSubkey = funRandomElement(subkey)
                const insideArray = value[randomSubkey];
                const palabra = funRandomElement(insideArray);
                //Añadir condición si sale él -> palabra masc terminada en  (y así con las demás condiciones)
                   // if (funRandomElement(mainObjDomainNameParts.arrayDomain) =! a)
                        fullName = fullName + palabra;
            }
    }
    return fullName;
}

console.log(funRandomElement(mainObjDomainNameParts.arrayDomain)); //Muestra el elemento del array específico elegido de forma random
console.log(mainObjDomainNameParts); // Muestra el objeto entero
console.log(funGenerateDomainName(mainObjDomainNameParts)); //Muestra el dominio ya generado aleatoriamente

function getDomain(){
  const domain = funGenerateDomainName(mainObjDomainNameParts);
  document.getElementById("domain").innerText = domain;
};