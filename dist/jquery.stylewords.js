/*! jQuery Stylewords - v0.1.0 - 2012-07-02
* https://github.com/admin/jquery.stylewords
* Copyright (c) 2012 Ruchira Chamara; Licensed MIT, GPL */

(function($) {

	var styleWords = {
		init: function(el, numWords, config){
			this.numWords = numWords || 1;	
			
			this.config = $.extend({}, $.fn.stylewords.defaults, config)
			this.el = el;
			this.$el = $(el);
			this.updateHTML();
		},
		updateHTML: function(){
			var self = this;
			this.$el.html(function(i, text){
				return self.createWrapper(text);
			});
		},
		createWrapper: function(text){
			var words = text.split(' '),
				tag = this.config.tag,
				wrapper;
			delete this.config.tag;	
			wrapper = $(tag, this.config).text(words.splice(0, this.numWords).join(' '));
			wrapper = $('<div>').append(wrapper).html();
			return [wrapper].concat(words).join(' ')
		}
	};
	
	$.fn.stylewords = function(numWords, config){
		var obj = Object.create(styleWords);
		return this.each(function(){
			obj.init(this, numWords, config);			  
		});
	};
	
	$.fn.stylewords.defaults = {
		tag: '<span>',
		'class': 'styleWords'
	};
	
	$('#coll').stylewords();
	$('#coll').stylewords(5);	
}(jQuery));