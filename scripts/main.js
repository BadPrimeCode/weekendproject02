console.log("sauced!");

// global variables
var students = [];
// var numStudents;
// var currentStudent = 0;

$(document).ready(function() {
  $('body').on('click', '#startButton', function() {
    console.log("start button clicked");
    $('#startButton').hide();
    $.ajax({
      url: "http://devjana.net/pi/pi_students.json",
      datatype: "JSON",

      success: function(data) {
        console.log("in ajax success");
        console.log(data);
        students = data.students;
        console.log(students);

          var prevButton= $('<button id="prevButton">Prev</button>');
          var nextButton= $('<button id="nextButton">Next</button>');
            $('.buttons').prepend(prevButton);
            $('.buttons').append(nextButton);

            var i = 0;
            // setInterval(function() {
            var currentStudent = students[i];

            $('#studentName').html('<p><b>' + currentStudent.first_name + ' ' + currentStudent.last_name + '</b></p>');
            $('#studentDesc').html('<p>' + currentStudent.info + '</p>');

            $('#prevButton').on('click', function() {
              if(currentStudent <= data.students.length && currentStudent > 0){
                currentStudent--;
                console.log(currentStudent);
              } else if (currentStudent === 0) {
                currentStudent = data.students.length;
                console.log(currentStudent);
              }
            });

            $('#nextButton').on('click', function() {
              if(currentStudent < data.students.length){
                currentStudent++;
                console.log(currentStudent);
              } else {
                currentStudent = 0;
                console.log(currentStudent);
              }
            });

              }, // end ajax success

                statusCode: {
                    404: function() {
                            alert("error connecting to server. perhaps try again?");
                        } // end 404
                } // end statusCode

        }); // end ajax

    }); // end click start button

}); //end document ready


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
