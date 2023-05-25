// ------------formularrio de contacto----------------
// Obtener el formulario
const formulario = document.querySelector("form");

// Agregar el evento submit al formulario
formulario.addEventListener("submit", function (event) {
	event.preventDefault(); // Evitar que el formulario se envíe automáticamente

	// Obtener los valores de los campos
	const nombre = formulario.nombre.value.trim();
	const apellido = formulario.apellido.value.trim();
	const email = formulario.email.value.trim();
	const mensaje = formulario.mensaje.value.trim();

	// Validar los campos
	if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
		// Mostrar mensaje de validación
		document.getElementById("validacion").textContent =
			"Todos los campos son obligatorios";
	} else {
		// Enviar el formulario
		formulario.submit();
	}
});

// Obtener todos los botones
const botones = document.querySelectorAll(".button");

// Agregar la función de manejo de eventos a cada botón
botones.forEach((boton) => {
	boton.addEventListener("click", function () {
		const redSocial = this.querySelector("span").textContent.toLowerCase();

		// Realizar la acción correspondiente según la red social seleccionada
		switch (redSocial) {
			case "facebook":
				// Acción para Facebook
				window.open("https://www.facebook.com/", "_blank");
				break;
			case "twitter":
				// Acción para Twitter
				window.open("https://www.twitter.com", "_blank");
				break;
			case "whatsapp":
				// Acción para WhatsApp
				window.open("https://api.whatsapp.com/send?phone=3464573869", "_blank");
				break;
			case "telefono":
				// Acción para el teléfono
				window.open("tel:+3464573869", "_blank"); // Reemplaza +3464573869 con tu número de teléfono
				break;
			case "instagram":
				// Acción para Instagram
				window.open("https://www.instagram.com", "_blank");
				break;
			default:
				break;
		}
	});
});

//api datos

function httpGetAsync(url, callback) {
	const xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
			callback(xmlHttp.responseText);
	};
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

const url =
	"https://ipgeolocation.abstractapi.com/v1/?api_key=37ceec476b0a4646a2b1dfd771b557c4";

httpGetAsync(url, function (response) {
	const data = JSON.parse(response);
	const combinedDataElement = document.getElementById("combined-data");

	combinedDataElement.textContent = `IP: ${data.ip} | Country: ${data.country} | City: ${data.city} | Region: ${data.region}`;
});
