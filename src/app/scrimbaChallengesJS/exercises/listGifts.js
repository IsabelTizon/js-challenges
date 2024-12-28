export function listGifts(str, prefix = '_') {
    console.log(`1)Hello list Gifts exercise!!`)  
  
    // PASO 1 CONVERT STR TO ARR: 
    // 1) str.split(''), 2) spread operator[...str], 3) Array.from(str),
    // const strArr= [...carta];
    const strArr = str.split(" ");
    console.log(`2) Str to Arr: ${strArr}`);

    // PASO 2 SUBSTRACT THE ITEMS STARTS WITH '_'FROM  THE ARRAY
    // const newStr = strArr.filter(item => item.startsWith('_') ? false : true)
    const newStr = strArr.filter(item => !item.startsWith(prefix)) // Si el item no empieza por el prifijo, en este caso en el par'ametro por defecto '_', lo incluimos en el nuevo String
    console.log(`3) Carta sin '_': ${newStr}`)

    // PASO 3 CONVERT ARR TO OBJ  AND COUNT THE NUMBER OF TIMES EACH GIFT APPEARS
    //El método .reduce() recorre todos los elementos de un array y, a medida que lo hace, va acumulando un valor (por ejemplo, un número, un objeto, un array, etc.) que se va modificando con cada elemento del array.
    const strObj = newStr.reduce((acc, item) => {
    // Si la palabra ya está en el objeto, sumamos 1 a su valor
    acc[item] = (acc[item] || 0) + 1;
    // Devolvemos el acumulador para la siguiente iteración
     return acc;
    }, {}); // El acumulador empieza como un objeto vacío

// PASO 4 RETURN THE RESULT AS AN ARRAY OF OBJECTS
// console.log(`4) Carta Obj: ${cartaObj}`); 
// Ese console.log nos da // 4) Carta Obj: [object Object]
// Esto es porque se está tratando de insertar el objeto directamente dentro de una cadena de texto, y cuando JavaScript convierte un objeto en una cadena, por defecto devuelve la cadena [object Object]
// Solución: Usar JSON.stringify
console.log(`4) Carta Obj: ${JSON.stringify(strObj)}`); // 4) Carta Obj: {"bici":2,"coche":2,"balón":1,"peluche":1}
return strObj;
}
