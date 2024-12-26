export function listGifts() {
    console.log(`1)Hello list Gifts exercise!!`)  
    
    const carta = 'bici coche balón _playstation bici coche peluche';
    // PASO 1 CONVERT STR TO ARR: 
    // 1) str.split(''), 2) spread operator[...str], 3) Array.from(str),
    // const cartaArr= [...carta];
    const cartaArr = carta.split(" ");
    console.log(`2) Str to Arr: ${cartaArr}`);

     // PASO 2 SUBSTRACT THE ITEMS STARTS WITH '_'FROM  THE ARRAY
    const newCarta = cartaArr.filter(item => item.startsWith('_') ? false : true)
    console.log(`3) Carta sin '_': ${newCarta}`)

    // PASO 3 CONVERT ARR TO OBJ  AND COUNT THE NUMBER OF TIMES EACH GIFT APPEARS
    //El método .reduce() recorre todos los elementos de un array y, a medida que lo hace, va acumulando un valor (por ejemplo, un número, un objeto, un array, etc.) que se va modificando con cada elemento del array.
    const cartaObj = newCarta.reduce((acc, item) => {
    // Si la palabra ya está en el objeto, sumamos 1 a su valor
    acc[item] = acc[item] || 0 + 1;
    // Devolvemos el acumulador para la siguiente iteración
     return acc;
    }, {}); // El acumulador empieza como un objeto vacío

// PASO 4 RETURN THE RESULT AS AN ARRAY OF OBJECTS
// console.log(`4) Carta Obj: ${cartaObj}`); 
// Ese console.log nos da // 4) Carta Obj: [object Object]
// Esto es porque se está tratando de insertar el objeto directamente dentro de una cadena de texto, y cuando JavaScript convierte un objeto en una cadena, por defecto devuelve la cadena [object Object]
// Solución: Usar JSON.stringify
console.log(`4) Carta Obj: ${JSON.stringify(cartaObj)}`); // 4) Carta Obj: {"bici":2,"coche":2,"balón":1,"peluche":1}
return cartaObj;
}
