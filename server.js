const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", function(socket) {
  socket.on("emit", function(data) {
    // console.log("Receive Data");
    // console.log(data);
    // console.log("_______________________");
    // count++;
    socket.broadcast.emit("count", { count: data.count });
    console.log({ ...data });
    socket.broadcast.emit("message", { ...data });
  });
});

server.listen(8080, function(err) {
  if (err) throw err;
  console.log("server is listening to port 8080");
});
