function sair() {
	localStorage.removeItem("token")
	localStorage.removeItem("userLogado")
	window.location.href="login.html"
}

sair()