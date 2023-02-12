const socket = io()
const formulario = document.getElementById('formulario')
const userName = document.getElementById('usuario')
const message = document.getElementById('mensaje')
const parrafo = document.getElementById('parrafo')

formulario.onsubmit= (e) =>{
    e.preventDefault()
    const usuario = userName.value
    const mensaje = message.value
    socket.emit('mensaje1', {usuario,mensaje})
}

socket.on('saludo',(mensaje)=>{
    console.log(mensaje)
})

socket.on('respuesta1',(mensajes)=>{
    let info = ''
    mensajes.forEach((m) => {
        info += `El usuario <strong>${m.usuario}</strong> dice: ${m.mensaje} <br>`
    });

    parrafo.innerHTML= info
})