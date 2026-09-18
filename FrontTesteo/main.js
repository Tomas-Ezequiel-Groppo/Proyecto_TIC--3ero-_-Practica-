console.log("Hola")
function profilesave(user){
    return fetch("/saveProfile" , {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(user)
    })
    .then(res => res.json());
}

button.addEventListener("click" ,() => {
  console.log("Mundo")
  const nuevoUsuario = {
    username:username.value,
    password:password.value,
  }
  profilesave(nuevoUsuario).then(()=>{
    alert("perfil guardado")
  }) 
  
});
buttonL.addEventListener("click" ,() => {
  console.log("Gente")
  let n=0;

  
});