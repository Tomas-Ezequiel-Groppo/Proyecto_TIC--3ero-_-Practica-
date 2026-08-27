import fs from 'fs'

const jsontxtcompleto : string = fs.readFileSync("src/main.json", "utf-8");
const jsonjsoncompleto : Profile[] = JSON.parse(jsontxtcompleto);




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

console.log(jsontxtcompleto);
console.log(jsonjsoncompleto);

console.log(jsonjsoncompleto[1])


