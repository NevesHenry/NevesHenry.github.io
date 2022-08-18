/**
 * function to validate the form
 **/
function submitMessege(){
    if( document.getElementById("fname").value == "" || 
        document.getElementById("lname").value == "" || 
        document.getElementById("email").value == "" || 
        document.getElementById("comments").value == "") {
        alert("Please fill in all the fields");
    }
}