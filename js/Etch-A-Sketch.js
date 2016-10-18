// Size number of the grid
var present_size = 16;

$(document).ready(function() {
	load (present_size);
	default_color();
});



//Hover Color Change options

function default_color() {
	$(".square").hover(function() {
		$(this).css('background-color', '#FF00FF'); 
	});
};


function rgb_color () {
	$(".square").hover(function() {
		$(this).css('background-color', randomColor());
	});
};

function trailing_color () {
	$(".square").hover(function() {
		$(this).css("opacity", 0);
	}, function () {
		$(this).fadeTo('fast',1);

	});
};


//RGB Color Generator

function randomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
};



//Function to create grid blocks
function load(size) {
	var square_size = $("#wrapper").width() / size -2; // -2 for borders //play around with this
	//create the size x size grid here
	for (var x = 0; x < size; x++) {       //row or column?
		for (var y = 0; y < size; y++) {
			$("#wrapper").append("<div class='square'></div>")
		}
	$("#wrapper").append("<div class='new_row'></div>");
	}

	//Adjustment for the square size
	$(".square").css('width',square_size);
	$(".square").css('height',square_size);	

};


/* Deals with the coloring of the individual squares. */
function set_running() {
	switch (present_option) {
		case 1:
			default_color();
			break;
		case 2:
			rgb_color();
			break;
		case 3:
			trailing_color();
	}
};

//Starts function when user presses buttons

function operate(option) {
	if (option == 4) {
		clear();
		return;
}
present_option = option;
var size = prompt("Enter a Grid Size from 1 - 128.");
if ((size > 0) && (size < 128)) {
	present_size = size;
	clear();
} else {
	operate(option);
}
};

//Reset the present grid
function clear() {
	$(".square").remove();
	load(present_size);
	set_running();
};

