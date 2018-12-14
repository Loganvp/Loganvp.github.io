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

function executeLogan() {
	var wordArrayLogan = [];
	$.getJSON('https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minDictionaryCount=10&includePartOfSpeech=noun,verb,adjective&minCorpusCount=0&minLength=4&maxLength=6&limit=10&api_key=62dcd3414db907722420e014ca302c1c397302ac5e0682878', function (data) {
		$.each(data, function (i, item) {
			wordArrayLogan.push(item.word);
		});
		var password_1 = wordArrayLogan[0].toLowerCase() + cap(wordArrayLogan[5]) + randNum() + symbol()
		var password_2 = wordArrayLogan[1].toLowerCase() + cap(wordArrayLogan[6]) + randNum() + symbol()
		var password_3 = wordArrayLogan[2].toLowerCase() + cap(wordArrayLogan[7]) + randNum() + symbol()
		var password_4 = wordArrayLogan[3].toLowerCase() + cap(wordArrayLogan[8]) + randNum() + symbol()
		var password_5 = wordArrayLogan[4].toLowerCase() + cap(wordArrayLogan[9]) + randNum() + symbol()


		$(".password1").html(password_1);
		$(".password2").html(password_2);
		$(".password3").html(password_3);
		$(".password4").html(password_4);
		$(".password5").html(password_5);

	});
}

function executeAlex() {
	var wordArrayAlex = [];
	$.getJSON('https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minDictionaryCount=50&includePartOfSpeech=noun,verb,adjective&minCorpusCount=0&minLength=4&maxLength=4&limit=10&api_key=62dcd3414db907722420e014ca302c1c397302ac5e0682878', function (data) {
		$.each(data, function (i, item) {
			wordArrayAlex.push(item.word);
		});
		var password_6 = cap(wordArrayAlex[0]) + cap(wordArrayAlex[5]) + randNum() + symbol()
		var password_7 = cap(wordArrayAlex[1]) + cap(wordArrayAlex[6]) + randNum() + symbol()
		var password_8 = cap(wordArrayAlex[2]) + cap(wordArrayAlex[7]) + randNum() + symbol()
		var password_9 = cap(wordArrayAlex[3]) + cap(wordArrayAlex[8]) + randNum() + symbol()
		var password_10 = cap(wordArrayAlex[4]) + cap(wordArrayAlex[9]) + randNum() + symbol()


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
		range.selectNode(document.getElementById(containerid));
		window.getSelection().removeAllRanges();
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