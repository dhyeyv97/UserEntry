// const { task } = require("grunt")
getAPI();
console.log("Welcome");
$(function () {
  $('[data-toggle="popover"]').popover();
});

function getAPI() {

  var javaS = fetch(
    "https://crudcrud.com/api/4ff5e2f99b764a7da459d90ca978f47e/crud"
  );
  javaS
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
     let datas = response;
      var html = "";
          var table = document.getElementById("table");
          datas.forEach((item, index) => {
            html += `
             <th scope="row"> ${index + 1}</th>
             <td id= "edit" >${item.name}</td>
             <td  id= "edit">${item.email}</td>
             <td  id= "edit">${item.age}</td>
             <td> <button type="button" onclick = "editAPI(${index})" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" class="btn btn-info btn-edit mx-2">Edit</button>
                 <button type="button"  onclick = "deleteAPI(${index})" data-bs-toggle="modal" data-bs-target="#deleteModal" class="btn btn-danger btn-del">Delete </button>
     
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
  submit1.addEventListener("click", function () {
    //Defining the variables
    var nameTaskval = nameLab.value;
    var emTaskval = emLab.value;
    var ageTaskval = ageLab.value;

    //Defining the regex
    var letters = /^[A-Za-z -]+$/;
    let nums = /^[0-9]+$/;
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //if-else conditioning

    if (nameLab.value == "" && nameLab.value == "" && ageLab.value == "") {
      document.getElementById("name_error").innerHTML = "*Name cannot be Blank";
      document.getElementById("email_error").innerHTML =
        "*Email cannot be Blank";
      document.getElementById("age_error").innerHTML = "*Age cannot be Blank";
      // $("#submit1").removeAttr("data-bs-dismiss")
      return false;
    } else if (
      nameLab.value == "" ||
      nameLab.value == "" ||
      ageLab.value == ""
    ) {
      if (nameLab.value == "") {
        alert("Name Cannot be Blank");
        //   document.getElementById("name_error").innerHTML =
        // "*Name cannot be Blank";
        // $("#submit1").removeAttr("data-bs-dismiss")
        return false;
      }
      if (emLab.value == "") {
        alert("Email Cannot be Blank");
        // document.getElementById("email_error").innerHTML =
        //   "*Email cannot be Blank";
        // $("#submit1").removeAttr("data-bs-dismiss")
        return false;
      }
      if (ageLab.value == "") {
        alert("Age Cannot be Blank");
        // document.getElementById("age_error").innerHTML = "*Age cannot be Blank";
        // $("#submit1").removeAttr("data-bs-dismiss")
        return false;
      }
    } else if (!nameLab.value.match(letters)) {
      alert("Please Enter Valid Name");
      // document.getElementById("name_error").innerHTML =
      //   "*Valid Name is Required";
      // $("#submit1").removeAttr("data-bs-dismiss")
      return false;
    } else if (!emLab.value.match(validRegex)) {
      alert("Please Enter Valid Email");
      // document.getElementById("email_error").innerHTML =
      //   "*Valid Email is Required";
      // $("#submit1").removeAttr("data-bs-dismiss")
      return false;
    } else if (!ageLab.value.match(nums)) {
      alert("Please Enter Valid Age");
      // document.getElementById("age_error").innerHTML = "*Valid age is Required";
      // $("#submit1").removeAttr("data-bs-dismiss")
      return false;
    } else {
      var javaS = fetch(
        "https://crudcrud.com/api/4ff5e2f99b764a7da459d90ca978f47e/crud"
      );
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
            alert("This Email ID already exists");
            // $("#submit1").removeAttr("data-bs-dismiss")
            return false;
          } else {
            document.getElementById("name_error").style.display = "none";
            document.getElementById("email_error").style.display = "none";
            document.getElementById("age_error").style.display = "none";

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
            //  $("#submit1").attr("data-bs-dismiss", "modal");
            nameLab.value = "";
            emLab.value = "";
            ageLab.value = "";
          }
          getAPI();
        });
      getAPI();
    }
  });
}
submit();
//  $("#submit1").attr("data-bs-dismiss", "modal");
//     $("#submit1").removeAttr("data-bs-dismiss")
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

// //editTask
function editAPI(index) {
  var javaS = fetch(
    "https://crudcrud.com/api/4ff5e2f99b764a7da459d90ca978f47e/crud"
  );
  javaS
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let saveindex = document.getElementById("saveindex");
      saveindex.value = index;
      nameEd.value = response[index].name;
      emEd.value = response[index].email;
      ageEd.value = response[index].age;

      let save1 = document.getElementById("save1");
      let nameEdit = document.getElementById("nameEd");
      let emEdit = document.getElementById("emEd");
      let ageEdit = document.getElementById("ageEd");

      //save button for edit

      save1.addEventListener("click", function (e) {
        e.preventDefault();

        var letters = /^[A-Za-z -]+$/;
        var nums = /^[0-9]+$/;
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!nameEdit.value.match(letters)) {
          alert("Please Enter Valid name");
          return false;
        } else if (!emEdit.value.match(validRegex)) {
          alert("Please Enter Valid email");
          return false;
        } else if (!ageEdit.value.match(nums)) {
          alert("Please Enter Valid age");
          return false;
        } else {
          var javaS = fetch(
            "https://crudcrud.com/api/4ff5e2f99b764a7da459d90ca978f47e/crud"
          );
          javaS
            .then((response) => {
              return response.json();
            })
            .then((response) => {
              var id = response[index]._id;
            });
          getAPI();
          var id = response[index]._id;
          const updatenewdata = {
            name: nameEdit.value,
            email: emEdit.value,
            age: ageEdit.value,
          };
          var javaS = fetch(
            `https://crudcrud.com/api/5ac3aca396ef44bca0ab0bf5f6d83562/crud/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatenewdata),
            }
          ).then((response) => {
            console.log(response, "check update value");
            document.location.reload();
            getAPI();
          });
          getAPI();
        }
        nameEd.value = "";
        emEd.value = "";
        ageEd.value = "";
      });
      getAPI();
    });
  getAPI();
}
editAPI();
getAPI();

//delete api

function deleteAPI(index) {
  let deleteCnfb = document.getElementById("deleteCnf");
  deleteCnfb.onclick = function () {
    var javaS = fetch(
      "https://crudcrud.com/api/5ac3aca396ef44bca0ab0bf5f6d83562/crud"
    );
    javaS
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        var id = response[index]._id;
        var javaS = fetch(
          `https://crudcrud.com/api/5ac3aca396ef44bca0ab0bf5f6d83562/crud/${id}`,
          {
            method: "delete",
          }
        );
        javaS
          .then((response) => response.json())
          .then((data) => console.log(data));
        getAPI();
      });
    getAPI();
  };
}

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

// $("#name_error").css("display","none")
// $("#email_error").css("display","none")
// $("#age_error").css("display","none")

clearName.addEventListener("click", function () {
  nameLab.value = "";
  document.getElementById("name_error").style.display = "none";
});

clearEmail.addEventListener("click", function () {
  emLab.value = "";
  document.getElementById("email_error").style.display = "none";
});

clearAge.addEventListener("click", function () {
  ageLab.value = "";
  document.getElementById("age_error").style.display = "none";
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
