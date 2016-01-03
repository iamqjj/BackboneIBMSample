App.Views.Teams = Backbone.View.extend({
	el : 'ul.team-list'
});

App.Views.Team = Backbone.View.extend({
	//className : '.team-element',
	//tagName : 'div',
	el : 'div.team-element',
	model : new App.Models.Team(),
	
	initialize : function() {
		this.model.bind('change', this.render, this);
		this.model.set({
			name : "qjjin"
		});
		this.render();
	},

	render : function() {
		// Compile the template
		var compiledTemplate = _.template($('#teamTemplate').html());

		//$(this.el).html("<span>" + this.model.get("name") + "</span>");
		$(this.el).html(compiledTemplate(this.model.toJSON()));
		//$("div..team-element").html("<span>" + this.model.get("name") + "</span>");
		//$(this.el).html("<span>" + this.model.get("name") + "</span>");
	},
	events : {
		'click a.more' : 'moreInfo'
	},
	
	moreInfo : function(e){
		// Logic here
	}

});
