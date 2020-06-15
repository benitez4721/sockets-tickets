


var socket = io();

var label = $('#lblNuevoTicket')
socket.on('connect', function() {
    console.log("Conectado al servido");
    
})

socket.on('disconnect', function() {
    console.log("desconectado del servido");
    
})

socket.on('estadoActual',function(ticket) {
    label.text(ticket.actual)
})


$('button').on('click', function() {
    
    socket.emit('siguienteTicket',null, function(siguiente) {
        label.text(siguiente)
    })
    
})

