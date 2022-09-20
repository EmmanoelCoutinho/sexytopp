import { collection, addDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore();

try {
  const docRef = await addDoc(collection(db, 'users'), {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
} catch (e) {
  console.error('Error adding document: ', e);
}
