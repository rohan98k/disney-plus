import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAOmBk91ssXnhIcVMSiWX9mxLDEwthw1l4',
  authDomain: 'disney-plus-hotstar.firebaseapp.com',
  projectId: 'disney-plus-hotstar',
  storageBucket: 'disney-plus-hotstar.appspot.com',
  messagingSenderId: '755674182892',
  appId: '1:755674182892:web:c976022961e4650e6321c9',
};
const firebase = Firebase.initializeApp(config);

export { firebase };
