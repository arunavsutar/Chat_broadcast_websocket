var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');

btn.onclick = function exec() {
    socket.emit('msg_send', {
        msg: inputMsg.value
    })
}
socket.on('msg_rcvd', (data) => {
    let msg = document.createElement('li');
    msg.innerText = data.msg;
    msgList.appendChild(msg);
});