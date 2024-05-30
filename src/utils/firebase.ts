import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyATOra0tVDXxDk0DxdqA9ctO1B864t3hO8',
  authDomain: 'theraventesttask.firebaseapp.com',
  databaseURL: 'https://theraventesttask-default-rtdb.firebaseio.com',
  projectId: 'theraventesttask',
  storageBucket: 'theraventesttask.appspot.com',
  messagingSenderId: '351683200742',
  appId: '1:351683200742:web:dc1ddbecbf12bdfb415d27',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
