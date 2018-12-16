const io = require('socket.io')();
let players = [];
let current_turn = 0;
let turn = 0;

io.on('connection', (client) => {
  players.push(client);
  console.log('Connect: ' + players.length);
/*   if (players.length > 2) {
    console.log('Player disconnected.');
    players.pop(client);
    client.disconnect();
  } */

  client.on('playerTurn', () => {
    if (players[turn] === client){
      console.log('Player 1 Turn');
    }
  });

  client.on('checkTurn', function(data){
    io.emit('turn',data);
  });
});




/* io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('A client has connected to the server ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
}); */

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
