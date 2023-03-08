//delete api

function deleteAPI(index) {
  let deleteCnfb = document.getElementById("deleteCnf");
  deleteCnfb.onclick = function () {
    var javaS = fetch(
      "https://crudcrud.com/api/23f15841b9314576882d39cf7efcf7ec/crud"
    );
    javaS
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        var id = response[index]._id;
        var javaS = fetch(
          `https://crudcrud.com/api/23f15841b9314576882d39cf7efcf7ec/crud/${id}`,
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
