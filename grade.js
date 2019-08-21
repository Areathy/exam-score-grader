var schoolGrade = [];

function collectData() {
    let regNumber = document.getElementById("regnumber").value;
    let studentName = document.getElementById("sname").value;
    let testScore = document.getElementById("testscore").value;
    let examScore = document.getElementById("examscore").value;
    let totalScore = parseInt(testScore) + parseInt(examScore);
    
    let students={
        regnumber:regNumber,
        sname:studentName,
        testscore:testScore,
        examscore:examScore,
        totalscore:totalScore,
        grade: function() {
            if(totalScore >=75 && totalScore <=100){
                regstn = "A"
            } else if(totalScore >=65 && totalScore <=74){
                regstn = "B"
            } else if(totalScore >=50 && totalScore <=64){
                  regstn = "C"
            } else if(totalScore >=45 && totalScore <=49){
                regstn = "D"
            } else if(totalScore >=40 && totalScore <=44){
                regstn = "E"
            } else if(totalScore >=0 && totalScore <=39){
                regstn = "F"
            } else {
                regstn = "Not Applicable!"
            }
            return regstn;
        }
    };
    
    schoolGrade.push(students);

    

    document.getElementById("table1").innerHTML = schoolGrade.length;
}



function viewGrade() {
    document.getElementById('table2').innerHTML=''
   var limit = schoolGrade.length;
   var table = document.createElement("table");
   var row = table.insertRow();
    let cellHeadReg = row.insertCell();
    cellHeadReg.innerHTML = '<b>'+'Registration No' + '</b>'
    let cellSname = row.insertCell();
    cellSname.innerHTML = '<b>'+'Student Name' + '</b>'
    let cellTscore = row.insertCell();
    cellTscore.innerHTML = '<b>'+'Test Score' + '</b>'
    let cellEscore = row.insertCell();
    cellEscore.innerHTML = '<b>'+'Exam Score' + '</b>'
    let cellTotalscore = row.insertCell();
    cellTotalscore.innerHTML = '<b>'+'Total Score' + '</b>'
    let cellGrade = row.insertCell();
    cellGrade.innerHTML = '<b>'+'Grade' + '</b>' + '<br>'
    row = table.insertRow();

   for (var i=0; i< limit; i++) {
      let cellregno = row.insertCell();
      cellregno.innerHTML = schoolGrade[i].regnumber
      let cellsname = row.insertCell();
      cellsname.innerHTML = schoolGrade[i].sname
      let celltestscore = row.insertCell();
      celltestscore.innerHTML = schoolGrade[i].testscore
      let cellexam = row.insertCell();
      cellexam.innerHTML = schoolGrade[i].examscore
      let celltot = row.insertCell();
      celltot.innerHTML = schoolGrade[i].totalscore
      let cellgrade = row.insertCell();
      cellgrade.innerHTML = schoolGrade[i].grade()
    row = table.insertRow();
   }

   document.getElementById('table2').appendChild(table)

    //    let row = table.insertRow();
    
    //    for (var i of schoolGrade) {
    //        var cell = row.insertCell();
    //        cell.innerHTML
    //    }

    //    document.getElementById("container").appendChild(table);
        
    //     var studentsheet = " ";
    //     for(var i = 0; i<= schoolGrade.length; i++){
    //     studentsheet += schoolGrade[i].grade() + " " +schoolGrade[i].sname + " " + schoolGrade[i].testscore + " " + schoolGrade[i].examscore + " " + schoolGrade[i].totalscore + "<br>";

    //     document.getElementById("table2").innerHTML = studentsheet;
    //     }
} 









// document.getElementById("formr").reset();


// function generateSerial() {
    
//     'use strict';
    
//     var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        
//         serialLength = 10,
        
//         randomSerial = "",
        
//         i,
        
//         randomNumber;
    
//     for (i = 0; i < serialLength; i = i + 1) {
        
//         randomNumber = Math.floor(Math.random() * chars.length);
        
//         randomSerial += chars.substring(randomNumber, randomNumber + 1);
        
//     }
    
//     document.getElementById('serial').innerHTML = randomSerial;
    
// }