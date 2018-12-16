import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}
export { subscribeToTimer };

function playerTurn() {
  socket.emit('playerTurn');
}
export {playerTurn};

function checkTurn(cb) {
  socket.on('checkTurn', myTurn => cb(null, myTurn));
}
export {checkTurn};