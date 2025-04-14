//Sistema de archivos en Node.js

//modulo fs: File Selector/system/Storage? Es una API que le permite interacturar con el sistema de archivos
// Puede realizar el CRUD: Leer, Escribir, Eliminar y Renombrar

//Importamos el modulo fs
const { error } = require('node:console');
const fs = require('node:fs');
//console.log(fs);

//Ruta de un archivo existente
const filePath1 = "./archivoExistente1.txt";
const filePath2 = "./archivoExistente2.txt";
const estandar = 'utf8';

//Uso de la API
console.log(0);
if(fs.existsSync(filePath1))
    console.log("Archivo existente");
else
    console.log("No se encontró el archivo");



// Lectura del archivo
console.log(1);
fs.readFile(filePath1,estandar,leerArchivo);
console.log(2);
//Elminira archivos
fs.unlink(filePath2,mensajeError)

//Sobre escribir contenido o crea uno de no existe
//Es mas rápido que el anterior, asi que se termina de ejecutar antes 
console.log(3);
let mensaje = "Hola! Node js, isashuburidana";
fs.writeFile(filePath2,mensaje,mensajeError);
console.log(4);





function leerArchivo(err,data){
    if (err) {
        console.error("Error al leer el archivo",err);
        return;
    }
    console.log(`El contenido del archivo es: ${data}`);
};

function mensajeError(err){
    if(err){
        console.error("Error al operar en el archivo", err);
        return;
    }
    console.log("El archivo manipulado con éxito.");
    
}




    
    

