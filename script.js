data = []
var user

function generateID() {
	var userId = Math.round(Math.random()*(9999-1000+1)+1000)
    document.getElementById("userID").value = userId
}

function displayResult() {
    console.info(data)
    //document.getElementById("result").children[0].innerHTML += "<li>"+data[data.length-1]+"</li>";
}

function saveUser() {
    if (createUser()) {
        data.push(user)
        console.info(data)
        return true
    }
    alert('Submit fail')
    return false
}

function createUser() {
    user = new Object()
    if (fieldCheck()){
        alert('Submit success')
        user.userId = document.getElementById("userID").value
        user.gender = document.getElementsByName("Gender").value
        user.age = document.getElementsByName("Age").value
        user.major = document.getElementById("major").value
        return true
    }
    return false
}

function fieldCheck() {
    var genderCheck = 0
    for (var i = 0; i < document.getElementsByName("Gender").length; i++) {
        if (document.getElementsByName("Gender")[i].checked) {
            genderCheck++
        }
    }
    if (genderCheck === 0) {
        alert('Please choose your gender!')
        return false;
    }

    var ageCheck = 0
    for (var i = 0; i < document.getElementsByName("Age").length; i++) {
        if (document.getElementsByName("Age")[i].checked) {
            ageCheck++
        }
    }
    if (ageCheck === 0) {
        alert('Please choose your age!')
        return false;
    }

    if ( document.getElementById("major").value==="")
    {
        alert('Please enter your major');
        return false;
    }

    if ( document.getElementById("userID").value === "")
    {
        alert('Please generate user id!');
        return false;
    }
    return true
}