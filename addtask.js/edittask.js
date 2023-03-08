
//editTask
function editAPI(index) {
  let save1 = document.getElementById("save1");
  let nameEdit = document.getElementById("nameEd");
  let emEdit = document.getElementById("emEd");
  let ageEdit = document.getElementById("ageEd");
  var javaS = fetch(
    "https://crudcrud.com/api/23f15841b9314576882d39cf7efcf7ec/crud"
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
          "https://crudcrud.com/api/23f15841b9314576882d39cf7efcf7ec/crud"
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
            `https://crudcrud.com/api/23f15841b9314576882d39cf7efcf7ec/crud/${id}`,
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