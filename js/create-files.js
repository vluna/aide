
var textFile = null;

var makeTextFile = function (text) {
	var daa = new Blob([text], {type: 'text/HTML'});

	// If we are replacing a previously generated file we need to
	// manually revoke the object URL to avoid memory leaks.
	if (textFile !== null) {
	  	window.URL.revokeObjectURL(textFile);
	}

	textFile = window.URL.createObjectURL(daa);
	return textFile;
};


var create = document.getElementById('HTMLEditor');
var textbox = document.getElementById('textbox');

create.addEventListener('click', function () {
	var link = document.getElementById('downloadHTML');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
    console.log(makeTextFile(textbox.value));
}, false);
