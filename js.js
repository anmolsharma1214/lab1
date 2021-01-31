let studentslist = ["Muhammad", "Akanksha","Yaadwinder Kaur","Jordan","Michelle","Andrea","Alan","Harpreet","Manpreet","Manpreet","Mehakjot","Mohpreet","Rajveer","Kyu Jin","Pratik Pratapbhai","Meet Rameshbhai","Priya"
,"Harsh","Liudmyla","Anmol Sharma Ji :)","Amandeep","Chashamdeep","Jaskaran","Shreyanshkumar Anilbhai","Misha" ];

// it is not constant as students can add n drop course till feb 

const instructor = ["Jessica Gilfillan"];
 
let welcomeType = "learner";

 function welcomeCOMP1073() {

    
    if (welcomeType == "learner")
    {
       alert("Welcome Computer Programmers Student to client side java class! See console log to view the list of students."); 
        studentslist.forEach(listOfStudents => console.log("Hi :) Welcome " + listOfStudents  + " :) to COMP1073, client side java script"));


    } 
    else{
        instructor.forEach(professor => console.log("Hi :) Welcome " + professor + " :) to COMP1073, client side java script instructor panel"));
        instructor.forEach(professor => alert("Hi :) Welcome " + professor + " :) to COMP1073, client side java script instructor panel"));
       
    }

   
  
}



welcomeCOMP1073();



 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    