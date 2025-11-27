import {Server as SocketServer} from "socket.io";
import type { Server as HTTPServer } from "http";

let io: SocketServer | null = null;

export function getSocketServer(server: HTTPServer) {
  if (!io) {
    io = new SocketServer(server, {
      cors: {
        origin: "*",
      },
    });

    io.on("connection", (socket) => {
      console.log("🟢 User connected:", socket.id);

      // When a user joins a chat room
      socket.on("joinRoom", (chatId:string) => {
        socket.join(chatId);
        console.log(`User ${socket.id} joined room ${chatId}`);
      });

      // When a user sends a message
      socket.on("sendMessage", (messageData : { chatId: string; content: string }) => {
        // Broadcast message to everyone in the same chat
        io!.to(messageData.chatId).emit("receiveMessage", messageData);
      });

      socket.on("disconnect", () => {
        console.log("🔴 User disconnected:", socket.id);
      });
    });
  }

  return io;
}
