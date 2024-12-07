export function countChar(str) {
	console.log(`1) Hello countChar exercise!!!!`);
	console.log(str.split(""));

	/* .reduce()Ñ video en youtube explicando con números: https://www.youtube.com/watch?v=UhllQFycppE

	el metodo reduce generalmente se resuelve con una funcion flecha
	.reduce(() => {
		/ código
	})
	y va a tener diferentes paramentros

	PARÁMETROS más importantes
	.reduce((acumulador, currentValue) => {
			/ código
		})		

	💡 acumulador: almacena el valor que nos vaya quedando de ejecutar la operacion que pasemos entre llaves
	💡 currentValue: el valor del array en el cuál está parada nuestra función

	PARÁMETROS MENOS IMPORTANTES
	hay dos parametors más que se utilizan menos que son:
	.reduce((acumulador, currentValue, currentIndex, array) => {
			/ código
		})	
	💡 currentIndex: que nos va a decir la posición del valor del array que actualmente tenemos en currentValue
	💡array: nos muestra el array que estamos operando

	CÓDIGO
	ÚLTIMO PARÁMETRO

	.reduce((acumulador, currentValue) => {
			/ código
		}, initialValue)
		
	💡 initialValue: valor inicial para que empiece a correr nuestra función de reduce, si no sle pasamos nada va a empezar el valor que se encuentra en la posicion 0 de nuestro array
	*/
	return str.split("").reduce((counts, char) => {
		counts[char] = (counts[char] || 0) + 1;

		return counts;
	}, {});
}
