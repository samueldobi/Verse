#  Verse 🌍🗣️  
*A language exchange platform where learners connect, practice, and grow together.*  

## 📌 Overview  
Project Verse is a web application that enables people learning one language  to connect with people learning another language  for real-time language exchange.  
It is built to promote **cultural exchange, inclusivity, and accessible learning** through simple, user-friendly digital tools.  

---

## ⚡ Features  
- 🔐 **Authentication with Firebase** – Secure login/registration (/Email).  
- 🌍 **Language Matching** – Connects learners based on their target and native languages.  
- 💬 **Exchange Interface** – Chat system for practicing languages.  
- 📚 **User Profiles** – Learners can specify their skills, learning goals, and availability.  
- 🗄️ **PostgreSQL Database** – Stores users, preferences, and exchange history.  
- 📱 **Responsive UI** – Built with Next.js for smooth navigation across devices.  

---

## 🛠️ Tech Stack  
- **Frontend & Backend Framework:** Next.js
- **Database:** PostgreSQL
- **Authentication:** Firebase Authentication
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
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id


📂 Project Structure
project-verse/
│── public/ # Static assets (images, icons, fonts, )
│── scripts/ # Utility scripts for testing, setup, or automation
│── src/ # Main application source code
│ │── app/ # Next.js 15 App Router (routes, layouts, server components)
│ │── components/ # Reusable React components (UI elements, forms, layouts)
│ │── context/ # React context providers ( auth)
│ │── data/ # Static or seed data ( constants, JSON files)
│ │── lib/ # Configuration and helpers (db client, firebase, utils)
│ │── queries/ # Database queries for postgres
│ │── types/ # TypeScript type definitions and interfaces
│── .env.local # Environment variables (not committed to Git)
│── package.json # Project metadata and dependencies
│── README.md # Project documentation
