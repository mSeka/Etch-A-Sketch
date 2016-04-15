$(document).ready(function() {

    var question; //Prompt asking the user for the grid layout
    var userInput;
    var gridSize; //Converting user input to rounded number

    $("#blackWhite").click(function() { //Black and White Button
        question = prompt("Please enter a number! Max 100.");
        userInput = parseFloat(question);
        gridSize = Math.round(userInput);

        if (isNaN(question) || question === "") { //Error if nput is not a number
            alert("Not a number! Try again.");
        }
        if (userInput > 100) { //It takes to long to load if its over 100
            alert("Max 100");
        } else {
            $("#wrapper").html(""); //Resetting grid on every new click

            for (var y = 0; y < gridSize; y++) { // Creating a grid
                for (var x = 0; x < gridSize; x++) {

                    var cellSize = (500 / gridSize); // Defining size of the box

                    $("#wrapper").append($("<div></div>", {
                        class: "box",
                        width: cellSize + "px",
                        height: cellSize + "px"
                    }));
                }
                gridSize += "\n";
            }
            $(".box").mouseenter(function() {
                $(this).css("background-color", "black"); //Change color of specific element
            });
        }
    }); //End of Black and White button function

    $("#randomColor").click(function() { //Random color Button
        question = prompt("Please enter a number! Max 100.");
        userInput = parseFloat(question);
        gridSize = Math.round(userInput);

        if (isNaN(question) || question === "") { //Error if nput is not a number
            alert("Not a number! Try again.");
        }
        if (userInput > 100) { //It takes to long to load if its over 100
            alert("Max 100");
        } else {
            $("#wrapper").html(""); //Resetting grid on every new click

            for (var y = 0; y < gridSize; y++) { // Creating a grid
                for (var x = 0; x < gridSize; x++) {

                    var cellSize = (500 / gridSize); // Defining size of the box

                    $("#wrapper").append($("<div></div>", {
                        class: "box",
                        width: cellSize + "px",
                        height: cellSize + "px"
                    }));
                }
                gridSize += "\n";
            }
            $(".box").mouseenter(function() {
                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(this).css("background-color", hue); //Change color of specific element
            });
        }
    }); //End of Random color button
});
