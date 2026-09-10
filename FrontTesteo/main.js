import express from 'express'
const app= express()
const puerto=5237;
import { readFile } from 'fs/promises'
app.use(express.json());

app.get("/", (req, res) =>{
    readFile(new URL('../src/main.json', import.meta.url), 'utf-8')
        .then(data => res.json(JSON.parse(data)))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "No se pudo leer el archivo" });
        });

})

app.listen(puerto, () =>{
    console.log("Todo bien. El testeo está en posición de arrancar");
});