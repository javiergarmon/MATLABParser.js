
var matlabParse = function( input ){

	// Sanitize input
	input = typeof input !== 'undefined' ? input.toString() : '';

	// Get instructions
	input = matlabParse.getInstructions( input );

	// Analyze instructions
	for( var i = 0; i < input.length; i++ ){
		input = matlabParse.analyzeInstruction( input[ i ] );
	}

	return input;

};

matlabParse.getInstructions = function( input ){

	// Identify multiple commands in a line
	input = input.replace( ';', ';\n' );

	// Split in lines
	input = input.split('\n');

	// Trim lines
	for( var i = 0; i < input.length; i++ ){
		input[ i ] = input[ i ].trim();
	}

	// Filter empty lines
	input = input.filter( function( str ){
		return str.length && str !== ';';
	});

	// Return result
	return input;

};

matlabParse.analyzeInstruction = function( input ){
	return input;
};
