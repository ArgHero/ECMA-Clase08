# Proyecto: Introducción al manejo de archivos con Node.js
>Saul Omar Arguello Hernadez

## Descripción
El manejo de archivos con Node.js es una habilidad fundamental para cualquier desarrollador backend. Este proyecto tiene como objetivo enseñar cómo leer, escribir, verificar y eliminar archivos utilizando el módulo `fs` en Node.js. La solución consiste en construir un programa que permita gestionar notas personales almacenadas en un archivo JSON.

Este proyecto es una práctica esencial para aprender a interactuar con el sistema de archivos, desarrollar aplicaciones robustas y consolidar conocimientos de Node.js.

Adicionalmente se realizó el fron end de la aplicación pero dada la falta de conocimientos para implementar la unión entre ambos proyectos, unicamente se incluye la liga sin una aplicación real.

[Pagina Web de Notas](https://arghero.github.io/ECMA-Clase08/)

## Objetivo
El objetivo principal es desarrollar un gestor de notas personales que:
- Cree una nueva nota y la guarde en un archivo.
- Lea todas las notas existentes.
- Elimine una nota específica según su título.

## Funcionalidades
1. **Crear una nueva nota**:
   - Agregar una nota con un título y contenido específico.
   - Almacenar las notas en un archivo JSON llamado `notas.json`.

```javascript
class Nota {
    constructor(titulo,descripcion){
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}

//Inegra las notas en una sola lista
function agregarNota(titulo,descripcion){
    if(typeof titulo !== "string" || titulo.trim()==='')
        return;
    if(typeof descripcion !== "string" || descripcion.trim()==='')
        return;
    listaNotas.push(new Nota(titulo,descripcion));
}

```

2. **Listar todas las notas**:
   - Leer el archivo `notas.json` y mostrar todas las notas en la consola.

```javascript
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
```

3. **Eliminar una nota**:
   - Borrar una nota específica identificada por su título.

```javascript
function eliminarNota(titulo){
    listaNotas.splice(listaNotas.findIndex(nota=>nota.titulo===titulo),1);
};//elminiarNota

```


## Requisitos
- **Node.js** instalado en el sistema.
- Familiaridad básica con JavaScript y JSON.

## Estructura del Proyecto
El proyecto contiene los siguientes archivos:
- `gestorNotas.js`: Código principal que implementa las funcionalidades.
- `notas.json`: Archivo donde se almacenan las notas en formato JSON.
- `pruebas.json`: Archivo de donde se lee un set antes creado.

## Instrucciones de Uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/ArgHero/ECMA-Clase08.git
   cd ECMA-Clase08
   ```
