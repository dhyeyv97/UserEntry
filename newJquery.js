// const { task } = require("grunt")
getAPI();
console.log("Welcome");
$(function () {
  $('[data-toggle="popover"]').popover();
});


//Clear text
let clearName = document.getElementById("minusName");
let clearEmail = document.getElementById("minusEmail");
let clearAge = document.getElementById("minusAge");

let clearNames = document.getElementById("minusNames");
let clearEmails = document.getElementById("minusEmails");
let clearAges = document.getElementById("minusAges");

let nameEdit = document.getElementById("nameEd");
let emEdit = document.getElementById("emEd");
let ageEdit = document.getElementById("ageEd");

let close1 = document.getElementById("closeSub");
let close2 = document.getElementById("closebtn");
let close3 = document.getElementById("closeEd");
let close4 = document.getElementById("edClose");


clearName.addEventListener("click", function () {
nameLab.value = "";
});

clearEmail.addEventListener("click", function () {
emLab.value = "";

});

clearAge.addEventListener("click", function () {
ageLab.value = "";
});

clearNames.addEventListener("click", function () {
nameEdit.value = "";
});

clearEmails.addEventListener("click", function () {
emEdit.value = "";
});

clearAges.addEventListener("click", function () {
ageEdit.value = "";
});

closeSub.addEventListener("click", function () {
  nameLab.value = "";
  emLab.value = "";
  ageLab.value = "";
  clearErrors()
  });

  closebtn.addEventListener("click", function () {
    nameLab.value = "";
    emLab.value = "";
    ageLab.value = "";
    clearErrors()
    });
closeEd.addEventListener("click", function () {
  nameEdit.value = "";
  emEdit.value = "";
  ageEdit.value = "";
  clearErrors()
  });
  edClose.addEventListener("click", function () {
    nameEdit.value = "";
    emEdit.value = "";
    ageEdit.value = "";
    clearErrors()
    });




    // Get the modal
var modalSuccess = document.getElementById("myModalSuccess");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSuccess) {
    modalSuccess.style.display = "none";
  }
}



// Get the Modal Edit 
var modalEdit = document.getElementById("exampleModalEdit");

//Get the button that opens the Edit modal
var editBtn = document.getElementById("editRecord")

var CE1 = document.getElementById("closeEd");
var CE2 = document.getElementById("edClose");

modalEdit.style.display = "none";

// When the user clicks on <span> (x), close the modal
CE1.onclick = function() {
  modalEdit.style.display = "none";
}
CE2.onclick = function() {
  modalEdit.style.display = "none";
}


// Get the Add modal 
var modalAdd = document.getElementById("exampleModal");

//Get the button that opens the Edit modal
var addBtn = document.getElementById("addRecord")

var CA1 = document.getElementById("closeSub");
var CA2 = document.getElementById("closebtn");


// When the user clicks on <span> (x), close the modal
CA1.onclick = function() {
  modalAdd.style.display = "none";
}
CA2.onclick = function() {
  modalAdd.style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modalAdd) {
    addContent.style.margin = "15px auto";
  }
}


   //for alert messages
  function showAlertsAdd(message){
      $("#successAlert").text(message)
      modalSuccess.style.display = "block";


      setTimeout( function() {
       modalSuccess.style.display = "none";
    }, 2000 )
  }


 //clear errors
function clearErrors() {
  errors = document.getElementsByClassName("formError");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

//Set Error
function setError(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formError")[0].innerHTML = error;
}

function getAPI() {

  var javaS = fetch(
    "https://crudcrud.com/api/4ff5e2f99b764a7da459d90ca978f47e/crud"
  );
  javaS
    .then((response) => {
      return response.json();
    })
    .then((response) => {
     let datas = response;
      var html = "";
          var table = document.getElementById("table");
          datas.forEach((item, index) => {
            html += `
             <th scope="row"> ${index + 1}</th>
             <td id= "edit" >${item.name}</td>
             <td  id= "edit">${item.email}</td>
             <td  id= "edit">${item.age}</td>
             <td> <button type="button" id = "editRecord" onclick = "editAPI(${index})" class="btn btn-info btn-edit mx-2">Edit</button>
                 <button type="button" onclick = "deleteAPI(${index})" data-bs-toggle="modal" data-bs-target="#deleteModal" class="btn btn-danger btn-del">Delete </button>
     
             </td>
             </tr> 
          
     
             `;
            table.innerHTML = html;
          });

    })
}
getAPI();



// Adding the User details
let nameTask = document.getElementById("nameLab");
let emTask = document.getElementById("emLab");
let ageTask = document.getElementById("ageLab");
let submit1 = document.getElementById("submit1");

function submit() {
  // var returnval = true;
  submit1.addEventListener("click", function (e) {
    e.preventDefault()
    clearErrors()
  

    //Defining the variables
    var nameTaskval = nameLab.value;
    var emTaskval = emLab.value;
    var ageTaskval = ageLab.value;

    //Defining the regex
    var letters = /^[A-Za-z -]+$/;
    let nums = /^[0-9]+$/;
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var returnval = true;

    //if-else conditioning

    if (nameLab.value == "" && emLab.value == "" && ageLab.value == "") {
      setError("name", "Name Cannot be Blank")
      setError("email", "Email Cannot be Blank")
      setError("age", "Age Cannot be Blank")
      returnval = false;
    } 
      if (nameLab.value == "") {
        setError("name", "*Name Cannot be Blank")
     
        returnval = false;
      }
      if (emLab.value == "") {
        
        setError("email", "*Email Cannot be Blank")
       
        returnval = false;
      }
      if (ageLab.value == "") {
  
        setError("age", "*Age Cannot be Blank")
   
        returnval = false
      }
      else if (!nameLab.value.match(letters)) {
      setError("name", "*Please Enter Valid Name")

      returnval = false;
    } else if (!emLab.value.match(validRegex)) {
      setError("email", "*Please Enter Valid Email")

      returnval = false;
    } else if (!ageLab.value.match(nums)) {
     
      setError("age", "*Please Enter Valid age")
      returnval = false
    } else {
      var javaS = fetch(
        "https://crudcrud.com/api/4ff5e2f99b764a7da459d90ca978f47e/crud"
      )
      javaS
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          var emailFound = response.find(function (element) {
            return element.email === emLab.value;
          });
          console.log(emailFound);
          if (emailFound) {
        
            setError("email", "*This Email Address Already Exists")   
            returnval = false
          } else {
            showAlertsAdd("User Added Sucessfully !!")
            modalAdd.style.display = "none";
            var formData = {
              name: nameTaskval, //for get name
              email: emTaskval, //for get email
              age: ageTaskval, //for get age
            };

            fetch(
              "https://crudcrud.com/api/4ff5e2f99b764a7da459d90ca978f47e/crud",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }
            )
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((error) => console.log(error));
      
            nameLab.value = "";
            emLab.value = "";
            ageLab.value = "";
            getAPI()
          }
          getAPI();
        });
      getAPI();
    }
    return returnval
  });
 $("#addRecord").click(function(){
  modalAdd.style.display = "block"
 })

}
submit();
getAPI();

$(document).ready(function () {
  $("#closebtn").click(function () {
    $("#closebtn").html(
      (nameLab.value = ""),
      (emLab.value = ""),
      (ageLab.value = "")
    );
    $("#name_error").css("display", "none");
    $("#email_error").css("display", "none");
    $("#age_error").css("display", "none");
  });
});

//editTask
function editAPI(index) {
  let save1 = document.getElementById("save1");
  let nameEdit = document.getElementById("nameEd");
  let emEdit = document.getElementById("emEd");
  let ageEdit = document.getElementById("ageEd");
  var javaS = fetch(
    "https://crudcrud.com/api/4ff5e2f99b764a7da459d90ca978f47e/crud"
  )
  javaS
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response)
      let saveindex = document.getElementById("saveindex");
      saveindex.value = index;
      nameEdit.value = response[index].name;
      emEdit.value = response[index].email;
      ageEdit.value = response[index].age;

    })
   
    var returnval = true;
    modalEdit.style.display = "block"
    save1.onclick = function(){

      let save1 = document.getElementById("save1");
      let nameEdit = document.getElementById("nameEd");
      let emEdit = document.getElementById("emEd");
      let ageEdit = document.getElementById("ageEd");
      var letters = /^[A-Za-z -]+$/;
      var nums = /^[0-9]+$/;
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        clearErrors()
      
        if(nameEdit.value == "") {
          setError("nameE", "*Name Cannot be Blank")
          returnval = false;
        }
        if(emEdit.value == "") {
          setError("emailE", "*Email Cannot be Blank")
          returnval = false;
   
        }
        if(ageEdit.value == "") {
          setError("ageE", "*Age Cannot be Blank")
     
          returnval = false;
      } 
   
      else if (!nameEdit.value.match(letters)) {
        setError("nameE", "*Please Enter Valid Name");
        returnval = false;
   
      } else if (!emEdit.value.match(validRegex)) {
        setError("emailE", "*Please Enter Valid Email");
        returnval = false;
      } else if (!ageEdit.value.match(nums)) {
        setError("ageE", "*Please Enter Valid Age");
        returnval = false;
      } else {
        var javaS = fetch(
          "https://crudcrud.com/api/048ffb3fffaf445c97c88da6fa80d81f/crud"
        );
        javaS
          .then((response) => {
            return response.json();
          })
          .then((response) => {
      
            console.log(response);
            console.log(response[index].email)
           var emailFound = response.find(function (element) {
           return (
            element.email === emEdit.value  && !(response[index].email === emEdit.value)) 
          });
           console.log(emailFound);
            if (emailFound) {
           setError("emailE", "*This Email Address Already Exists")
           returnval = false
           } else {
           showAlertsAdd("User Updated Sucessfully !!")
           modalEdit.style.display = "none"
 
           var id = response[index]._id;
           const updatenewdata = {
            name: nameEdit.value,
            email: emEdit.value,
            age: ageEdit.value,
            }
            console.log(updatenewdata);
           var javaS = fetch(
            `https://crudcrud.com/api/048ffb3fffaf445c97c88da6fa80d81f/crud/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatenewdata),
            }
            ).then((response) => {
            console.log(response, "check update value");
            })
            nameEd.value = "";
            emEd.value = "";
            ageEd.value = "";
            getAPI()
             }
           getAPI()
            
        })
      }
    getAPI();
    return returnval
  }
  }

//delete api

function deleteAPI(index) {
  let deleteCnfb = document.getElementById("deleteCnf");
  deleteCnfb.onclick = function () {
    var javaS = fetch(
      "https://crudcrud.com/api/048ffb3fffaf445c97c88da6fa80d81f/crud"
    );
    javaS
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        var id = response[index]._id;
        var javaS = fetch(
          `https://crudcrud.com/api/048ffb3fffaf445c97c88da6fa80d81f/crud/${id}`,
          {
            method: "delete",
          }
        );
        javaS
          .then((response) => response.json())
          .then((data) => console.log(data));
          showAlertsAdd("User Deleted Sucessfully !!")
        getAPI();
      });
    getAPI();
  };
  getAPI();
};
deleteAPI()
