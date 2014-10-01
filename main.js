
// RENDER A DOM ELEMENT THAT REPRESENTS THE AUTHOR AND THE QUOTE

var Quote = function (author, quote) {
	this.author = author;
	this.quote = quote;
}

Quote.prototype.render = function() {
	return $('<div class="main-wrapper"><h4 class="rendered-title">' + this.author + '</h4><div class="rendered-quote">' + this.quote + '</div></div>')
};

// CREATE THE jQUERY CLICK EVENT
$(document).ready(function(){
	// FIRE ON CLICK OF SUBMIT BUTTON
	$('.submit-button').on('click', function(e) {
		// PREVENT DEFAULT prevents the <form> from submitting data to the server (default behavior)
		e.preventDefault();
		// SAVE AUTHOR INPUT AS A VARIABLE - FROM THE AUTHOR INPUT BOX- .val() SAVES THE VALUE
		var authorInput = $('.author-input').val();
		// SAVE QUOTE INPUT AS A VARIABLE - FROM THE QUOTE INPUT BOX- .val() SAVES THE VALUE
		var quoteInput = $('.quote-input').val();
		// CREATE A CHILD INSTANCE FROM PARENT CLASS/CONSTRUCTOR - TAKES IN VARIABLES AS ARGUMENTS
		var quote = new Quote (authorInput, quoteInput);
		// 1. APPEND PARAMETER TO THE APPEND QUOTE HTML SECTION
		// 2. CALL THE .render() METHOD THAT'S APART OF THE QUOTE CLASS. .render() PROTOTYPE GENERATES DOM HTML VIA jQUERY
		$('.form-container').append( quote.render() );
	});
});

