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
    else{
        alert("Thank you for your message! I will get back to you as soon as possible!");
    }
}