import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyDR3ZWYQIp1XPAJWYJ69A7i5Y85HIwQf6s",
    authDomain: "teammanagement-702ed.firebaseapp.com",
    projectId: "teammanagement-702ed",
    storageBucket: "teammanagement-702ed.appspot.com",
    messagingSenderId: "780019248542",
    appId: "1:780019248542:web:ea5a3d6274768fe7793a8f"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
    db,
    auth,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}