const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

function entrar(){
	let usuario = document.querySelector("#usuario")
	let labelUsuario = document.querySelector("#labelUsuario")

	let senha = document.querySelector("#senha")
	let labelSenha = document.querySelector("#labelSenha")

	let msgError = document.querySelector("#msgError")
	let listaUser = []

	let userValid = {
		nome: "",
		usuario: "",
		senha: ""
	}

	listaUser = JSON.parse(localStorage.getItem("listaUser"))

	listaUser.forEach((item) => {
		if(usuario.value == item.userCad && senha.value == item.senhaCad){
			userValid = {
				nome: item.nomeCad,
				user: item.userCad,
				senha: item.senhaCad
			}
		}
	})

	if(usuario.value == userValid.user && senha.value == userValid.senha){

		modal.showModal()
		setTimeout(function(){
        location.href = "logado.html";
        }, 5000);
		
	
		let token = Math.random().toString(16).substr(2)
		localStorage.setItem("token", token)

		localStorage.setItem("userLogado", JSON.stringify(userValid))

		
		let userLogado = JSON.parse(localStorage.getItem("userLogado"))

		let logado = document.querySelector("#logado")

		logado.innerHTML = `Bem Vindo ${userLogado.nome}`
		
	} else {
		userLabel.setAttribute("style", "color: red")
		usuario.setAttribute("style", "border-color: red")
		senhaLabel.setAttribute("style", "color: red")
		senha.setAttribute("style", "border-color: red")
		msgError.setAttribute("style", "display: block")
		msgError.innerHTML = "Usuario ou Senha incorretos"
		usuario.focus()
	}
}

