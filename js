/////////nombre.
function validarNombre(){
	var registroNombre = document.getElementById("nombre"); 
  var validarNombre = /^[a-zA-ZÀ]+$/;
	var errorNombre = document.getElementById("validardato");
  
  if( registroNombre.value == 0){
    registroNombre.classList.add("invalido");
    	return false; }
  
else if( validarNombre.test(registroNombre.value)){
		registroNombre.classList.remove("invalido");
		registroNombre.classList.add("valido");
		return true; }
 
  	else {
  registroNombre.classList.add("invalido");
errorNombre.innerHTML = "Solo acepta texto.";
		return false; }
	}

///hasta aquí bien.

////////contrauno.

function validarContra(){
	var registroContra = document.getElementById("contra");
	var validarContra = /^[\s\S]{8,}$/;
  
  if( registroContra.value == 0){
  registroContra.classList.add("invalido");
}
  else (validarContra.test(registroContra.value)) 
  {
	registroContra.classList.remove("invalido");
		registroContra.classList.add("valido");
		return true; }
}

////////////contrados.
function validarContra2(){
  var registroContra = document.getElementById("contra");
	var registroContra2 = document.getElementById("contra2");
  var errorContra2 = document.getElementById("confcontra");
  
 if( registroContra2.value == 0){
   registroContra2.classList.add("invalido");
}
  
else if ( registroContra.value != registroContra2.value ){
		registroContra2.classList.remove("invalido");
		registroContra2.classList.add("valido");
		return true; }


else {
		errorContra2.innerHTML = "Las contraseñas no coinciden.";
		registroContra2.classList.add("invalido");
return false; }
}

  //////// email
  
  function validarEmail(){
	var registroEmail = document.getElementById("email");
	var validarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if( registroEmail.value == 0){
		registroEmail.classList.add("invalido");
		return false;}
 
    
	else if( validarEmail.test(registroEmail.value) ){
		registroEmail.classList.remove("invalido");
		registroEmail.classList.add("valido");
		return true; }

	else {
		registroEmail.classList.add("invalido");
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
		return false; }
} 

///// telefono

 function validarTlf(){
  var registroTlf = document.getElementById("tlf");
  var validarTlf  = /^[09][0-9]{1,7}$/;
   
   if( registroTlf.value == 0){
		registroTlf.classList.add("invalido");
		return false;}
   
   else if( validarTlf.test(registroTlf.value) ){
		registroTlf.classList.remove("invalido");
		registroTlf.classList.add("valido");
		return true; }
 }
