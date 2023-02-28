

document.getElementById("boton_unc").addEventListener("click", function () {
	console.log("https://www.unc.edu.ar/");
	window.location.assign("https://www.unc.edu.ar/");
	document.getElementById("anexos").innerHTML = "https://www.unc.edu.ar/";
});

document.getElementById("boton_fcefyn").addEventListener("click", function () {
	console.log("https://fcefyn.unc.edu.ar/");
	window.location.assign("https://fcefyn.unc.edu.ar/");
	document.getElementById("anexos").innerHTML = "https://fcefyn.unc.edu.ar/";
});

document.getElementById("boton_inicio").addEventListener("click", function () {
	document.getElementById("anexos").innerHTML = "Información y Opciones complementarias - hacer Clic en los botones.";
});

document.getElementById("boton_color").addEventListener("click", function () {
	document.body.style.backgroundColor = "#503705";
});

document.getElementById("boton_default").addEventListener("click", function () {
   document.body.style.backgroundColor = "#F9D496";   
});