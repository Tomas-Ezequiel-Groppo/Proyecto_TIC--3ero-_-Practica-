const express = require('express');
const app= express()
const puerto=5237;

app.use(express.json());

let profileID=0;

button.addEventListener("click",() => {
    if(username.value="pepito"){
        profileID=30;
        alert("Hola Pepito");
    }
    else if (username.value="juansito"){
        profileID=31;
        alert("Hola Juansito");
    }
    else if (username.value="santino"){
         profileID=32;
         alert("Hola Santino");
    }
    else{
        profileID=0;
        alert("¿Como hiciste para romper un multiple-choice");
    }
})

app.listen(puerto, () =>{
    console.log("Todo bien. El testeo está en posición de arrancar");
});
