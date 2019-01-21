var prefix = "https://cors-anywhere.herokuapp.com/";

var baseUrl = prefix + 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3761',
	'X-Auth-Token': '3ad153f2f5a07dab6b5e55d2f7fffdd0'
};

fetch(baseUrl + '/board', { headers: myHeaders })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
	});
	
function backgroundColor () {
	var color = ['rgb(63,81,181)','rgb(13,71,161)','rgb(213,0,249)','rgb(211,47,47)'];
	return color[Math.floor(Math.random()*4)];
}

function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
		if( name === 'card-template' ) {
			element.childNodes[1].style.backgroundColor = backgroundColor();
		}
  	return element;
}

function setupColumns(columns) {
	columns.forEach(function(column) {
		  var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}
function setupCards(col, cards) {
	cards.forEach(function (card) {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}
