import fs from 'fs'

const jsontxtcompleto : string = fs.readFileSync("src/main.json", "utf-8");
const jsonjsoncompleto : Profile[] = JSON.parse(jsontxtcompleto);
const archivojson = 'src/main.json';




type Profile = {username:string ; password:string ; profileID:number};

let perfil1 : Profile = {
    username: "xXJuanelcrackXx",
    password : "odioatodos",
    profileID : 12,
}

let perfil2 : Profile = {
    username: "Miguelprogamer235215",
    password : "The_special_one",
    profileID : 23,
}

let perfiles : Profile[] = [];

let n : string = "hola";
let m : string = "HolaMundo";
let o : number = 24;

perfiles.push(perfil1);
perfiles.push(perfil2);

let perfil3 : Profile = {
    username: n,
    password: m,
    profileID: o,
}
let perfil4  : Profile = {
    username : "oirgneoiadngroirdsn",
    password : "oerfbesnpobgivesoioerrbveoiu",
    profileID : 25,
}
let perfil5 : Profile = {
    username : "Ernesto",
    password: "amimgoDeInsomniac",
    profileID : 27,
}

console.log(jsontxtcompleto);
console.log(jsonjsoncompleto);

let a : number = 0;

while (a<jsonjsoncompleto.length){
    console.log(jsonjsoncompleto[a]?.username);
    a++;
}

jsonjsoncompleto.push(perfil5)

let jsonnuevo = JSON.stringify(jsonjsoncompleto, null, 1);
fs.writeFileSync(archivojson, jsonnuevo);

a=0;

console.log("------------------------------");

while (a<jsonjsoncompleto.length){
    console.log(jsonjsoncompleto[a]?.username);
    a++;
}
console.log("------------------------------");

console.log(jsonjsoncompleto.find((item) => item.profileID===27)?.username)

let newProfileList = jsonjsoncompleto.filter((item) => item.profileID !==27);

jsonnuevo= JSON.stringify(newProfileList, null, 1);

fs.writeFileSync(archivojson, jsonnuevo);

console.log("------------------------------");

a=0;

while (a<newProfileList.length){
    console.log(newProfileList[a]?.username);
    a++;
}


