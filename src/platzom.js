export default function platzom(str) {
	let traduccion = str
	//si la palabra termina en ar, se le quitan los 2 ultimos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		traduccion=str.slice(0,-2)
	}

	//si inicia con Z, se le agrega pe al final
	if (str.toLowerCase().startsWith('z')) {
		traduccion =str +'pe'

	}

	//si la palabra tiene 10 o mas letras divir la palabra por la mitad con un guion medio
	const length = traduccion.length
	if (length >=10) {
		const mitad1 = traduccion.slice(0, Math.round(length/2))
		const mitad2 = traduccion.slice(Math.round(length/2))
		traduccion = `${mitad1}-${mitad2}`
	}

	//si es polindromo, se devuelve la misma palabra en minusculas y mayusculas
	const reverse = (str) => str.split('').reverse().join('')

	function minMay (str){
		let traduccion = ''
		let capitalize = true
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			traduccion += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize

		}
		return traduccion
	}

	if (str == reverse(str)) {
		return minMay(str)
	}
	return traduccion
}
