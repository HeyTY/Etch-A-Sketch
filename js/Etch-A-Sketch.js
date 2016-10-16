var rows = 20;
var columns = 20;
var $row = $("<div />", {                                                             
	class: 'row'
});

var $square = $("<div />", {
	class: 'square'
});

$(document).ready(function() {
	//add columns to the the temp row object
	for (var i = 0; i < columns; i++) {
		$row.append($square.clone());
	}
	//clone the temp row object with the columns to the wrapper
	for (var i = 0; i < rows; i++) {
		$("#wrapper").append($row.clone());
	}

});


$(document).ready(function() {
    var colorOrig=$(".square").css('background');
    $(".square").hover(
    function() {
        //mouse over
        $(this).css('background', '#FF00FF')
    }, function() {
        //mouse out
        $(this).css('background', '#FF00FF')
    });
});


