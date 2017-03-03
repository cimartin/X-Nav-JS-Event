var pantalla = document.getElementById('pantalla');
var color = document.getElementById('color');

color.addEventListener("input", function(){
	pantalla.style.backgroundColor = this.value;
});