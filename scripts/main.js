var symbols = ['!', '@', '#', '$', '&'];

function symbol() {
	var result = symbols[Math.floor(Math.random() * symbols.length)];
	return result
}

function cap(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function randNum() {
	return Math.floor(Math.random() * (99 - 10) + 10);
}

function randWordLogan() {
	return Math.floor(Math.random() * (2004 - 0) + 0);
}

function randWordAlex() {
	return Math.floor(Math.random() * (1083 - 0) + 0);
}

function executeLogan() {
	var wordArrayLogan = [];
	$.getJSON('data/logan.json', function (data) {
		$.each(data, function (i, item) {
			wordArrayLogan.push(item.word);
		});
		var password_1 = wordArrayLogan[randWordLogan()].toLowerCase() + cap(wordArrayLogan[randWordLogan()]) + randNum() + symbol()
		var password_2 = wordArrayLogan[randWordLogan()].toLowerCase() + cap(wordArrayLogan[randWordLogan()]) + randNum() + symbol()
		var password_3 = wordArrayLogan[randWordLogan()].toLowerCase() + cap(wordArrayLogan[randWordLogan()]) + randNum() + symbol()
		var password_4 = wordArrayLogan[randWordLogan()].toLowerCase() + cap(wordArrayLogan[randWordLogan()]) + randNum() + symbol()
		var password_5 = wordArrayLogan[randWordLogan()].toLowerCase() + cap(wordArrayLogan[randWordLogan()]) + randNum() + symbol()


		$(".password1").html(password_1);
		$(".password2").html(password_2);
		$(".password3").html(password_3);
		$(".password4").html(password_4);
		$(".password5").html(password_5);

	});
}

function executeAlex() {
	var wordArrayAlex = [];
	$.getJSON('data/alex.json', function (data) {
		$.each(data, function (i, item) {
			wordArrayAlex.push(item.word);
		});
		var password_6 = cap(wordArrayAlex[randWordAlex()]) + cap(wordArrayAlex[randWordAlex()]) + randNum() + symbol()
		var password_7 = cap(wordArrayAlex[randWordAlex()]) + cap(wordArrayAlex[randWordAlex()]) + randNum() + symbol()
		var password_8 = cap(wordArrayAlex[randWordAlex()]) + cap(wordArrayAlex[randWordAlex()]) + randNum() + symbol()
		var password_9 = cap(wordArrayAlex[randWordAlex()]) + cap(wordArrayAlex[randWordAlex()]) + randNum() + symbol()
		var password_10 = cap(wordArrayAlex[randWordAlex()]) + cap(wordArrayAlex[randWordAlex()]) + randNum() + symbol()


		$(".password6").html(password_6);
		$(".password7").html(password_7);
		$(".password8").html(password_8);
		$(".password9").html(password_9);
		$(".password10").html(password_10);

	});
}

function runPasswords() {
	executeAlex();
	executeLogan();
	$(".copiedConfirm").html('');
	clearSelection();
}

function showCopied() {
	$(".copiedConfirm").html('COPIED!');
}

function selectText(containerid) {
	if (document.selection) { // IE
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select();
		document.execCommand('copy');
		showCopied();
	} else if (window.getSelection) {
		var range = document.createRange();
		window.getSelection().removeAllRanges();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
		document.execCommand('copy');
		showCopied();
	}
}

function clearSelection() {
	if (window.getSelection) {
		window.getSelection().removeAllRanges();
	} else if (document.selection) {
		document.selection.empty();
	}
}

function escapeLineBreak(unsafe) {
    return unsafe
        .replace(/(\r\n|\n|\r)/gm, "");
}

document.addEventListener('copy', function(e){

    // We need to prevent the default copy functionality,
    // otherwise it would just copy the selection as usual.
    e.preventDefault();

    // The copy event doesn't give us access to the clipboard data,
    // so we need to get the user selection via the Selection API.
    var selection = window.getSelection().toString();

    // Transform the selection in any way we want.
    // In this example we will escape HTML code.
    var escaped = escapeLineBreak(selection);

    // Place the transformed text in the clipboard. 
    e.clipboardData.setData('text/plain', escaped);

});