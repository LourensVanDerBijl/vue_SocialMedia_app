import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyBx73NCwDrjYjMtqwGUzzreYHMvQdC51PE",
    authDomain: "vue-database-e1de5.firebaseapp.com",
    projectId: "vue-database-e1de5",
    storageBucket: "vue-database-e1de5.appspot.com",
    messagingSenderId: "470903640654",
    appId: "1:470903640654:web:8f4619b29c4600188de91f"
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