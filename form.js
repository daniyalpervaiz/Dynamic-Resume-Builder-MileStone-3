//catch data from foem.html file and store in typescript variable
var name1 = document.getElementById("name");
var profession = document.getElementById("profession");
var tel = document.getElementById("tel");
var email = document.getElementById("email");
var address = document.getElementById("address");
var skill1 = document.getElementById("skill1");
var skill2 = document.getElementById("skill2");
var skill3 = document.getElementById("skill3");
var lang1 = document.getElementById("lang1");
var lang2 = document.getElementById("lang2");
var lang3 = document.getElementById("lang3");
var about = document.getElementById("about");
var company1 = document.getElementById("company1");
var company1Start = document.getElementById("company1Start");
var company1End = document.getElementById("company1End");
var company2 = document.getElementById("company2");
var company2Start = document.getElementById("company2Start");
var company2End = document.getElementById("company2End");
var company3 = document.getElementById("company3");
var company3Start = document.getElementById("company3Start");
var company3End = document.getElementById("company3End");
var schoolDegree = document.getElementById("schoolDegree");
var schoolStart = document.getElementById("schoolStart");
var schoolEnd = document.getElementById("schoolEnd");
var collegeDegree = document.getElementById("collegeDegree");
var collegeStart = document.getElementById("collegeStart");
var collegeEnd = document.getElementById("collegeEnd");
var uniDegree = document.getElementById("uniDegree");
var uniStart = document.getElementById("uniStart");
var uniEnd = document.getElementById("uniEnd");
var profilepic = document.getElementById("profilepic");
var formId = document.getElementById("formId");
var inputBtn = document.getElementById("submit");
//when user click submit button it prevent to refresh 
formId.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent the page to refesh data
    //user data stored through local storage function
    localStorage.setItem("name", name1.value);
    localStorage.setItem("profession", profession.value);
    localStorage.setItem("tel", tel.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("lang1", lang1.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("lang3", lang3.value);
    localStorage.setItem("about", about.value);
    localStorage.setItem("company1", company1.value);
    localStorage.setItem("company1Start", company1Start.value);
    localStorage.setItem("company1End", company1End.value);
    localStorage.setItem("company2", company2.value);
    localStorage.setItem("company2Start", company2Start.value);
    localStorage.setItem("company2End", company2End.value);
    localStorage.setItem("company3", company3.value);
    localStorage.setItem("company3Start", company3Start.value);
    localStorage.setItem("company3End", company3End.value);
    localStorage.setItem("schoolDegree", schoolDegree.value);
    localStorage.setItem("schoolStart", schoolStart.value);
    localStorage.setItem("schoolEnd", schoolEnd.value);
    localStorage.setItem("collegeDegree", collegeDegree.value);
    localStorage.setItem("collegeStart", collegeStart.value);
    localStorage.setItem("collegeEnd", collegeEnd.value);
    localStorage.setItem("uniDegree", uniDegree.value);
    localStorage.setItem("uniStart", uniStart.value);
    localStorage.setItem("uniEnd", uniEnd.value);
    // upload profile pic
    if (profilepic.files && profilepic.files[0]) {
        var read_image_1 = new FileReader(); //convert text into string
        read_image_1.addEventListener("load", function () {
            var image_text = read_image_1.result;
            localStorage.setItem("profilepic", image_text);
        });
        read_image_1.readAsDataURL(profilepic.files[0]);
    }
    //after submit button user redirect to resume page
    window.location.href = "./resume.html";
});
