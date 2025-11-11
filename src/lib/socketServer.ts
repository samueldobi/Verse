import {Server} from "socket.io";

let io: Server | null = null;

export function getSocketServer(server: any) {
  if (!io) {
    io = new Server(server, {
      cors: {
        origin: "*",
      },
    });

    io.on("connection", (socket) => {
      console.log("🟢 User connected:", socket.id);

      // When a user joins a chat room
      socket.on("joinRoom", (chatId) => {
        socket.join(chatId);
        console.log(`User ${socket.id} joined room ${chatId}`);
      });

      // When a user sends a message
      socket.on("sendMessage", (messageData) => {
        // Broadcast message to everyone in the same chat
        io.to(messageData.chatId).emit("receiveMessage", messageData);
      });

      socket.on("disconnect", () => {
        console.log("🔴 User disconnected:", socket.id);
      });
    });
  }

  return io;
}
