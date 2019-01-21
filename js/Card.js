function Card(id, name) {
	var self = this;
	this.id = id;
	this.name = name || 'No name given';
	this.element = 	generateTemplate('card-template', { description: this.name }, 'li');
	this.element.querySelector('.card').addEventListener('click', function (event) {
		event.stopPropagation();
	
		if (event.target.classList.contains('btn-delete1')) {
			console.log(self)
			self.removeCard();
		}
	});
}

Card.prototype = {
	removeCard: function() {
		console.log(this.id)
		var self = this;
		fetch(baseUrl + '/card/' + this.id, { method: 'DELETE', headers: myHeaders })
		  .then(function(resp) {
			return resp.json();
		  })
		  .then(function(resp) {
				console.log(self.element)
			self.element.parentNode.removeChild(self.element);
		  })
	}
}