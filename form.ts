//catch data from foem.html file and store in typescript variable

let name1:any = document.getElementById("name")
let profession:any = document.getElementById("profession")
let tel:any = document.getElementById("tel")
let email:any = document.getElementById("email")
let address:any = document.getElementById("address")
let skill1:any = document.getElementById("skill1")
let skill2:any = document.getElementById("skill2")
let skill3:any = document.getElementById("skill3")
let lang1:any = document.getElementById("lang1")
let lang2:any = document.getElementById("lang2")
let lang3:any = document.getElementById("lang3")
let about:any = document.getElementById("about")
let company1:any = document.getElementById("company1")
let company1Start:any = document.getElementById("company1Start")
let company1End:any = document.getElementById("company1End")
let company2:any = document.getElementById("company2")
let company2Start:any = document.getElementById("company2Start")
let company2End:any = document.getElementById("company2End")
let company3:any = document.getElementById("company3")
let company3Start:any = document.getElementById("company3Start")
let company3End:any = document.getElementById("company3End")
let schoolDegree:any = document.getElementById("schoolDegree")
let schoolStart:any = document.getElementById("schoolStart")
let schoolEnd:any = document.getElementById("schoolEnd")
let collegeDegree:any = document.getElementById("collegeDegree")
let collegeStart:any = document.getElementById("collegeStart")
let collegeEnd:any = document.getElementById("collegeEnd")
let uniDegree:any = document.getElementById("uniDegree")
let uniStart:any = document.getElementById("uniStart")
let uniEnd:any = document.getElementById("uniEnd")
let profilepic:any = document.getElementById("profilepic")







let formId:any = document.getElementById("formId")
let inputBtn = document.getElementById("submit")


//when user click submit button it prevent to refresh 

formId.addEventListener("submit",(event)=>{
event.preventDefault()  //prevent the page to refesh data

//user data stored through local storage function
localStorage.setItem("name",name1.value)
localStorage.setItem("profession",profession.value)
localStorage.setItem("tel",tel.value)
localStorage.setItem("email",email.value)
localStorage.setItem("address",address.value)
localStorage.setItem("skill1",skill1.value)
localStorage.setItem("skill2",skill2.value)
localStorage.setItem("skill3",skill3.value)
localStorage.setItem("lang1",lang1.value)
localStorage.setItem("lang2",lang2.value)
localStorage.setItem("lang3",lang3.value)
localStorage.setItem("about",about.value)
localStorage.setItem("company1",company1.value)
localStorage.setItem("company1Start",company1Start.value)
localStorage.setItem("company1End",company1End.value)
localStorage.setItem("company2",company2.value)
localStorage.setItem("company2Start",company2Start.value)
localStorage.setItem("company2End",company2End.value)
localStorage.setItem("company3",company3.value)
localStorage.setItem("company3Start",company3Start.value)
localStorage.setItem("company3End",company3End.value)
localStorage.setItem("schoolDegree",schoolDegree.value)
localStorage.setItem("schoolStart",schoolStart.value)
localStorage.setItem("schoolEnd",schoolEnd.value)
localStorage.setItem("collegeDegree",collegeDegree.value)
localStorage.setItem("collegeStart",collegeStart.value)
localStorage.setItem("collegeEnd",collegeEnd.value)
localStorage.setItem("uniDegree",uniDegree.value)
localStorage.setItem("uniStart",uniStart.value)
localStorage.setItem("uniEnd",uniEnd.value)

// upload profile pic
if(profilepic.files && profilepic.files[0]){
    let read_image=new FileReader() //convert text into string
    read_image.addEventListener("load",()=>{
        let image_text:any=read_image.result
        localStorage.setItem("profilepic",image_text)
    })
read_image.readAsDataURL(profilepic.files[0])

}


//after submit button user redirect to resume page
 window.location.href="./resume.html"


})



















