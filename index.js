// @formatter:off
var validCon = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
var validVoc = ['a', 'e', 'i', 'o', 'u'];
var validNum = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
// @formatter:on

var pickRandom = (function pickRandom ( array ) {
	return array[ Math.floor( Math.random() * array.length ) ];
});

exports.randomString = function ( len, numLen ) {
	var pickRandom = (function pickRandom ( array ) {
		return array[ Math.floor( Math.random() * array.length ) ];
	});

	if ( len == undefined ) {
		len = 6;
	}
	if ( numLen == undefined ) {
		numLen = 2;
	}

	var c    = true;
	var pass = "";

	for ( var i = 0; i < len - numLen; ++i ) {
		if ( c ) {
			pass += pickRandom( validCon );
		} else {
			pass += pickRandom( validVoc );
		}

		c = !c;
	}

	for ( var n = 0; n < numLen; ++n ) {
		pass += pickRandom( validNum );
	}

	return pass;
};

exports.randomNumber = function ( numLen ) {

	if ( numLen == undefined ) {
		numLen = 2;
	}

	var pass = "";

	for ( var n = 0; n < numLen; ++n ) {
		pass += pickRandom( validNum );
	}

	return pass;
};