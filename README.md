# Verse
*A language exchange platform where learners connect, practice, and grow together.*

## Overview
Project Verse is a web application that enables people learning one language to connect with people learning another language for real-time language exchange. Built to promote **cultural exchange, inclusivity, and accessible learning** through simple, user-friendly digital tools.

---

## Features
- **JWT Authentication** – Secure login/registration with bcrypt-hashed passwords.
- **Language Matching** – Connects learners based on their target and native languages.
- **Exchange Interface** – Real-time chat system for practicing languages.
- **User Profiles** – Learners can specify their skills, learning goals, and availability.
- **PostgreSQL Database** – Stores users, preferences, and exchange history (Drizzle ORM).
- **Responsive UI** – Built with Next.js for smooth navigation across devices.

---

## Tech Stack
- **Frontend & Backend Framework:** Next.js
- **Database:** PostgreSQL
- **ORM:** Drizzle
- **Authentication:** JWT (jsonwebtoken + bcrypt)
- **Hosting:** Vercel



##  Sneak Peek
<img width="1335" height="628" alt="Image" src="https://github.com/user-attachments/assets/dd11d1a5-474a-4863-9500-5b822c5efa35" />

<img width="1316" height="637" alt="Image" src="https://github.com/user-attachments/assets/4db6c338-bdfd-4070-b1fa-2f234e3e1e5b" />

<img width="847" height="640" alt="Image" src="https://github.com/user-attachments/assets/0cbfaa53-e34d-48c8-894b-0656f70da8dd" />
---

##  Getting Started  

### 1 Clone the repository  
```bash
git clone https://github.com/your-username/project-verse.git
cd project-verse

## Install dependencies
npm install

## or
yarn install
Set up environment variables

Create a .env.local file in the project root with the following:

DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB_NAME
JWT_SECRET=your_jwt_secret


 Project Structure
project-verse/
│── public/ # Static assets (images, icons, fonts)
│── src/ # Main application source code
│ │── app/ # Next.js 15 App Router (routes, layouts, server components)
│ │── components/ # Reusable React components (UI elements, forms, layouts)
│ │── context/ # React context providers (auth)
│ │── data/ # Static or seed data (constants, JSON files)
│ │── db/ # Database schema, migrations, seed, Drizzle client
│ │── hooks/ # Custom React hooks
│ │── lib/ # Configuration and helpers (jwt, utils)
│ │── types/ # TypeScript type definitions and interfaces
│── .env.local # Environment variables (not committed to Git)
│── package.json # Project metadata and dependencies
│── README.md # Project documentation
