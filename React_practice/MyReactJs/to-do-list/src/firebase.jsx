import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD2pms49o9VSt8E6ZJjqXBybYjic5OQ6dY',
  authDomain: 'login-da39b.firebaseapp.com',
  projectId: 'login-da39b',
  storageBucket: 'login-da39b.appspot.com',
  messagingSenderId: '794044535579',
  appId: '1:794044535579:web:5e1410f81d962fa459f9be',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
