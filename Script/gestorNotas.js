//Importar el modulo
const fs  = require('node:fs');
const estandar = 'utf8';
//const path = require('node:path');
const pathNotas = "./Assets/notes/";
const listaNotas = new Array();
const listaPruebas = new Array();

//Plantilla para crear objetos tipo Nota que almacenan notas.
class Nota {
    constructor(titulo,descripcion){
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}
//Lectura del archivo JSON
leerNotas("pruebas");//Asincrono


// Creación y almacenamiento de la lista de notas
agregarNota("COmpras","Buebo");
agregarNota("Control de plaga","Esto es diferente");
agregarNota("pese","debes limpiar tu compu");
agregarNota("","Nota sin titulo"); // Se ignora
agregarNota("Nota sin contenido","");  //Se iignora
agregarNota("Entrega de campus","falta el ultimo proyecto");

archivoNotas("notas",listaNotas);

//Eliminar un elemento de la lista:
console.log("Antes de borrar",listaNotas);
eliminarNota("COmpras");
console.log("Despues de borrar",listaNotas);//Se eliminó "COmpras";

//Crea un archivo JSON a partir del objeto notas y le asigna el nombre de notas.


//Inegra las notas en una sola lista
function agregarNota(titulo,descripcion){
    if(typeof titulo !== "string" || titulo.trim()==='')
        return;
    if(typeof descripcion !== "string" || descripcion.trim()==='')
        return;
    listaNotas.push(new Nota(titulo,descripcion));
}
//Guarda el contenido que le pases en un archivo JSON en la ruta ./assets/notes/
function archivoNotas(nombre,contenido){
    const localPath = pathNotas+nombre+".json";
    fs.writeFile(localPath,JSON.stringify(contenido),mensajeError);
}
//De sucitae un error en la función anterior, envía un mensaje por consola
function mensajeError(err){
    if(err){
        console.error("Error al operar en el archivo", err);
        return;
    }
    console.log("El archivo se creó con éxito.");
}
//Lectura de las notas almacenadas
function leerNotas(nombre){
    const localPath = pathNotas+nombre+".json";
    if (!fs.existsSync(localPath)) 
        return `No se encontró el archivo ${nombre}.json`;
    fs.readFile(localPath,estandar,function(err,data){
        if(err){
            console.error("No se pudo leer el archivo",err);
            return;
        }
        JSON.parse(data).forEach(nota =>listaPruebas.push(nota));
        console.log(`Se cargó con éxito el archivo ${nombre}.json y ahora lista pruebas tiene`,listaPruebas);
    });//fs.readFile
};//leerNotas


function eliminarNota(titulo){
    listaNotas.splice(listaNotas.findIndex(nota=>nota.titulo===titulo),1);
};//elminiarNota