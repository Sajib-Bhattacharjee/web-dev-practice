$(".container").addClass("container__style");

$("#btn").click(function () {
  var value1 = $("#pass1").val();
  var value2 = $("#pass2").val();

  if (value1 != "" && value2 !== "") {
    if (value1 == value2) {
      alert("Successfully Login.");
    } else {
      alert("Incorrect Password.");
    }
  } else {
    alert("Please Enter a password.");
  }
});
