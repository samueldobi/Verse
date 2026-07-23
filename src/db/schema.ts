import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  uid: text("uid").notNull().unique(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  password: text("password"),
  profileImage: text("profile_image"),
});

export const userPrefs = pgTable("user_prefs", {
  userId: integer("user_id")
    .primaryKey()
    .references(() => users.id),
  speaksLanguage: text("speaks_language").notNull(),
  learningLanguage: text("learning_language").notNull(),
});

export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chatParticipants = pgTable("chat_participants", {
  chatId: integer("chat_id")
    .notNull()
    .references(() => chats.id),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  chatId: integer("chat_id")
    .notNull()
    .references(() => chats.id),
  senderId: integer("sender_id")
    .notNull()
    .references(() => users.id),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const usersRelations = relations(users, ({ many, one }) => ({
  preferences: one(userPrefs),
  chatParticipants: many(chatParticipants),
  sentMessages: many(messages),
}));

export const userPrefsRelations = relations(userPrefs, ({ one }) => ({
  user: one(users, {
    fields: [userPrefs.userId],
    references: [users.id],
  }),
}));

export const chatsRelations = relations(chats, ({ many }) => ({
  participants: many(chatParticipants),
  messages: many(messages),
}));

export const chatParticipantsRelations = relations(chatParticipants, ({ one }) => ({
  chat: one(chats, {
    fields: [chatParticipants.chatId],
    references: [chats.id],
  }),
  user: one(users, {
    fields: [chatParticipants.userId],
    references: [users.id],
  }),
}));

export const messagesRelations = relations(messages, ({ one }) => ({
  chat: one(chats, {
    fields: [messages.chatId],
    references: [chats.id],
  }),
  sender: one(users, {
    fields: [messages.senderId],
    references: [users.id],
  }),
}));
