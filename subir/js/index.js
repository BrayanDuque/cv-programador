let numero = document.getElementById("numero");
const dedo = document.getElementById("like")
// const fragment = document.createDocumentFragment();


let cantidad = 10;

dedo.addEventListener("click",()=>{
    cantidad ++
    numero.textContent = cantidad
    dedo.classList.add("text-primary")

    
})

