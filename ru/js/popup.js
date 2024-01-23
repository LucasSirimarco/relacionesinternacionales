document.addEventListener('DOMContentLoaded', function () {
	var overlaypop = document.getElementById('overlaypop');
	var popup = document.getElementById('popup');

	overlaypop.classList.add('active');
	popup.classList.add('active');

	const btnCerrarPopup = (e) => {
		e.preventDefault();
		overlaypop.classList.remove('active');
		popup.classList.remove('active');
	};

	var btnCerrar = document.getElementById('btn-cerrar-popup');
	btnCerrar.addEventListener('click', btnCerrarPopup);
});