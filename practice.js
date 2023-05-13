
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
    apiKey: "AIzaSyDAlyjui8nBW8oJMd0S4oOr7KIIBNBknrE",
    authDomain: "kwitter-6265b.firebaseapp.com",
    projectId: "kwitter-6265b",
    storageBucket: "kwitter-6265b.appspot.com",
    messagingSenderId: "438871256445",
    appId: "1:438871256445:web:ad980ed85889ed1ea5f014"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}