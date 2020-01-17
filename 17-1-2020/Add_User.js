users = [];
if (sessionStorage.getItem("UserDataString") == null) {
    sessionStorage.setItem("UserDataString", JSON.stringify(users));
} else {
    users = JSON.parse(sessionStorage.getItem("UserDataString"));
}
printData();
function CalculateAge(a){
    var d =new Date();
    return (Number(d.getFullYear()) - Number(a));
}
function checkValidationAndPrint() {

    class userData {
        constructor(name, email, password, birthdate) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.birthdate = birthdate;
        }
    }


    var userName = document.getElementById("nameOfUser").value;
    var userEmail = document.getElementById("emailOfUser").value;
    var userPassword = document.getElementById("passwordOfUser").value;
    var userBirthdate = document.getElementById("birthdateOfUser").value;

    if (/^[a-zA-Z]+$/.test(userName)) {
        if (/^[a-zA-Z-0-9.]+\@[a-zA-Z-0-9.]+\.[a-z]{2,3}$/.test(userEmail)) {
            if (/^[a-zA-Z0-9]+\W+[a-zA-Z0-9]+$/.test(userPassword)) {
                users.push(new userData(userName, userEmail, userPassword, userBirthdate));
                sessionStorage.setItem("UserDataString", JSON.stringify(users));
                printData();
            }else{
                alert("Invalid password format");
            }
        }else{
            alert("Invalid Email Format");
        }
    }else{
        alert("Invalid Name format.Only enter text");
    }
}

function printData() {

    var userList = "";
    users.forEach(function (element,index) {
        userList += `<tr>
                            <td>${element.name} </td>
                            <td>${element.email}</td>
                            <td>${element.password}</td>
                            <td>${element.birthdate}</td>
                            <td>${CalculateAge(element.birthdate)}</td>
                            <td><a href='#'>Edit</a>&nbsp&nbsp<a href="#">Delete</a></td>
                        </tr>`;
    })
    if (userList != "") {
        document.getElementById("showData").innerHTML = `<table border='1'> <tr>
            <td>name</td>
            <td>email</td>
            <td>password</td>
            <td>birthdate</td>
            <td>Age</td>
            <td>Actions</td>
            </tr>${userList}</table>`;
    }
}