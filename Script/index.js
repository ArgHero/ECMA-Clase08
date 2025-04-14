const txtNombre = document.getElementById("txtNombre");
const txtCuerpo = document.getElementById("txtCuerpo");
const btnGuardar = document.getElementById("btnGuardar");

const listaNotas = document.getElementById("listaNotas");

const tituloNota = document.getElementById("tituloNota");
const cuerpoNota = document.getElementById("cuerpoNota");
//document.getElementsByClassName("btn").item(0).style.display = "block";

btnGuardar.addEventListener("click",function(event){
    event.preventDefault();
    if(!validarCampos())
        return;

    listaNotas.insertAdjacentHTML("beforeend",`
        <li class="list-group-item d-flex justify-content-between w-100" onclick="mostrarNota(event);">
            <h6>${txtNombre.value}</h6> <p style="display: none;">${txtCuerpo.value.trim()}</p> <a onclick="borarNota(event);" class="btn btn-primary" style="z-index: 100; display: none;">X</a>
        </li>
        `);
    txtNombre.value='';
    txtCuerpo.value='';
    txtNombre.focus();

});//btnGuardar-Listener

function validarCampos(){
    let titulo = txtNombre.value.trim();
    let contenido = txtCuerpo.value.trim();
    if(titulo ==='' || contenido ==='')
        return false;
    if(titulo.length <2 && contenido.length<2)
        return false;
    return true;
}

function borarNota(event){
    event.preventDefault();
    event.target.parentElement.remove();
}

function mostrarNota(event){
    event.preventDefault();
    const nota = event.target;
    const btnElminar = nota.getElementsByClassName("btn").item(0);
    const notaTitulo = nota.getElementsByTagName("h6").item(0);
    const notaTexto = nota.getElementsByTagName("p").item(0);
    
    for(const elemento of listaNotas.children){
        elemento.classList.remove("active");
        elemento.getElementsByClassName("btn").item(0).style.display = "none";
    }
    nota.classList.toggle("active");
    if(btnElminar)
        btnElminar.style.display = "block";

    if(tituloNota && notaTitulo){
        tituloNota.innerText=notaTitulo.innerText;
        cuerpoNota.innerText=notaTexto.innerText;
    }

}