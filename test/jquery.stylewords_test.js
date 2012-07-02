/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

	module('jQuery#stylewords', {
		setup: function(){
			this.elems = $('p#fixture');
		}
	});
	
	test('is available on the jQuery object', 1, function(){
		ok($.fn.stylewords, 'Should be accessible on a collection.');
	});

	test('should be chainable', 1, function(){
		strictEqual(this.elems.stylewords(), this.elems, 'It returns the jQuery object');
	});
	
	test('should wrap a specified number of words in an HTML span tag', 1, function(){
		this.elems.stylewords();																				
		ok(this.elems.find('span').length, 'It should add a span tag within the collection');
	});
	
	test('defaults to wrapping only 1 word', 1, function(){
		this.elems.stylewords();
		strictEqual(this.elems.find('span').text(), 'Lorem', 'It wraps a single word by default');
	});
	
	test('allows the user to specify the number of words as the first param', 1, function(){
		this.elems.stylewords(3);
		strictEqual(this.elems.find('span').text(), 'Lorem ipsum dolar');
	});
	
	test('offers a default on the styleWords namespace', 1, function(){
		ok(!!$.fn.stylewords.defaults, 'The user can change the defaults without editing the plugin');
	});
	
	test('allows the user to override the defaults', 2, function(){
		this.elems.stylewords(1, {
			tag: '<strong>'
		});
		ok(this.elems.find('strong').length);	
		strictEqual(this.elems.find('strong').text(), 'Lorem');
	});
	
	test('should apply a default class of `styleWords`', 1, function(){
		this.elems.stylewords();
		ok(this.elems.find('span').hasClass('styleWords'));
	});
	
	test('lets the user override the elem\'s attributes', 2, function(){
		this.elems.stylewords(2, {
			id: 'some-id',
			'class': 'some-class'  
		});
		ok(this.elems.find('span').hasClass('some-class'), 'The usuer can add his/her own class name');
		strictEqual(this.elems.find('span').attr('id'), 'some-id');
	});
}(jQuery));