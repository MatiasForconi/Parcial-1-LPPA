function validar(){
  var username, userlastname, useremail, age, gender, interest, country,
  comentary;
  username = document.getElementById("username").value;
  userlastname = document.getElementById("userlastname").value;
  useremail = document.getElementById("useremail").value;
  age = document.getElementById("age").value;
  gender = document.getElementById("gender").value;
  interest = document.getElementById("interest").value;
  country = document.getElementById("country").value;
  comentary = document.getElementById("comentary").value;


if (username === "" ||userlastname === "" || useremail === "" || age === "" ||
gender === "" || interest === "" || country === "" || comentary === ""){
  alert("Los campos son obligatorios");
  return false;
}
else if(username.length < 3) {
  alert("El nombre debe tener mas de 3 caracateres");
  return false;
}
else if(userlastname.length < 3) {
  alert("El apellido debe tener mas de 3 caracateres");
  return false;
}
else if(useremail.length > 20) {
  alert("El correo es muy largo");
  return false;
}
else if(age > 100) {
  alert("La edad no esta permitida");
  return false;
}

else if (gender.checked){
  alert("Debe seleccionar una opcion sobre el genero");
  return false;
}
else if(interest.checked){
  alert("Debe seleccionar un tema de interes");
  return false;
}
else if (comentary.length > 100);
alert("El comentario es muy corto");
return false;
}