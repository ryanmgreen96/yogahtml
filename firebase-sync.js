// firebase-sync.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdzIu5PwO5KiZmdFCNCOvJY1R6JHgkKjM",
  authDomain: "birdfood-fda27.firebaseapp.com",
  projectId: "birdfood-fda27",
  storageBucket: "birdfood-fda27.firebasestorage.app",
  messagingSenderId: "340792097507",
  appId: "1:340792097507:web:f151f0076517cc2e0323d6",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Load data for a section
export async function loadData(section) {
  const snapshot = await get(ref(db, "yogaProject/" + section));
  return snapshot.exists() ? snapshot.val() : {};
}

// Save data for a section
export function saveData(section, payload) {
  return set(ref(db, "yogaProject/" + section), payload);
}
