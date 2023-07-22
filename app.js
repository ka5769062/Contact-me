import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase,ref,set,get,child,push } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


let contactForm = document.getElementById('contact')
let alert = document.querySelector(".alert")

  const firebaseConfig = {
    apiKey: "AIzaSyDkf68wzgbtvf4UfOMNdLvLF7ONtcFWy8w",
    authDomain: "my-database-7fea0.firebaseapp.com",
    databaseURL: "https://my-database-7fea0-default-rtdb.firebaseio.com",
    projectId: "my-database-7fea0",
    storageBucket: "my-database-7fea0.appspot.com",
    messagingSenderId: "355688751539",
    appId: "1:355688751539:web:9cab7f36b5dc424be52bc6",
    measurementId: "G-YCSZWVZSHP"
  };

  const app = initializeApp(firebaseConfig);

 let database = getDatabase()

 
//  const kam = ref( database,"messages")


contactForm.addEventListener("submit",(e) =>{

 e.preventDefault();

let name = document.getElementById('name').value
let email = document.getElementById('email').value
let message = document.getElementById('message').value

 alert.style.display = "block"
 contactForm.reset();
 
saveMsg(name,email,message)   

})

const saveMsg = (name,email,message) =>{

// const newContact = kam.push();
set(ref(database, 'messages/'+ name), {
  username: name,
  email: email,
  message:message,
});



}



