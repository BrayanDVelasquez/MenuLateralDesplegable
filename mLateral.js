document.addEventListener('DOMContentLoaded', () =>{  // Cuando cargue el contenido de nuestro sitio web

	var btnAbrir = document.getElementById('btnAbrir');
	var btnCerrar = document.getElementById('btnCerrar');
	var fondoMenuL = document.getElementById('fondo');
	var menuLateral = document.querySelector('.menuLateral');

	btnAbrir.addEventListener('click', abrirMenuL);
	btnCerrar.addEventListener('click', cerrarMenuL);
	fondoMenuL.addEventListener('click', cerrarMenuL);

	function abrirMenuL(){
	    menuLateral.style.left = 0;
	   fondoMenuL.style.setProperty('display', "block");
	}

	function cerrarMenuL(){
	    menuLateral.style.left = "-1000px";
	   fondoMenuL.style.setProperty('display', "none");
	}

})

