document.getElementById("enviar").addEventListener("click", validaForm)

function validaForm(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && getElementById("telefone").value != ""){
  alert("Prontinho! Você reberá o conteúdo no seu email!")
  }else{
  alert("Ops! Parece que você não preencheu corretamente os campos de Nome e e-mail")
  }
}
