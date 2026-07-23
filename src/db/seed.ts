import "dotenv/config";
import bcrypt from "bcryptjs";
import { db } from "./index";
import { users, userPrefs, chats, chatParticipants, messages } from "./schema";

async function seed() {
  console.log("Seeding database...");

  const hash = (pw: string) => bcrypt.hashSync(pw, 12);

  const [alice] = await db
    .insert(users)
    .values({
      uid: "d1d1f1a1-0001-4000-8000-000000000001",
      email: "alice@example.com",
      name: "Alice",
      password: hash("password123"),
      profileImage: null,
    })
    .returning();

  const [bob] = await db
    .insert(users)
    .values({
      uid: "d1d1f1a1-0002-4000-8000-000000000002",
      email: "bob@example.com",
      name: "Bob",
      password: hash("password123"),
      profileImage: null,
    })
    .returning();

  const [charlie] = await db
    .insert(users)
    .values({
      uid: "d1d1f1a1-0003-4000-8000-000000000003",
      email: "charlie@example.com",
      name: "Charlie",
      password: hash("password123"),
      profileImage: null,
    })
    .returning();

  console.log("Users inserted");

  await db.insert(userPrefs).values([
    { userId: alice.id, speaksLanguage: "English", learningLanguage: "Spanish" },
    { userId: bob.id, speaksLanguage: "Spanish", learningLanguage: "English" },
    { userId: charlie.id, speaksLanguage: "French", learningLanguage: "English" },
  ]);

  console.log("Language preferences inserted");

  const [chat1] = await db.insert(chats).values({}).returning();
  const [chat2] = await db.insert(chats).values({}).returning();

  console.log("Chats inserted");

  await db.insert(chatParticipants).values([
    { chatId: chat1.id, userId: alice.id },
    { chatId: chat1.id, userId: bob.id },
    { chatId: chat2.id, userId: alice.id },
    { chatId: chat2.id, userId: charlie.id },
  ]);

  console.log("Chat participants inserted");

  await db.insert(messages).values([
    { chatId: chat1.id, senderId: alice.id, content: "Hola Bob, ¿cómo estás?" },
    { chatId: chat1.id, senderId: bob.id, content: "¡Hola Alice! Estoy bien, gracias." },
    { chatId: chat1.id, senderId: alice.id, content: "¿Qué has aprendido hoy?" },
    { chatId: chat1.id, senderId: bob.id, content: "Aprendí la palabra 'biblioteca'." },
    { chatId: chat2.id, senderId: charlie.id, content: "Hey Alice, how's your French coming along?" },
    { chatId: chat2.id, senderId: alice.id, content: "Slowly but surely! Let's practice." },
  ]);

  console.log("Messages inserted");
  console.log("Seed complete!");
}

seed()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
