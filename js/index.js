let numero = document.getElementById("numero");
const dedo = document.getElementById("like")
const fragment = document.createDocumentFragment();



dedo.addEventListener("click",()=>{
    cantidad = 10;
    numero.innerHTML = cantidad + 1


    dedo.classList.add("text-primary")
})


dedo.addEventListener("dblclick",()=>{
    numero.innerHTML = cantidad 
    dedo.classList.remove("text-primary")
})
