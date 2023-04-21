// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithRedirect, 
  getRedirectResult, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,  
  set
} 
  from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdaw-FYImKOQgG44l6XQks25367WAqP6E",
    authDomain: "film-63601.firebaseapp.com",
    projectId: "film-63601",
    storageBucket: "film-63601.appspot.com",
    messagingSenderId: "213280392115",
    appId: "1:213280392115:web:acf7af665ef00ab7ef01c6",
    measurementId: "G-EDQ47B7ZHE"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const database = getDatabase(app);





signinrdr.addEventListener('click', (e) => {
  document.getElementById('login-box').style.display='none';
  document.getElementById('hidbox').style.display='block';

})

signuprdr.addEventListener('click', (e) => {
  document.getElementById('login-box').style.display='block';
  document.getElementById('hidbox').style.display='none';

})

login.addEventListener('click',(e) => {
 // signInWithRedirect(auth, provider);


 // redirect the result
//  getRedirectResult(auth)
//    .then((result) => {
//      // This gives you a Google Access Token. You can use it to access Google APIs.
//      const credential = GoogleAuthProvider.credentialFromResult(result);
//      const token = credential.accessToken;

//      // The signed-in user info.
//      const user = result.user;

//    }).catch((error) => {
//      // Handle Errors here.
//      const errorCode = error.code;
//      const errorMessage = error.message;
//      // The email of the user's account used.
//      const email = error.email;
//      // The AuthCredential type that was used.
//      const credential = GoogleAuthProvider.credentialFromError(error);
//      // ...
     
// });


// sign in with popup tab
signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;


  alert(user.displayName);
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...

  alert(errorMessage);
});
});

saveData.addEventListener('click', (e) => {

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let cf_password = document.getElementById('cf_password').value;

  console.log(email);

  if(password == cf_password){
    createUserWithEmailAndPassword(auth, email, password)  
    .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ... user.uid
          // save data into real time database
          set(ref(database, 'users/' + user.uid), {
              email: email,
              password: password
          })
        .then(() => {
          // Data saved successfully!
          alert('user created successfully');
          
          
        })
        .catch((error) => {
          // The write failed...
          alert(error);
        });
        })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
  } else { alert("password doesn't match")}
})

getData.addEventListener('click', (e) => {
  // firebase.initializeApp(firebaseConfig)
  let email = document.getElementById('l-email').value;
  let password = document.getElementById('l-password').value;
  const dbRef = ref(getDatabase());
  var firebaseRef = app.database.ref().child('login');
  firebaseRef.once('val', (snapshot) => {
    console.log(snapshot.val());})

  // signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   // var user = userCredential.user;
  //   get(child(dbRef, `users/${userId}`))
  //   .then((snapshot) => {
  //     console.log(snapshot.val());

  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //       var lgDate = new Date()
  //       update(ref(database, 'users/' + user.uid), {
  //       last_login: lgDate,
  //       })
  //       alert('log in successfully')
  //     location.assign("./index.html")
  //     } else {
  //       console.log("No data available");
  //     }
  //   })    
  // .then(() => {
  //    //data saved successfully
     

     
  //    })
  //    .catch((error) => {
  //         //the write failed
  //         alert(error);
  //         alert("login failed");
  //    })
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });
})
// signOut.addEventListener('click', (e) => {
//   signOut(auth).then(() => {
//   // Sign-out successful.
//   }).catch((error) => {
//   // An error happened.
//   });
// });

