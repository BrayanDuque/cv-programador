let numero = document.getElementById("numero");
const dedo = document.getElementById("like")
// const fragment = document.createDocumentFragment();



dedo.addEventListener("click",()=>{
    let cantidad = 10;

    cantidad++;
    numero.value = cantidad;
    numero.textContent = numero.value;
    
})
dedo.addEventListener("click",()=>{
    dedo.classList.add("text-primary")
})

dedo.addEventListener("dblclick",()=>{
    numero.textContent = numero.value - 1
    dedo.classList.remove("text-primary")
})
