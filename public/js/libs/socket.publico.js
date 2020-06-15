var socket = io();

let lblticket1 = $('#lblTicket1')
let lblticket2 = $('#lblTicket2')
let lblticket3 = $('#lblTicket3')
let lblticket4 = $('#lblTicket4')

let lblescritorio1 = $('#lblEscritorio1')
let lblescritorio2 = $('#lblEscritorio2')
let lblescritorio3 = $('#lblEscritorio3')
let lblescritorio4 = $('#lblEscritorio4')

let lblTickets = [lblticket1,lblticket2,lblticket3,lblticket4]
let lblEscritorios = [lblescritorio1,lblescritorio2,lblescritorio3,lblescritorio4]

socket.on('estadoActual', function(data){
    
    let audio = new Audio('audio/new-ticket.mp3');
    audio.play()
    actualizarHTML(data.ultimos4)
    
})



function actualizarHTML( ultimos4 ){
    for (let i = 0; i < ultimos4.length; i++) {
        lblTickets[i].text('Ticket' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorios' + ultimos4[i].escritorio)
        
    }
}