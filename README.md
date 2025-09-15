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
│── pages/          # Next.js pages & routes
│── components/     # Reusable UI components
│── lib/            # Database and Firebase config
│── public/         # Static assets
│── styles/         # Global & module CSS
│── package.json
│── README.md
