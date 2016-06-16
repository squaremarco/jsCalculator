$.domReady(function(){
	var screen = $("#screen-container span");
	var decimalUsed = false;
	$(".button").on('click', function(){
		var s = screen.text();
		var t = $(this).text();
		if(t === "AC") {
			screen.text("");
			decimalUsed = false;
		} else if(t === "=") {
			try{
				screen.text(Parser.parse(s).evaluate());
			} catch(ex){
				screen.text("Syntax error");
			}
		} else if(t === ".") {
			if(!decimalUsed){
				decimalUsed = true;
				screen.text(s + t);
			}
		} else {
			screen.text(s + t);
		}
	});
});
