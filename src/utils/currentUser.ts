import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useCurrentUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('usuário logado tem o id: ', uid);
    } else {
      console.log('Usuário não logado');
    }
  });
}
