var firebaseConfig = {
    apiKey: "AIzaSyDKw0vxWqfVDwhS_OnMXG34J3Hgt2h04NE",
    authDomain: "sample-3bc8e.firebaseapp.com",
    projectId: "sample-3bc8e",
    storageBucket: "sample-3bc8e.appspot.com",
    messagingSenderId: "65294657997",
    appId: "1:65294657997:web:2361b3a36953e6ae2e3c84",
    measurementId: "G-XB0T1HVGLR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var refe=firebase.database().ref().child("Student Details")
function Insert(){
    var name=document.getElementById("uname").value;
    var rno=document.getElementById("urno").value;
    refe.child(rno).set({
        Studentname:name,
        Rollnumber:rno
    })
    console.log("Data Inserted")
}
function Delete(){
    let temp=window.prompt("Enter the rollnumber to be deleted");
    refe.child(temp).remove();
    console.log("Data deleted");
}
function Update(){
    var name=document.getElementById("uname").value;
    var rno=document.getElementById("urno").value;
    refe.child(rno).update({
        Studentname:name
    })
    console.log("Data Updated")
}
function Display(){
        table=document.createElement("TABLE")
        row=table.insertRow(-1);
        var name=row.insertCell(-1);
        var rno=row.insertCell(-1);
        name.innerHTML="<center>NAME</center>";
        rno.innerHTML="<center>ROLL_NO</center>"
        table.border=1;
          refe.on('child_added',function(snap){
            row=table.insertRow(-1);
            var name=row.insertCell(-1);
            var rno=row.insertCell(-1);
              console.log(snap.val().Studentname)
              name.innerHTML=`<center>${snap.val().Studentname}</center>`
              console.log(snap.val().Rollnumber)
              rno.innerHTML=`<center>${snap.val().Rollnumber}</center>`
          })
    document.getElementById("div").append(table)
    console.log("Data displayed")
}