console.log("sauced!");

// global variables
var students = [];
// var numStudents;
// var currentStudent = 0;

$(document).ready(function(){
$('body').on('click', '#startButton', function(){
    console.log("start button clicked");

     $.ajax({
       url: "http://devjana.net/pi/pi_students.json",
       datatype: "JSON",
       success: function(data){
          console.log("in ajax success");
          console.log(data);
          students = data.students;
          console.log(students);
          var showStudents = function() {
            console.log("in showStudents");
            for (var i = 0; i < students.length; i++) {
              $('#studentName').html('<p><b>' + students[i].first_name + ' ' + students[i].last_name + '</b></p>');
              $('#studentDesc').html('<p>' + students[i].info + '</p>');
              showStudents();
            }
          };
         }, // end success

       statusCode: {
          404: function(){
             alert("error connecting to server. perhaps try again?");
          } // end 404
         } // end statusCode


      }); // end ajax object
    });
  }); // end click start button

// write prev student/button function: currentStudent - 1
// var prevStudent = function() {
// $("#buttons").prepend('<button id="prevButton" onclick="prevStudent()">Prev</button>');
// }
//
// write next student/button function: currentStudent + 1
// var nextStudent = function() {
// $("#buttons").append('<button id="nextButton" onclick="nextStudent()">Next</button>');
// }

// show count
// write individual buttons
// write timer & fade
