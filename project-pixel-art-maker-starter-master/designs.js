// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var canvas = $('#pixel_canvas');
var submitButton = $( "input[type=submit]" );
var pixelColor = $("#colorPicker");
var column = "<tr></tr>";
var row = "<td></td>";

//creates a grid
function makeGrid(){
  var height = $("#input_height").val();
  var width = $("#input_width").val();

  canvas.children().remove();
  for(c=0;c<height;c++){
    canvas.append(column);
  }

  var gridColumn = $("tr");

  for(r=0;r<width;r++){
    gridColumn.append(row);
  }

  var myTd = canvas.find('td');
  myTd.click(function() {
      // Select color input
      console.log("blah");
      var color;
      color = pixelColor.val();
      $(this).attr('bgcolor', color);
  });
}




//when the submit button is clicked...
submitButton.on( "click", function(event) {
    //the submit button does something to the url this line of code stops it
    event.preventDefault();
    makeGrid();
});
