//data load to resume page localstorage getItem used to get data
window.addEventListener("load",()=>{
    
let name:any= localStorage.getItem("name")
let profession=localStorage.getItem("profession")
let tel=localStorage.getItem("tel")
let email=localStorage.getItem("email")
let address=localStorage.getItem("address")
let skill1=localStorage.getItem("skill1")
let skill2=localStorage.getItem("skill2")
let skill3=localStorage.getItem("skill3")
let lang1=localStorage.getItem("lang1")
let lang2=localStorage.getItem("lang2")
let lang3=localStorage.getItem("lang3")
let about=localStorage.getItem("about")
let company1=localStorage.getItem("company1")
let company1Start=localStorage.getItem("company1Start")
let company1End=localStorage.getItem("company1End")
let company2=localStorage.getItem("company2")
let company2Start=localStorage.getItem("company2Start")
let company2End=localStorage.getItem("company2End")
let company3=localStorage.getItem("company3")
let company3Start=localStorage.getItem("company3Start")
let company3End=localStorage.getItem("company3End")
let schoolDegree=localStorage.getItem("schoolDegree")
let schoolStart=localStorage.getItem("schoolStart")
let schoolEnd=localStorage.getItem("schoolEnd")
let collegeDegree=localStorage.getItem("collegeDegree")
let collegeStart=localStorage.getItem("collegeStart")
let collegeEnd=localStorage.getItem("collegeEnd")
let uniDegree=localStorage.getItem("uniDegree")
let uniStart=localStorage.getItem("uniStart")
let uniEnd=localStorage.getItem("uniEnd")
let profilepic= localStorage.getItem("profilepic")


//set data at resume
let resumeFirstName:any=document.getElementById("resumeFirstName")
resumeFirstName.textContent=name

let resumeProfession:any=document.getElementById("resumeProfession")
resumeProfession.textContent=profession

let resumeTel:any=document.getElementById("resumeTel")
resumeTel.textContent=tel

let resumeEmail:any=document.getElementById("resumeEmail")
resumeEmail.textContent=email

let ResumeAddress:any=document.getElementById("ResumeAddress")
ResumeAddress.textContent=address

let resumeLang1:any=document.getElementById("resumeLang1")
resumeLang1.textContent=lang1

let resumeLang2:any=document.getElementById("resumeLang2")
resumeLang2.textContent=lang2

let resumeLang3:any=document.getElementById("resumeLang3")
resumeLang3.textContent=lang3

let resumeSkill1:any=document.getElementById("resumeSkill1")
resumeSkill1.textContent=skill1

let resumeSkill2:any=document.getElementById("resumeSkill2")
resumeSkill2.textContent=skill2

let resumeSkill3:any=document.getElementById("resumeSkill3")
resumeSkill3.textContent=skill3

let resumeAbout:any=document.getElementById("resumeAbout")
resumeAbout.textContent=about

let resumeCompany1:any=document.getElementById("resumeCompany1")
resumeCompany1.textContent=company1

let resumeCompany1Start:any=document.getElementById("resumeCompany1Start")
resumeCompany1Start.textContent=company1Start

let resumeCompany1End:any=document.getElementById("resumeCompany1End")
resumeCompany1End.textContent=company1End

let resumeCompany2:any=document.getElementById("resumeCompany2")
resumeCompany2.textContent=company2

let resumeCompany2Start:any=document.getElementById("resumeCompany2Start")
resumeCompany2Start.textContent=company2Start

let resumeCompany2End:any=document.getElementById("resumeCompany2End")
resumeCompany2End.textContent=company2End


let resumeCompany3:any=document.getElementById("resumeCompany3")
resumeCompany3.textContent=company3

let resumeCompany3Start:any=document.getElementById("resumeCompany3Start")
resumeCompany3Start.textContent=company3Start


let resumeCompany3End:any=document.getElementById("resumeCompany3End")
resumeCompany3End.textContent=company3End


let resumeSchool:any=document.getElementById("resumeSchool")
resumeSchool.textContent=schoolDegree


let resumeSchoolStart:any=document.getElementById("resumeSchoolStart")
resumeSchoolStart.textContent=schoolStart


let resumeSchoolEnd:any=document.getElementById("resumeSchoolEnd")
resumeSchoolEnd.textContent=schoolEnd


let resumeCollege:any=document.getElementById("resumeCollege")
resumeCollege.textContent=collegeDegree


let resumeCollegeStart:any=document.getElementById("resumeCollegeStart")
resumeCollegeStart.textContent=collegeStart


let resumeCollegeEnd:any=document.getElementById("resumeCollegeEnd")
resumeCollegeEnd.textContent=collegeEnd


let resumeUni:any=document.getElementById("resumeUni")
resumeUni.textContent=uniDegree

let resumeUniStart:any=document.getElementById("resumeUniStart")
resumeUniStart.textContent=uniStart

let resumeUniEnd:any=document.getElementById("resumeUniEnd")
resumeUniEnd.textContent=uniEnd


let resumeImg:any=document.getElementById("resumeImg")
resumeImg.src=profilepic



})













let skillBtn:any = document.getElementById("skills-button") 
let skill:any=document.getElementById("skills-Id")


skillBtn.addEventListener("click",()=>{
    skill.classList.toggle("hide")
  
})


let printBtn:any=document.getElementById("print-button")
printBtn.addEventListener("click",()=>{
window.print()
})