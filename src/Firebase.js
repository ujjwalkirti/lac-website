import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const secondaryAppConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY2,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN2,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID2,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET2,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID2,
  appId: process.env.NEXT_PUBLIC_APP_ID2,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID2,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const secondarApp = initializeApp(secondaryAppConfig, "secondary");

const db = getFirestore(app);
const db2 = getFirestore(secondarApp);

const storage = getStorage(app);
const storage2 = getStorage(secondarApp);
// const database = getDatabase(app);
const auth = getAuth();
// const dbRef = ref(getDatabase());
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
const analytics2 = isSupported().then((yes) =>(yes ? getAnalytics(secondarApp) : null));

export { auth, db, analytics,storage, db2, analytics2, storage2 };
