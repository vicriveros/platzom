const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
	it('Si la palabra termina en ar, se le quitan los 2 ultimos caracteres', function(){
		const translation = platzom('programar')
		expect(translation).to.equal('program')
	})

	it('si inicia con Z, se le agrega pe al final', function(){
		const translation = platzom('Zorro')
		expect(translation).to.equal('Zorrope')	
	})

	it('si la palabra tiene 10 o mas letras divir la palabra por la mitad con un guion medio', function(){
		const translation = platzom('abecedario')
		expect(translation).to.equal('abece-dario')
	})

	it('si es polindromo, se devuelve la misma palabra en minusculas y mayusculas', function(){
		const translation = platzom('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})
})