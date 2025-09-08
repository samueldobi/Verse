// import { initializeApp, getApps, cert } from "firebase-admin/app";

// const firebaseAdminApp =
//   getApps().length === 0
//     ? initializeApp({
//         credential: cert({
//           projectId: process.env.FIREBASE_PROJECT_ID,
//           clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//           privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//         }),
//       })
//     : getApps()[0];

// export { firebaseAdminApp };
// lib/firebaseAdmin.ts
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export default admin;