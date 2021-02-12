const Portfolio = (function() {
	function makeWords() {
		var words = [
			{
				text: 'Django',
				weight: 12.3
			},
			{
				text: 'Flask',
				weight: 12.3
			},
			{
				text: 'HTML5',
				weight: 8
			},
			{
				text: 'CSS3',
				weight: 8
			},
			{
				text: 'Web development',
				weight: 14
			},
			{
				text: 'ReactJS',
				weight: 11
			},
			{
				text: 'Programming',
				weight: 7
			},
			{
				text: 'Python',
				weight: 10
			},
			{
				text: 'Computer Science',
				weight: 9
			},
			{
				text: 'JavaScript',
				weight: 15
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, { delay: 120 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$('#my-modal form').addClass('my-form');
	}

	function typeAnimation() {
		Typed.new('#writing-text', {
			strings: [
				'am a World-class Software Engineer.',
				'am a Full-Stack Web Developer.',
				'solve problems.',
				'increase efficiency.',
				'love people and code.'
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$('#writing-text').css({
					color: '##000',
				});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	};
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
