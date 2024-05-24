$(document).ready(function() {

	function limpa_formulário_cep() {
		 //Limpa valores do formulário de cep.
		$("#rua").val("");
		$("#bairro").val("");
		$("#cidade").val("");
		$("#uf").val("");
		
	}
	
	//Quando o campo cep perde o foco.
	$("#CEP").blur(function() {

		//Nova variável "cep" somente com dígitos.
		var cep = $(this).val().replace(/\D/g, '');

		//Verifica se campo cep possui valor informado.
		if (cep != "") {

			//Expressão regular para validar o CEP.
			var validacep = /^[0-9]{8}$/;

			//Valida o formato do CEP.
			if(validacep.test(cep)) {

				//Preenche os campos com "..." enquanto consulta webservice.
				$("#endereco").val("");
				$("#cidade").val("");
				$("#uf").val("");
				$("#bairro").val("");
			

				//Consulta o webservice viacep.com.br/
				$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

					if (!("erro" in dados)) {
						//Atualiza os campos com os valores da consulta.
						$("#endereco").val(dados.logradouro);
						$("#cidade").val(dados.localidade);
						$("#uf").val(dados.uf);
						$("#bairro").val(dados.bairro);
						CEP.setAttribute ("style", "border-color:green")
						endereco.setAttribute("style", "border-color:green")
						cidade.setAttribute("style", "border-color:green")
						uf.setAttribute("style", "border-color:green")
						bairro.setAttribute("style", "border-color:green")
						
					} //end if.
					else {
						//CEP pesquisado não foi encontrado.
						limpa_formulário_cep();
						alert("CEP não encontrado.");
						CEP.setAttribute ("style", "border-color:red")
						endereco.setAttribute("style", "border-color:red")
						cidade.setAttribute("style", "border-color:red")
						uf.setAttribute("style", "border-color:red")
						bairro.setAttribute("style", "border-color:red")
					}
				});
			} //end if.
			else {
				//cep é inválido.
			limpa_formulário_cep();
				CEP.setAttribute ("style", "border-color:red")
				endereco.setAttribute("style", "border-color:red")
				cidade.setAttribute("style", "border-color:red")
				uf.setAttribute("style", "border-color:red")
				bairro.setAttribute("style", "border-color:red")
				alert("Formato de CEP inválido.");
			}
		} //end if.
		else {
			//cep sem valor, limpa formulário.
			limpa_formulário_cep();
		}
	});
});
  


  function ajustaLoginSenha(v) {
    //Remove numeros
    v.value = v.value.replace(/\d+/g, '');
}

function maiuscula(texto) {
    texto.value = texto.value.toUpperCase();
  }

  function ajustaNumeros(v) {
    // Remove os caracteres não numéricos
    v.value = v.value.replace(/\D/g, "");
  }


$("#telefoneFixo").mask("+55(00)0000-0000")
$("#celular").mask("+55(00)00000-0000")
$("#CEP").mask("00.000-000")
$("#cpf").mask("000.000.000-00")


//email validador de acordo com @ e . //

email.addEventListener("keyup", () => {
    if (validatorEmail(email.value) !== true) {
      email.setAttribute("style", "border-color:red")
  
    } else {
      email.setAttribute("style", "border-color:green")
    }
  });
  
  function validatorEmail(email) {
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }






  //validação de CPF//

  function valida() {
	if (valida_cpf(document.getElementById('cpf').value)){
	    cpf.setAttribute ("style", "border-color:green")}
		
	else{
		//alert('CPF Inválido');
		cpf.setAttribute ("style", "border-color:red")
		alert ("CPF Inválido")}

}

function valida_cpf() {

var Cpf = cpf.value.replace(/\D/g, '');

		var Soma;
		var Resto;
		Soma = 0;
	
		//verifica numeros iguais
	  if (Cpf== "00000000000") return false;
	   if (Cpf=="11111111111") return false;
		if (Cpf=="22222222222") return false;
			if (Cpf=="33333333333") return false;
				if (Cpf=="55555555555") return false;
					if (Cpf=="66666666666") return false;
					if (Cpf=="77777777777") return false;
						if (Cpf=="88888888888") return false
							if (Cpf=="99999999999") return false;
							
	  

	//segunda verificação//

	  for (i=1; i<=9; i++) 
		  Soma = Soma + parseInt(Cpf.substring(i-1, i)) * (11 - i);
		 Resto = (Soma * 10) % 11;
	
		
		if ((Resto == 10) || (Resto == 11)){
			Resto = 0;

		}  

		if (Resto != parseInt(Cpf.substring(9, 10)) ){
			return false;
		} 
	
	  	Soma = 0;
		for (i = 1; i <= 10; i++) Soma = Soma + parseInt(Cpf.substring(i-1, i)) * (12 - i);
		Resto = (Soma * 10) % 11;
	
		if ((Resto == 10) || (Resto == 11)){
			Resto = 0;
		}  
			
		if (Resto != parseInt(Cpf.substring(10, 11) ) ) {
			return false;
		}else{
			return true;
		}
		
		
}

//validação de nome//

nome.addEventListener("keyup" , () => {
	if(nome.value.length <= 15){
	   nome.setAttribute ("style", "border-color:red")
	   
	
	} else{
		nome.setAttribute ("style", "border-color:green")
          }
})

//validação de materno//

nomeMaterno.addEventListener("keyup" , () => {
	if(nomeMaterno.value.length <= 15){
		nomeMaterno.setAttribute ("style", "border-color:red")

		
    } else{
		nomeMaterno.setAttribute ("style", "border-color:green")
          }
})

//validação de numero da rua ou apartamento//

numero.addEventListener("keyup" , () => {
	if(numero.value.length <= 0){
		numero.setAttribute ("style", "border-color:red")
		
    } else{
		numero.setAttribute ("style", "border-color:green")
          }
})

//validação login//

usuario.addEventListener("keyup" , () => {
	if(usuario.value.length <= 5){
		usuario.setAttribute ("style", "border-color:red")
		
    } else{
		usuario.setAttribute ("style", "border-color:green")
          }
})

//validação de celular//

celular.addEventListener("keyup", () => {
	if (celular.value.length <= 11) {
		celular.setAttribute("style", "color: red");
	    celular.setAttribute("style", "border-color: red");
	  
	} else {
		celular.setAttribute("style", "color: green");
	  
	celular.setAttribute("style", "border-color: green");
	  validphone = true;
	}
  });

  //validação de telefone-fixo//

  telefoneFixo.addEventListener("keyup", () => {
	if (telefoneFixo.value.length <= 12) {
		telefoneFixo.setAttribute("style", "color: red");
	    telefoneFixo.setAttribute("style", "border-color: red");
	  
	} else {
		telefoneFixo.setAttribute("style", "color: green");
	  
	telefoneFixo.setAttribute("style", "border-color: green");
	  validphone = true;
	}
  });

  //senha e confirmar senha//

senha.addEventListener ("keyup",()=>{
	if (senha.value.length <=7){
		senha.setAttribute("style", "border-color:red")
    } else{
		senha.setAttribute("style", "border-color:green")
	 }
})

confirmar.addEventListener ("blur",()=>{
	if (senha.value != confirmar.value ){
		confirmar.setAttribute("style", "border-color:red")
		alert("senhas precisam ser iguais")
    } else{
		confirmar.setAttribute("style", "border-color:green")
	 }
})

//Letras fica maiores//
function maiuscula(texto) {
    texto.value = texto.value.toUpperCase();
 
}


//DARK-MODE
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

   

// Aguarda até que o DOM esteja completamente carregado para garantir que todos os elementos da página estejam disponíveis
document.addEventListener('DOMContentLoaded', function () {
    // Obtém a referência para o ícone de olho pelo seu ID
    const showPasswordIcon = document.getElementById('showPassword');
    // Obtém a referência para o campo de senha pelo seu ID
    const senhaInput = document.getElementById('senha');
    // Obtém a referência para o campo de confirmação de senha pelo seu ID
    const confirmarInput = document.getElementById('confirmar');

    // Adiciona um ouvinte de evento de clique ao ícone de olho
    showPasswordIcon.addEventListener('click', function () {
        // Verifica se o tipo do campo de senha é 'password'
        if (senhaInput.type === 'password') {
            // Se o tipo for 'password', muda para 'text' para mostrar a senha
            senhaInput.type = 'text';
            confirmarInput.type = 'text'; // Também muda o campo de confirmação para 'text'
        } else {
            // Se o tipo for 'text', muda de volta para 'password' para ocultar a senha
            senhaInput.type = 'password';
            confirmarInput.type = 'password'; // Também muda o campo de confirmação para 'password'
        }
    });
});

