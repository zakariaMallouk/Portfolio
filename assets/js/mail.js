
/*=============== Your web app's Firebase configuration ===============*/

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAT97TT4y-zpbu62_yfeDnlb9ki_g9hqFM",
    authDomain: "portfolio-d8a52.firebaseapp.com",
    databaseURL: "https://portfolio-d8a52-default-rtdb.firebaseio.com",
    projectId: "portfolio-d8a52",
    storageBucket: "portfolio-d8a52.appspot.com",
    messagingSenderId: "666403571990",
    appId: "1:666403571990:web:4c4f7af2482f03d5ac2837"
  };

// initialize firebase
  firebase.initializeApp(firebaseConfig);
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();


    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    // var date = getElementVal("date");


    var date = new Date();
    var dateDay = date.toLocaleDateString();
    var dateTime = date.toLocaleTimeString();

    // console.log(date);

    saveMessages(name, emailid, msgContent, dateDay, dateTime);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
  }

  const saveMessages = (name, emailid, msgContent, dateDay, dateTime) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      dateDay: dateDay,
      dateTime: dateTime
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };